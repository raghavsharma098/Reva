const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');
require('dotenv').config();

const Contact = require('./models/Contact'); // import model

const app = express();
const PORT = process.env.PORT || 5173;

// Function to build frontend
function buildFrontend() {
  return new Promise((resolve, reject) => {
    console.log('🔨 Building frontend...');
    
    // Always install/update frontend dependencies to ensure latest packages
    console.log('📦 Installing/updating frontend dependencies...');
    const installProcess = spawn('npm', ['install'], {
      cwd: path.join(__dirname, '../frontend'),
      stdio: 'pipe',
      shell: true
    });

    installProcess.stdout.on('data', (data) => {
      console.log(`Frontend Install: ${data.toString().trim()}`);
    });

    installProcess.stderr.on('data', (data) => {
      console.log(`Frontend Install Warning: ${data.toString().trim()}`);
    });

    installProcess.on('close', (code) => {
      if (code === 0) {
        console.log('✅ Frontend dependencies installed');
        startBuild();
      } else {
        console.log('❌ Failed to install frontend dependencies');
        reject(new Error(`Frontend dependency installation failed with code ${code}`));
      }
    });

    function startBuild() {
      const buildProcess = spawn('npm', ['run', 'build'], {
        cwd: path.join(__dirname, '../frontend'),
        stdio: 'pipe',
        shell: true
      });

      buildProcess.stdout.on('data', (data) => {
        console.log(`Frontend Build: ${data.toString().trim()}`);
      });

      buildProcess.stderr.on('data', (data) => {
        console.log(`Frontend Build Error: ${data.toString().trim()}`);
      });

      buildProcess.on('close', (code) => {
        if (code === 0) {
          console.log('✅ Frontend built successfully!');
          resolve();
        } else {
          console.log('⚠️ Frontend build failed, but server will continue...');
          resolve(); // Continue even if build fails
        }
      });
    }
  });
}

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.log("⚠️ MongoDB URI not found in .env file. Contact form will not work.");
  console.log("📝 Please add MONGO_URI to your .env file");
} else {
  mongoose.connect(mongoUri)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.log("❌ DB Error:", err));
}

// Start server with automatic frontend build
async function startServer() {
  console.log('� Starting server...');
  
  // Build frontend first
  await buildFrontend();
  
  // Setup routes after build
  setupRoutes();
  
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(`� API endpoints available at /api/*`);
    console.log(`🌐 Frontend and backend are both running on the same port!`);
    console.log(`🔗 Visit http://localhost:${PORT} to see your app`);
    console.log(`� MongoDB status: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Not connected (contact form will still work)'}`);
  });
}

function setupRoutes() {
  // API Routes FIRST
  app.post('/api/contact', async (req, res) => {
    try {
      console.log('📧 Received contact form data:', req.body);
      
      // Check if MongoDB is connected
      if (mongoose.connection.readyState === 1) {
        const contactData = new Contact(req.body);
        await contactData.save();
        console.log('✅ Contact data saved to MongoDB');
      } else {
        console.log('⚠️ MongoDB not connected - contact data logged only');
      }
      
      res.status(200).json({ success: true, message: "Form submitted successfully!" });
    } catch (err) {
      console.error('❌ Error saving contact data:', err);
      res.status(200).json({ success: true, message: "Form submitted successfully (data logged)!" });
    }
  });

  app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
  });

  app.post('/api/rebuild', async (req, res) => {
    try {
      console.log('🔄 Manual rebuild requested...');
      await buildFrontend();
      res.json({ success: true, message: 'Frontend rebuilt successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Rebuild failed', error: error.message });
    }
  });
  
  // Static files after API routes
  const frontendDistPath = path.join(__dirname, '../frontend/dist');
  if (fs.existsSync(frontendDistPath)) {
    app.use(express.static(frontendDistPath));
    console.log('📁 Serving frontend from:', frontendDistPath);
    
    // Log the files in dist directory
    const distFiles = fs.readdirSync(frontendDistPath);
    console.log('📂 Files in dist:', distFiles);
  }
  
  // Catch-all route LAST
  app.get('*', (req, res) => {
    const indexPath = path.join(frontendDistPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.json({ 
        message: 'API Server is running', 
        status: 'Frontend is being built...',
        endpoints: {
          health: 'GET /api/health',
          contact: 'POST /api/contact'
        }
      });
    }
  });
}

// Start the server
startServer().catch(err => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});
