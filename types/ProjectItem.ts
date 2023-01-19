import TechItem from "./TechItem.ts"
export default interface ProjectItem {
    image: string,
    heading:string,
    description:string,
    url?: string
    github_url?: string,
    techused?: TechItem[]
}
