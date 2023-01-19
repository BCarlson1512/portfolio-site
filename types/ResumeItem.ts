import TechItem from "./TechItem.ts";

export default interface ResumeItem {
    companyName: string,
    positionName: string,
    employmentStart?: string,
    employmentEnd?: string,
    companyLogo?: string,
    experiencePoints: string[],
    techused: TechItem[],
}
