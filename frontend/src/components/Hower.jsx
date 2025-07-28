import React from "react";

export default function AboutREVA() {
  return (
    <section className="bg-white text-black py-20 px-6 sm:px-12 md:px-24 space-y-16">
      {/* About Us Section */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-[#D75A00]">About Us</h2>
        <p className="text-lg font-medium mb-6">
          <strong>REVA - Real Estate Verified Alliances</strong><br />
          India’s First Verified Real Estate Professional Networking App - Agents,
          Developers, Professionals & Investors on One Platform.
        </p>
        <p className="text-gray-700 mb-4">
          REVA (Real Estate Verified Alliances) is India’s pioneering platform designed
          to bring together real estate agents, developers, professionals, and investors
          on a single, trusted network. Our mission is to organize and empower the Indian
          real estate ecosystem by fostering authentic connections, streamlining
          collaboration, and enhancing business opportunities — both online and offline.
        </p>
        <p className="text-gray-700 mb-4">
          Founded by industry experts and featured by LEXORA Intelligence & Legal Studies LLP,
          REVA leverages innovative technology and curated experiences to create a vibrant,
          secure, and growth-focused community for real estate stakeholders across India.
        </p>
        <p className="text-gray-700">
          Hybrid Mobile app interface that helps people feel more connected both online and offline.
          At REVA we redefine the way real estate professionals connect, collaborate, and grow!
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-[#D75A00]">Contact Us</h2>
        <p className="mb-4">We’d love to hear from you! Whether you have a question about membership, partnerships, support, or anything else, our team is ready to help.</p>
        <ul className="space-y-2 mb-6">
          <li>Email: <a href="mailto:reva@lilsindia.com" className="text-blue-600">reva@lilsindia.com</a></li>
          <li>Phone: +91 81234 39 678</li>
        </ul>
        <div className="text-gray-700 mb-6">
          <strong>Registered Office Address:</strong><br />
          LEXORA REVA Network.<br />
          C/o. Lexora Intelligence & Legal Studies LLP<br />
          Level 15, UB City,<br />
          24, Vittal Mallya Road,<br />
          Bangalore -560001.<br />
          Karnataka, India
        </div>
        <p className="mb-4">
          You can also connect with us on LinkedIn, Facebook, Instagram, and Twitter.
        </p>
        <form className="space-y-4">
          <input className="w-full p-3 border rounded" type="text" placeholder="Name" required />
          <input className="w-full p-3 border rounded" type="email" placeholder="Email" required />
          <input className="w-full p-3 border rounded" type="tel" placeholder="Mobile" required />
          <textarea className="w-full p-3 border rounded" rows="4" placeholder="Message" required></textarea>
          <button type="submit" className="bg-[#D75A00] text-white px-6 py-2 rounded font-bold hover:bg-orange-600">Submit</button>
        </form>
        <p className="text-sm text-gray-500 mt-2">Our team typically responds within 1-2 business days.</p>
      </div>

      {/* Terms & Conditions */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-[#D75A00]">Terms and Conditions</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>User Responsibilities: Provide accurate info, use the platform ethically, and respect others.</li>
          <li>Account Security: Keep credentials secure. Report unauthorized activity.</li>
          <li>Content Use: All content is owned by REVA unless stated otherwise.</li>
          <li>Restrictions: No misuse or duplication without permission.</li>
          <li>Limitation of Liability: REVA is not liable for any losses from platform use.</li>
          <li>Modifications: Terms may change without notice. Continued use implies acceptance.</li>
        </ul>
        <p className="mt-4 text-blue-600 cursor-pointer">[Download/View full document here]</p>
      </div>

      {/* Privacy Policy */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-[#D75A00]">Privacy Policy</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Information We Collect: Name, email, phone, E-KYC, and usage data.</li>
          <li>How We Use Data: For account creation, personalization, and platform security.</li>
          <li>Cookies & Tracking: Used for analytics and better user experience.</li>
          <li>Sharing & Disclosure: Not sold/rented. Shared only for essential services or legal reasons.</li>
          <li>Data Security: Industry-standard protocols in place.</li>
          <li>User Rights: You may request to access, edit, or delete your data.</li>
        </ul>
        <p className="mt-4 text-blue-600 cursor-pointer">[Read full privacy policy here]</p>
        <p className="mt-2">For queries, email: <a href="mailto:reva@lilsindia.com" className="text-blue-600">reva@lilsindia.com</a></p>
      </div>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-[#D75A00]">Disclaimer</h2>
        <p className="text-gray-700 mb-4">
          The information on the REVA platform is for general purposes only. REVA makes no guarantees on completeness,
          reliability, or accuracy. Users should do their own due diligence.
        </p>
        <p className="text-gray-700">
          REVA does not offer financial, legal, or professional advice and is not liable for any loss or damage due to usage.
        </p>
        <p className="mt-4 text-blue-600 cursor-pointer">[Read full disclaimer here]</p>
      </div>

      {/* Social Media */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#D75A00]">Connect With Us</h2>
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <span>Instagram (@revaindiaofficial)</span>
          <span>LinkedIn (@reva-india)</span>
          <span>Facebook (@revaindia)</span>
          <span>Twitter (X) (@revaindia)</span>
          <span>YouTube (@REVAIndia)</span>
          <span>WhatsApp Channel & Telegram Channel</span>
          <span>&lt;lexoraREVA&gt;</span>
        </div>
      </div>

      {/* SEO Keywords */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-[#D75A00]">SEO Optimization</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Real Estate Networking App India</li>
          <li>Verified Real Estate Agents</li>
          <li>Real Estate Professional Networking</li>
          <li>Real Estate Business Platform</li>
          <li>Real Estate App India</li>
          <li>Property Dealer Networking</li>
          <li>Real Estate Developers Network</li>
          <li>Invest in Indian Real Estate</li>
          <li>Connect with Real Estate Experts</li>
          <li>Verified Real Estate Services India</li>
        </ul>
      </div>
    </section>
  );
}
