"use client"
import { useState } from 'react';

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const emailAddress = "mpham@stu.feitian.edu"; // Update with your email

  const handleEmailCopy = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      await navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = emailAddress;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  return (
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center space-x-4 md:space-x-8 mb-4">
            <a
                href="/resume_3_8_2025.pdf"
                download="Minh_Pham_Resume.pdf"
                className="text-black font-extrabold hover:text-gray-600 transition-colors"
            >
              RESUME
            </a>

            {/* Desktop: Copy to clipboard */}
            <div className="relative hidden md:block">
              <button
                  onClick={handleEmailCopy}
                  className="text-black font-extrabold hover:text-gray-600 transition-colors cursor-pointer"
              >
                EMAIL
              </button>
              {emailCopied && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                    Email copied!
                  </div>
              )}
            </div>

            {/* Mobile: Mailto link */}
            <a
                href={`mailto:${emailAddress}`}
                className="text-black font-extrabold hover:text-gray-600 transition-colors md:hidden"
            >
              EMAIL
            </a>

            <a
                href="https://www.linkedin.com/in/minh-pham-b256ba273/"
                className="text-black font-extrabold hover:text-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
            >
              LINKEDIN
            </a>

            <a
                href="https://github.com/minimax-p"
                className="text-black font-extrabold hover:text-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </div>
          <p className="text-center text-sm text-gray-400 font-bold">Minh © 2025. Thanks for the visit!</p>
        </div>
      </footer>
  )
}