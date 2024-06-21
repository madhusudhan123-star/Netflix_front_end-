import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Netflix</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Netflix
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Media Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Ways to Watch
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Redeem Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-sm">
          <p>&copy; 2023 Netflix, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;