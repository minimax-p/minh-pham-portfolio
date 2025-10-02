import { ExperienceItem } from './types'

// Experience Data
// To update your experience, simply modify this array
// Each experience object should have:
// - startDate: string (e.g., "Jun 2025")
// - endDate: string (e.g., "Aug 2025")
// - title: string (your job title)
// - company: string (company name)
// - companyLink?: string (optional - company website URL)
// - bulletPoints: string[] (your achievements/responsibilities)

export const experienceData: ExperienceItem[] = [
    {
        startDate: "Jun 2025",
        endDate: "Aug 2025",
        title: "Software Engineer Intern",
        company: "Stealth",
        companyLink: "", // No link for stealth company
        bulletPoints: [
            "Built Playwright testing pipeline automating 87 tests across 8 platforms and 8 languages, enabling daily testing that would require 30+ hours manually",
            "Deployed on Linux server with scheduled 4am runs, automated reporting, and email notifications delivered before team arrival",
            "Caught 3 critical production bugs undetectable through manual QA processes"
        ]
    },
    {
        startDate: "Oct 2024",
        endDate: "Mar 2025",
        title: "Mobile Developer Intern",
        company: "Ticketingbox Inc.",
        companyLink: "https://www.ticketingbox.com/",
        bulletPoints: [
            "Built a complete mobile app from scratch in 5 months after legacy Ionic system failure",
            "Integrated 15+ deprecated API endpoints with manager guidance, resolving JSON-RPC gateway issues",
            "Designed offline-capable SQLite database enabling real-time barcode validation without internet connectivity",
            "Implemented multi-format barcode scanner supporting QR codes, Code 128, and UPC with real-time ticket validation"
        ]
    },
    {
        startDate: "Jun 2023",
        endDate: "Aug 2023",
        title: "Team Lead Intern",
        company: "NASA",
        companyLink: "https://www.nasa.gov/",
        bulletPoints: [
            "Led 6-person development team through a 5-week Flutter project, coordinating Git workflow and managing development/test phases",
            "Performed 80% of testing and resolved 30% of critical bugs",
            "Designed and prototyped the app using Figma"
        ]
    },
    {
        startDate: "Jun 2022",
        endDate: "Aug 2022",
        title: "Full-stack Engineer Intern",
        company: "NASA",
        companyLink: "https://www.nasa.gov/",
        bulletPoints: [
            "Designed SQL database for user authentication and secured legacy codebase by parameterizing 40+ SQL calls to prevent injection attacks",
            "Implemented server-side OTP authentication API to enhance two-factor authentication security",
            "Built dashboard displaying real-time magnetometer data using NASA's WorldWind, dygraphs, and Bootstrap"
        ]
    }
];