"use client"

import Image from "next/image"
import GifHover from "./gif-hover"

export default function AboutMe() {
  return (
      <section id="about" className="mb-16">
        <div className="flex items-center gap-6 mb-12 ">
          <div className="relative">
              <div className="w-35 h-35 rounded-full overflow-hidden border-6 border-white shadow-lg">
              <Image
                  src="/profile-photo.jpg"
                  alt="Minh Pham"
                  width={200}
                  height={80}
                  className={"object-cover"}
              />
            </div>
            <div className="absolute -top-4 -left-4">
              <svg width="43" height="47" viewBox="0 0 68 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M22.4259 68.5278C16.0259 66.7318 9.32534 65.8258 2.82534 64.9958C1.42534 64.8218 0.125535 65.7928 0.0255346 67.1608C-0.174465 68.5298 0.826121 69.7818 2.12612 69.9557C8.42612 70.7548 14.9255 71.6097 21.0255 73.3387C22.3255 73.7137 23.7261 72.9418 24.1261 71.6138C24.5261 70.2868 23.7259 68.9038 22.4259 68.5278Z"
                      fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M41.8251 43.0649C31.5251 32.5539 19.9251 23.3959 9.8251 12.6029C8.9251 11.5949 7.3251 11.5409 6.3251 12.4819C5.3251 13.4239 5.22549 15.0079 6.22549 16.0159C16.3255 26.8399 27.9255 36.0279 38.2255 46.5699C39.2255 47.5539 40.8251 47.5679 41.8251 46.5999C42.7251 45.6329 42.8251 44.0489 41.8251 43.0649Z"
                      fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M61.1264 2.63576C61.4264 8.65176 61.7259 14.6678 62.0259 20.6848C62.0259 22.0628 63.2264 23.1268 64.6264 23.0598C66.0264 22.9918 67.0259 21.8188 67.0259 20.4398C66.7259 14.4138 66.4264 8.38876 66.1264 2.36376C66.0264 0.985757 64.8262 -0.0712432 63.4262 0.00375683C62.1262 0.0787568 61.0264 1.25876 61.1264 2.63576Z"
                      fill="black"/>
              </svg>
            </div>
          </div>
          <div>
            <p className="text-black text-xl">Hello, my name is</p>
            <h1 className="text-3xl font-bold text-black mb-1">Minh Pham</h1>
            <p className="text-black">Data Science Student @ Fei Tian College</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="relative">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-2">
              About Me
            </h2>
            <div className="absolute -top-3 left-34 ">
              <svg width="22" height="22" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_675_10)">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M3.43837 11.9421C4.64299 11.5128 5.91063 10.9424 6.88816 10.1164C8.04916 9.13544 8.52133 7.872 8.83841 6.54208C9.24548 4.83346 9.40814 3.01336 9.90176 1.30198C10.0845 0.66644 10.4363 0.426205 10.5872 0.31959C10.9686 0.0502822 11.3542 -0.0217036 11.717 0.00529644C12.1469 0.0364503 12.7375 0.199131 13.1259 0.919824C13.1812 1.02298 13.2532 1.18014 13.3017 1.39545C13.337 1.55329 13.3598 2.0469 13.3972 2.25044C13.4907 2.75167 13.5689 3.25292 13.6423 3.75692C13.8867 5.43438 14.0272 6.85913 14.7992 8.4002C15.8466 10.4924 16.8962 11.7724 18.3196 12.3394C19.6959 12.8877 21.3415 12.7846 23.444 12.3547C23.6441 12.3062 23.8421 12.2647 24.038 12.2308C24.965 12.0688 25.8512 12.6773 26.0332 13.6008C26.2153 14.5237 25.6262 15.423 24.7075 15.6258C24.5157 15.6681 24.3267 15.7082 24.1398 15.7449C21.2986 16.4483 18.0094 18.9586 16.0979 21.1567C15.5088 21.8345 14.6462 23.7293 13.7662 24.9381C13.1169 25.8297 12.3872 26.4175 11.7745 26.6252C11.3639 26.7651 11.0178 26.7436 10.7319 26.673C10.3165 26.5705 9.97172 26.3455 9.70726 25.9876C9.56326 25.7917 9.42961 25.5293 9.36592 25.1942C9.33546 25.0329 9.33201 24.6231 9.33271 24.4375C9.1534 23.8207 8.93393 23.2184 8.77401 22.596C8.39255 21.111 7.64415 20.1708 6.75523 18.9288C5.92377 17.7664 5.03072 17.0361 3.72157 16.4531C3.55126 16.4116 2.17702 16.0751 1.69171 15.882C0.982792 15.5988 0.644928 15.1246 0.522389 14.8691C0.314005 14.4357 0.292562 14.0571 0.3341 13.7414C0.395716 13.2755 0.604794 12.8767 0.975871 12.5548C1.20572 12.3547 1.5491 12.1601 2.0088 12.0653C2.36395 11.9912 3.30614 11.9483 3.43837 11.9421ZM11.5003 9.52174C11.564 9.66366 11.6319 9.80629 11.7039 9.95029C13.238 13.0144 14.9535 14.7251 17.0388 15.5552L17.1087 15.5822C15.7137 16.6179 14.4509 17.7754 13.4858 18.8852C13.0884 19.3421 12.5623 20.2913 11.9939 21.2647C11.4775 19.5858 10.6329 18.3992 9.57086 16.9142C8.75947 15.7809 7.90932 14.928 6.86463 14.2329C7.67532 13.8169 8.44862 13.3295 9.12223 12.7604C10.2438 11.8126 10.9852 10.7146 11.5003 9.52174Z"
                        fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_675_10">
                    <rect width="27" height="27" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="absolute -top-2 -left-2">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_675_10)">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M3.43837 11.9421C4.64299 11.5128 5.91063 10.9424 6.88816 10.1164C8.04916 9.13544 8.52133 7.872 8.83841 6.54208C9.24548 4.83346 9.40814 3.01336 9.90176 1.30198C10.0845 0.66644 10.4363 0.426205 10.5872 0.31959C10.9686 0.0502822 11.3542 -0.0217036 11.717 0.00529644C12.1469 0.0364503 12.7375 0.199131 13.1259 0.919824C13.1812 1.02298 13.2532 1.18014 13.3017 1.39545C13.337 1.55329 13.3598 2.0469 13.3972 2.25044C13.4907 2.75167 13.5689 3.25292 13.6423 3.75692C13.8867 5.43438 14.0272 6.85913 14.7992 8.4002C15.8466 10.4924 16.8962 11.7724 18.3196 12.3394C19.6959 12.8877 21.3415 12.7846 23.444 12.3547C23.6441 12.3062 23.8421 12.2647 24.038 12.2308C24.965 12.0688 25.8512 12.6773 26.0332 13.6008C26.2153 14.5237 25.6262 15.423 24.7075 15.6258C24.5157 15.6681 24.3267 15.7082 24.1398 15.7449C21.2986 16.4483 18.0094 18.9586 16.0979 21.1567C15.5088 21.8345 14.6462 23.7293 13.7662 24.9381C13.1169 25.8297 12.3872 26.4175 11.7745 26.6252C11.3639 26.7651 11.0178 26.7436 10.7319 26.673C10.3165 26.5705 9.97172 26.3455 9.70726 25.9876C9.56326 25.7917 9.42961 25.5293 9.36592 25.1942C9.33546 25.0329 9.33201 24.6231 9.33271 24.4375C9.1534 23.8207 8.93393 23.2184 8.77401 22.596C8.39255 21.111 7.64415 20.1708 6.75523 18.9288C5.92377 17.7664 5.03072 17.0361 3.72157 16.4531C3.55126 16.4116 2.17702 16.0751 1.69171 15.882C0.982792 15.5988 0.644928 15.1246 0.522389 14.8691C0.314005 14.4357 0.292562 14.0571 0.3341 13.7414C0.395716 13.2755 0.604794 12.8767 0.975871 12.5548C1.20572 12.3547 1.5491 12.1601 2.0088 12.0653C2.36395 11.9912 3.30614 11.9483 3.43837 11.9421ZM11.5003 9.52174C11.564 9.66366 11.6319 9.80629 11.7039 9.95029C13.238 13.0144 14.9535 14.7251 17.0388 15.5552L17.1087 15.5822C15.7137 16.6179 14.4509 17.7754 13.4858 18.8852C13.0884 19.3421 12.5623 20.2913 11.9939 21.2647C11.4775 19.5858 10.6329 18.3992 9.57086 16.9142C8.75947 15.7809 7.90932 14.928 6.86463 14.2329C7.67532 13.8169 8.44862 13.3295 9.12223 12.7604C10.2438 11.8126 10.9852 10.7146 11.5003 9.52174Z"
                      fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_675_10">
                  <rect width="27" height="27" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I'm a Data Science major with extensive software development experience spanning mobile app development, test automation, and full-stack technologies. With four internship experiences including recent roles as a Software Engineer at Stealth and Mobile Developer at Ticketingbox Inc, I specialize in cross-platform development, automated testing frameworks, and API integration. I have successfully built complete mobile applications from scratch and implemented enterprise-level testing infrastructure.
            </p>
            <p>
              Outside of tech, I'm{' '}

              <GifHover
                  // gifUrl="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"
                  gifUrl={'/smash-lin-dan.gif'}
                  className="font-semibold text-blue-500 underline cursor-pointer"
                  redirectURL="https://www.linkedin.com/feed/update/urn:li:activity:7312539809267257347/"
              >
                founder and team captain
              </GifHover>
              {' '}for our college badminton team and enjoy staying active through running and the gym. I also play classical guitar
              and clarinet, love karaoke, and am always up for good boba.
            </p>
            {/*FOR FUTURE USE WHEN I DO HAVE A BLOG*/}
            {/*<p>I document my journey on my personal blog. Check it out!</p>*/}
            {/*<div className="flex items-center gap-2 mt-4">*/}
            {/*  <div className="w-6 h-6 rounded-full bg-white border-2 border-orange-400 flex items-center justify-center">*/}
            {/*    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path*/}
            {/*          d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V12V10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807612 11.9792 0.807612 11.3934 1.3934C10.8076 1.97918 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 12V13.5H22V12V10.5H2V12Z"*/}
            {/*          fill="#FF8904"/>*/}
            {/*    </svg>*/}
            {/*  </div>*/}
            {/*  <a href="#" className="text-orange-400 font-bold hover:underline">*/}
            {/*    PERSONAL BLOG*/}
            {/*  </a>*/}
            {/*</div>*/}


          </div>
        </div>
      </section>
  )
}