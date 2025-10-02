"use client"

import ExperienceItem from '../experience-item'
import { experienceData } from '../experienceData'

export default function Experience() {
    return (
        <section id="experience" className="mb-16">
            <div className="relative">
                <h2 className="text-3xl font-bold text-black mb-8">Experience</h2>
                <div className="absolute top-10">
                    <svg width="155" height="13" viewBox="0 0 267 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG path content here */}
                    </svg>
                </div>
            </div>

            <div className="relative">
                <div className="space-y-6">
                    {experienceData.map((experience, index) => (
                        <ExperienceItem
                            key={index}
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                            title={experience.title}
                            company={experience.company}
                            companyLink={experience.companyLink}
                            bulletPoints={experience.bulletPoints}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}