console.log('🚀 Frontend JavaScript is loading...');

// Test if the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM is ready');
    
    // Check if React root exists
    const root = document.getElementById('root');
    if (root) {
        console.log('✅ React root element found');
        
        // Add a fallback message if React doesn't load
        setTimeout(() => {
            if (root.innerHTML.trim() === '') {
                root.innerHTML = `
                    <div style="padding: 20px; font-family: Arial, sans-serif;">
                        <h1 style="color: red;">⚠️ React Failed to Load</h1>
                        <p>The React application failed to mount. Check the console for errors.</p>
                        <p>Server is running at: <a href="/api/health">/api/health</a></p>
                    </div>
                `;
                console.error('❌ React failed to mount after 3 seconds');
            }
        }, 3000);
    } else {
        console.error('❌ React root element not found');
    }
});

// Global error handler
window.addEventListener('error', function(e) {
    console.error('🚨 Global Error:', e.error);
});

console.log('📝 Debug script loaded');
