export type EducationType = "School" | "Certification"

export interface Award {
    awardName: string,
    awardDesc: string
}

export default interface EducationItem {
    type: EducationType,
    schoolName: string,
    grade?: number,
    awards: Award[],
}
