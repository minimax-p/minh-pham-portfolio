"use client"

export default function Experience() {
  return (
      <section id="experience" className="mb-16">
        <div className="relative">
          <h2 className="text-3xl font-bold text-black mb-8">Experience</h2>
          <div className="absolute top-10">
            <svg width="155" height="13" viewBox="0 0 267 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M71.1276 21.6612C59.6626 24.9852 46.4256 28.2932 33.6916 29.1192C22.8076 29.8242 12.2947 28.7292 3.68966 24.0702C2.47666 23.4142 0.95766 23.8652 0.30166 25.0792C-0.35534 26.2922 0.0966552 27.8112 1.30966 28.4682C10.6967 33.5492 22.1426 34.8783 34.0146 34.1082C46.9776 33.2682 60.4536 29.9382 72.1486 26.5662C73.5056 29.3152 76.3157 31.8782 81.2656 33.7692C88.8686 36.6742 99.2496 36.6382 110.186 35.0012C126.047 32.6282 143.109 26.9692 154.079 22.9482C154.529 22.7842 155.199 22.5232 156.019 22.1792C156.269 22.7312 156.549 23.2752 156.859 23.8092C159.549 28.4632 164.309 32.2262 169.159 33.5702C199.919 42.0922 235.819 31.8812 265.049 23.5712C266.369 23.1942 267.139 21.8102 266.769 20.4832C266.389 19.1562 265.009 18.3852 263.679 18.7622C235.269 26.8402 200.389 37.0322 170.489 28.7512C166.809 27.7312 163.229 24.8392 161.189 21.3072C160.959 20.9132 160.759 20.5102 160.569 20.1012C164.599 18.1042 169.339 15.3202 171.889 12.3402C174.509 9.28524 175.159 6.02425 172.879 2.94425C170.919 0.311248 167.949 0.0872439 164.859 1.45224C161.529 2.91424 158.099 6.33219 156.989 7.93619C154.909 10.9322 154.249 14.1822 154.629 17.3512C153.649 17.7652 152.853 18.0732 152.362 18.2532C141.632 22.1852 124.955 27.7352 109.446 30.0562C99.4666 31.5502 89.9876 31.7492 83.0496 29.0992C80.0906 27.9682 78.1356 26.6482 77.0746 25.1162C79.1686 24.4902 81.1877 23.8742 83.1167 23.2862C86.9317 22.1232 94.8746 20.1982 100.55 16.7672C105.063 14.0392 108.123 10.3282 107.945 5.67624C107.854 3.28624 106.471 1.69121 104.27 0.797215C100.981 -0.537785 95.2926 0.108201 93.1746 0.558201C86.7506 1.9202 78.1767 7.55823 73.9347 13.9112C72.2417 16.4462 71.2346 19.0982 71.1276 21.6612ZM76.4046 20.0992C78.2196 19.5532 79.9737 19.0172 81.6587 18.5032C85.2197 17.4172 92.6636 15.6922 97.9626 12.4882C100.769 10.7922 103.06 8.76022 102.949 5.86722C102.94 5.64222 102.717 5.57824 102.52 5.48624C102.215 5.34524 101.866 5.24821 101.494 5.17221C98.9766 4.65821 95.5956 5.15519 94.2116 5.44919C88.8216 6.59219 81.6516 11.3572 78.0926 16.6882C77.3406 17.8142 76.7416 18.9612 76.4046 20.0992ZM159.569 15.0492C161.919 13.8402 164.379 12.3782 166.319 10.7872C167.349 9.9422 168.219 9.07324 168.769 8.17124C169.229 7.42524 169.409 6.66119 168.859 5.92319C168.639 5.62419 168.309 5.61823 167.969 5.67423C167.609 5.73423 167.239 5.8622 166.869 6.02719C164.429 7.10119 161.909 9.6102 161.099 10.7872C160.149 12.1522 159.679 13.5962 159.569 15.0492Z"
                    fill="black"/>
            </svg>

          </div>
        </div>

        <div className="relative">
          <div className="space-y-6">
            {/* Software Engineer Intern */}
            <div className="relative flex items-start">
              {/* Date on left */}
              <div className="text-sm text-black w-36 flex-shrink-0 pt-1 hidden md:block">
                Jun 2025 - Aug 2025
              </div>

              {/* Orange bullet point */}
              <div
                  className="hidden md:block absolute left-[147px] top-[5px] w-3 h-3 bg-gray-300 rounded-full z-10 mt-[2px] flex-shrink-0"></div>

              {/* Vertical line - positioned absolutely to stretch full height */}
              <div className="hidden md:block absolute left-[152px] top-[24px] bottom-0 w-0.5 bg-gray-300"></div>

              <div className="ml-6 flex-1">
                {/* Orange bullet point & Dash */}
                <div className="md:hidden absolute left-[0px] top-[6px] w-3 h-3 bg-gray-300 rounded-full z-10"></div>
                <div className="md:hidden absolute left-[5px] top-[24px] bottom-0 w-0.5 bg-gray-300"></div>
                <div className="text-sm text-black mb-1 md:hidden">
                  Jun 2025 - Aug 2025
                </div>
                <h3 className="font-semibold text-black text-xl mb-3">Software Engineer Intern @ Stealth</h3>
                <ul className="space-y-2 text-gray-500 text-sm leading-relaxed">
                  <li>
                    • Piloted Playwright framework implementation for automated E2E testing, establishing protocols for cross-platform applications
                  </li>
                  <li>• Wrote 87 automated tests across mobile/desktop platforms, reducing manual testing overhead</li>
                  <li>
                    • Deployed testing pipeline on Linux server with network-accessible reporting and automated email
                    notifications
                  </li>
                  <li>• Caught 3 critical production bugs undetectable through manual QA processes</li>
                </ul>
              </div>
            </div>

            {/* Academic Partnership */}
            <div className="relative flex items-start">
              {/* Date on left */}
              <div className="text-sm text-black w-36 flex-shrink-0 pt-1 hidden md:block">
                Oct 2024 - Mar 2025
              </div>


              {/* Orange bullet point */}
              <div
                  className="hidden md:block absolute left-[147px] top-[5px] w-3 h-3 bg-gray-300 rounded-full z-10 mt-[2px] flex-shrink-0"></div>

              {/* Vertical line - positioned absolutely to stretch full height */}
              <div className="hidden md:block absolute left-[152px] top-[24px] bottom-0 w-0.5 bg-gray-300"></div>

              <div className="ml-6 flex-1">
                {/* Orange bullet point & Dash */}
                <div className="md:hidden absolute left-[0px] top-[6px] w-3 h-3 bg-gray-300 rounded-full z-10"></div>
                <div className="md:hidden absolute left-[5px] top-[24px] bottom-0 w-0.5 bg-gray-300"></div>
                <div className="text-sm text-black mb-1 md:hidden">Oct 2024 - Mar 2025</div>
                <h3 className="font-semibold text-black text-xl mb-3">
                  Academic Partnership @ <a
                    href="https://www.ticketingbox.com/"
                    className="relative text-orange-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                    target="_blank"
                    rel="noopener noreferrer">
                  ticketingbox</a>
                </h3>
                <ul className="space-y-2 text-gray-500 text-sm leading-relaxed">
                  <li>• Built complete mobile app from scratch in 8 months after legacy Ionic system failure</li>
                  <li>
                    • Integrated 15+ deprecated API endpoints, solving complex JSON-RPC gateway issues through stakeholder
                    collaboration
                  </li>
                  <li>
                    • Designed offline-capable SQLite database enabling real-time barcode validation without internet
                    connectivity
                  </li>
                  <li>
                    • Implemented multi-format barcode scanner supporting QR codes, Code 128, and UPC with instant
                    feedback
                  </li>
                </ul>
              </div>
            </div>

            {/* Research Associate */}
            <div className="relative flex items-start">
              {/* Date on left */}
              <div className="text-sm text-black w-36 flex-shrink-0 pt-1 hidden md:block">
                May 2023 - Jul 2024
              </div>

              {/* Orange bullet point */}
              <div className="hidden md:block absolute left-[147px] top-[5px] w-3 h-3 bg-gray-300 rounded-full z-10 mt-[2px] flex-shrink-0"></div>

              {/* Vertical line - positioned absolutely to stretch full height */}
              <div className="hidden md:block absolute left-[152px] top-[24px] bottom-0 w-0.5 bg-gray-300"></div>

              <div className="ml-6 flex-1">
                {/* Orange bullet point & Dash */}
                <div className="md:hidden absolute left-[0px] top-[6px] w-3 h-3 bg-gray-300 rounded-full z-10"></div>
                <div className="md:hidden absolute left-[5px] top-[24px] bottom-0 w-0.5 bg-gray-300"></div>
                <div className="text-sm text-black mb-1 md:hidden">May 2023 - Jul 2024</div>
                <h3 className="font-semibold text-black text-xl mb-3">
                  Research Associate @ {" "}
                  <a
                      href="https://www.nasa.gov/"
                      className="relative text-orange-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    NASA
                  </a>
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-black mb-2">Earthquake Signal Precursor Mobile App</h4>
                    <ul className="space-y-1 text-gray-500 text-sm leading-relaxed">
                      <li>
                        • Led 6-person development team through 3-week project timeline with Git workflow coordination
                      </li>
                      <li>• Built 3 custom Flutter widgets and performed 80% of testing while fixing 30% of bugs</li>
                      <li>• Designed app prototypes using Figma and Adobe Illustrator for consistent UX/UI</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-black mb-2">Earthquake Signal Precursor Web Application</h4>
                    <ul className="space-y-1 text-gray-500   text-sm leading-relaxed">
                      <li>
                        • Built real-time magnetometer dashboard using NASA's WorldWind library, d3graphs, and Bootstrap
                      </li>
                      <li>
                        • Secured legacy codebase by parameterizing 40+ SQL calls and implementing OTP authentication
                        API
                      </li>
                      <li>• Designed SQL database for user authentication and collaborated on website redesign</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}