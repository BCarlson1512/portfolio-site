import Navbar from "../components/Navbar.tsx"
import { Head } from "$fresh/runtime.ts";
import ResumeCard from "../components/ResumeCard.tsx";
import ProjectItem from "../types/ProjectItem.ts";
import ResumeItem from "../types/ResumeItem.ts";
import TechItem from "../types/TechItem.ts";
import TechIcon from "../components/TechIcon.tsx";

const ResumeItems: ResumeItem[] = []
const ProjectItems: ProjectItem[] = []

const TechItems: TechItem[] = [
    {
        name: "Deno",
        imageclass: "devicon-denojs-original",
    },
    {
        name: "Docker",
        imageclass: "devicon-docker-plain colored",
    },
    {
        name: "Express",
        imageclass: "devicon-express-original colored",
    },
    {
        name: "MySQL",
        imageclass: "devicon-mysql-plain colored",
    },
    {
        name: "MongoDB",
        imageclass: "devicon-mongodb-plain colored",
    },
    {
        name: "Nodejs",
        imageclass: "devicon-nodejs-plain colored",
    },
    {
        name: "Nextjs",
        imageclass: "devicon-nextjs-original colored",
    },
    {
        name: "Neo4j",
        imageclass: "devicon-neo4j-plain colored",
    },
    {
        name: "Typescript",
        imageclass: "devicon-typescript-plain colored",
    },
    {
        name: "React",
        imageclass: "devicon-react-original",
    },
]

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
                        {TechItems.map((item) => {
                            return (
                                <TechIcon imageclass={item.imageclass} name={item.name}/>
                            )
                        })}
                    </div>
                </div>
                <div class="text-3xl py-4">
                    <h3>Work Experience</h3>
                    <div>
                        {ResumeItems.map(resumeItem => {
                            <ResumeCard />
                        })}
                    </div>
                </div>
                <div class="text-3xl py-4">
                    <h3>Projects/Self Directed Learning</h3>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}
