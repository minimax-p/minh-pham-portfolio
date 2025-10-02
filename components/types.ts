// Type definitions for Experience section

export interface ExperienceItem {
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    companyLink?: string;
    bulletPoints: string[];
}

export interface ExperienceItemProps extends ExperienceItem {
    isLast?: boolean;
}
