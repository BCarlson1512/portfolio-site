import ProjectItem from "../types/ProjectItem.ts"
import TechIcon from "./TechIcon.tsx"

export default function ProjectCard(props:ProjectItem){
    return (
        <div>
            <div class="animate-bounceIn flex flex-col items-center h-full mx-2 px-4 bg-green-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 hover:border-gray-300 hover:drop-shadow-lg drop-shadow-md transition">
                <div class="py-4 my-1">
                    <img src={props.image} alt="card img" height="50" width="50"/>
                </div>
                <div class="text-3xl py-0.5 text-center" >
                    {props.heading}
                </div>
                <div class="text-xl text-center px-1.5">
                    {props.description}
                </div>
                {props.techused && (
                    <div class="flex flex-col my-2">
                        <h3 class="text-xl my-1 text-center">Tech used:</h3>
                        <div class="grid grid-cols-3 gap-6">
                            {props.techused?.map((item) => {
                                return (
                                    <TechIcon imageclass={item.imageclass} name={item.name}/>
                                )
                            })}
                        </div>
                    </div>
                )}
                <div class="flex py-2">
                    {props.github_url && (
                        <a class="px-2" href={props.github_url}><img src="/img/github-mark.svg" alt="github alt" height="50" width="50"/></a>
                    )}
                    {props.url && (
                        <a class="px-2" href={props.url}><img src="/img/internet1.svg" alt="github alt" height="50" width="50"/></a>
                    )}
                </div>
            </div>
        </div>
    )
}
