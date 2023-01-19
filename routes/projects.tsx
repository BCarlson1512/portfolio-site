import { Head } from "$fresh/runtime.ts";
import ResumeCard from "../components/ResumeCard.tsx";
import Navbar from "../components/Navbar.tsx"
import TechIcon from "../components/TechIcon.tsx";
import TechProps from "../lib/TechProps.ts";
import ResumeProps from "../lib/ResumeProps.ts";
import ProjectProps from "../lib/ProjectProps.ts";
import ProjectCard from "../components/ProjectCard.tsx";

export default function ProjectsPage() {
    return (
        <>
            <Head>
                <title>My Work! | Ben Carlson</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            </Head>
            <Navbar />
            <div class="flex flex-col justify-center items-center py-4 animate-fadeIn">
                <div class="text-5xl border-b-1 w-[48vw] text-center pb-4">My Work and Self Directed Learning</div>
            </div>
            <div>
                <div class="flex flex-col justify-center items-center text-3xl pt-2 pb-4 animate-bounceIn">
                    <h3 class="pb-4 pt-2">Key Skills</h3>
                    <div class="grid grid-cols-6 gap-6">
                        {TechProps.slice(0,12).map((item) => {
                            return (
                                <TechIcon imageclass={item.imageclass} name={item.name}/>
                            )
                        })}
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center text-3xl py-4 animate-fadeIn">
                    <h3 class="pb-4 pt-2">Work Experience</h3>
                    <div class="flex items-center justify-center px-16">
                        <div class="grid grid-cols-3 gap-6">
                            {ResumeProps.map((resumeItem) => {
                                return(
                                    <ResumeCard 
                                        employmentStart={resumeItem.employmentStart} 
                                        employmentEnd={resumeItem.employmentEnd} 
                                        positionName={resumeItem.positionName} 
                                        companyName={resumeItem.companyName} 
                                        companyLogo={resumeItem.companyLogo} 
                                        experiencePoints={resumeItem.experiencePoints} 
                                        techused={resumeItem.techused}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center text-3xl py-4 animate-fadeIn">
                    <h3 class="pt-1 pb-4">Projects/Self Directed Learning</h3>
                    <div class="flex items-center justify-center px-16">
                        <div class="grid grid-cols-3 gap-6">
                            {ProjectProps.map(projectItem => {
                                return(
                                    <ProjectCard image={projectItem.image} heading={projectItem.heading} description={projectItem.description} github_url={projectItem.github_url} url={projectItem.url} techused={projectItem.techused} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
