export default function Education() {
  return (
    <section id="education" className="mb-16">
      <div className='relative'>
        <h2 className="text-3xl font-bold text-black mb-8 flex items-center gap-2">
          Education
        </h2>
        <div className='absolute -top-2 left-36'>
          <svg width="22" height="23" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M15.2054 30.0593C19.3404 29.0344 23.3225 29.1015 27.5168 28.9787C28.336 28.9548 29.017 29.6033 29.0416 30.4263C29.0663 31.2498 28.4199 31.937 27.6007 31.9614C23.6236 32.0778 19.8388 31.9838 15.911 32.9565C15.1166 33.1534 14.3122 32.6636 14.1198 31.8639C13.9224 31.0648 14.4109 30.2557 15.2054 30.0593Z"
                  fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M7.19182 21.3517C13.4981 14.3986 21.6103 7.84738 29.8015 3.26837C30.517 2.86905 31.4201 3.12915 31.8148 3.84922C32.2096 4.56929 31.953 5.47832 31.2375 5.87764C23.3177 10.3055 15.4718 16.6414 9.37776 23.3647C8.8251 23.9724 7.88755 24.0146 7.28555 23.4592C6.68354 22.9037 6.63916 21.9594 7.19182 21.3517Z"
                  fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M0.303257 19.5904C-0.737916 13.2311 1.03847 6.67641 3.55012 0.893971C3.88073 0.139588 4.7541 -0.204545 5.49921 0.125156C6.24925 0.455354 6.58975 1.33606 6.26408 2.09044C3.97448 7.3567 2.27701 13.3127 3.22443 19.1046C3.35766 19.9172 2.80994 20.6855 2.00563 20.8192C1.20131 20.9535 0.436488 20.4025 0.303257 19.5904Z"
                  fill="black"/>
          </svg>
        </div>
      </div>

      <div className="space-y-6">
        {/* Master's Degree */}
        <div className="bg-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4 text-xl">
            <h3 className="font-semibold text-gray-500">M.S. in Data Science @ Fei Tian College</h3>
            <span className="hidden md:block text-sm text-gray-600">Expected Spring 2027 (4+1 Program)</span>
          </div>
          <span className="md:hidden text-sm text-gray-600 mb-4">Expected Spring 2027 (4+1 Program)</span>
          <p className="md:hidden text-gray-600 text-sm">upcoming...</p>
          <p className="hidden md:block text-center text-gray-600 text-sm">upcoming...</p>
        </div>

        {/* Bachelor's Degree */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-black text-xl">
              B.S. in Data Science @ {" "}
              <a
                href="https://feitian.edu/"
                className="relative text-orange-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                target="_blank"
                rel="noopener noreferrer"
              >Fei Tian College</a>
            </h3>
            <span className="hidden md:block text-sm text-gray-600">Fall 2023 - Spring 2026</span>
          </div>
          <div className="md:hidden text-sm text-gray-600 mb-4">Fall 2023 - Spring 2026</div>
          <div className="flex gap-4 mb-4 text-medium">
            <div>
              <span className="font-bold text-black">GPA:</span>
              <span className="text-gray-700"> 3.59</span>
            </div>
            <div>
              <span className="font-bold text-black">Dean's List:</span>
              <span className="text-gray-700"> 4 consecutive semesters</span>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-black mb-2">Relevant Coursework:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Machine Learning (ongoing), Data Mining, Data Inference, Data Visualization</li>
              <li>• Probability Theory and Methods, Data Structure and Algorithms, Database Systems</li>
              <li>• Front-End Web Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">Leadership and Activities</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Founder & Team Captain, Badminton Team</li>
              <li>• Co-Founder & Vice President, Badminton Club</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
