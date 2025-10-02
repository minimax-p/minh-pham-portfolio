"use client"

import { ExperienceItemProps } from './types'

export default function ExperienceItem({
                                           startDate,
                                           endDate,
                                           title,
                                           company,
                                           companyLink,
                                           bulletPoints,
                                       }: ExperienceItemProps) {
    return (
        <div className="relative flex items-start">
            {/* Date on left */}
            <div className="text-sm text-black w-36 flex-shrink-0 pt-1 hidden md:block">
                {startDate} - {endDate}
            </div>

            {/* Bullet point */}
            <div className="hidden md:block absolute left-[147px] top-[5px] w-3 h-3 bg-gray-300 rounded-full z-10 mt-[2px] flex-shrink-0"></div>

            <div className="hidden md:block absolute left-[152px] top-[24px] bottom-0 w-0.5 bg-gray-300"></div>

            <div className="ml-6 flex-1">
                {/* Mobile bullet point & line */}
                <div className="md:hidden absolute left-[0px] top-[6px] w-3 h-3 bg-gray-300 rounded-full z-10"></div>
                <div className="md:hidden absolute left-[5px] top-[24px] bottom-0 w-0.5 bg-gray-300"></div>

                {/* Mobile date */}
                <div className="text-sm text-black mb-1 md:hidden">
                    {startDate} - {endDate}
                </div>

                {/* Title and Company */}
                <h3 className="font-semibold text-black text-xl mb-3">
                    {title} @ {companyLink ? (
                    <a
                        href={companyLink}
                        className="relative text-orange-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {company}
                    </a>
                ) : (
                    <span>{company}</span>
                )}
                </h3>

                {/* Bullet points */}
                <ul className="space-y-2 text-gray-500 text-sm leading-relaxed">
                    {bulletPoints.map((point, index) => (
                        <li key={index}>• {point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}