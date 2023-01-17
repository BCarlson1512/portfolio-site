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
            <div class="flex flex-col justify-center items-center py-4">
                <div class="text-5xl">My Work and Self Directed Learning</div>
            </div>
            <div>
                <div class="flex flex-col justify-center items-center text-3xl py-4">
                    <h3 class="pb-4 pt-2">Key Skills</h3>
                    <div class="grid grid-cols-5 gap-6">
                        {TechProps.map((item) => {
                            return (
                                <TechIcon imageclass={item.imageclass} name={item.name}/>
                            )
                        })}
                    </div>
                </div>
                <div class="text-3xl py-4">
                    <h3>Work Experience</h3>
                    <div>
                        {ResumeProps.map(resumeItem => {
                            <ResumeCard />
                        })}
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center text-3xl py-4">
                    <h3 class="pt-1 pb-4">Projects/Self Directed Learning</h3>
                    <div class="flex items-center justify-center px-16">
                        <div class="grid grid-cols-3 gap-6">
                            {ProjectProps.map(projectItem => {
                                return(
                                    <ProjectCard image={projectItem.image} heading={projectItem.heading} description={projectItem.description} url={projectItem.url} />
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
