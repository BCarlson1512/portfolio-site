import Navbar from "../components/Navbar.tsx"
import { Head } from "$fresh/runtime.ts";
import ResumeCard from "../components/ResumeCard.tsx";
import ProjectItem from "../types/ProjectItem.ts";
import ResumeItem from "../types/ResumeItem.ts";

const ResumeItems: ResumeItem[] = []
const ProjectItems: ProjectItem[] = []

export default function ProjectsPage() {
    return (
        <>
            <Head>
                <title>My Work! | Ben Carlson</title>
            </Head>
            <Navbar />
            <div class="flex flex-col justify-center items-center py-4">
                <div class="text-5xl">My Work and Self Directed Learning</div>
            </div>
            <div>
                <div class="flex justify-center text-3xl py-4">
                    <h3>Key Skills</h3>
                    <div class="grid grid-cols-4">
                        <div class="flex flex-col items-center justify-center">
                            <div></div>
                            <div><p></p></div>
                        </div>
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
