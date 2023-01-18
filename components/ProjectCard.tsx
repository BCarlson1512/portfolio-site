import ProjectItem from "../types/ProjectItem.ts"

export default function ProjectCard(props:ProjectItem){
    return (
        <div>
            <div class="flex flex-col items-center h-full mx-0.5 px-2 bg-green-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 hover:border-gray-300 hover:drop-shadow-md transition">
                <div>
                    <img src={props.image} alt="card img" height="50" width="50"/>
                </div>
                <div class="text-3xl py-0.5 text-center" >
                    {props.heading}
                </div>
                <div class="text-xl text-center px-1.5">
                    {props.description}
                </div>
                <div class="flex">
                    {props.github_url && (
                        <a href={props.github_url}><img src="/img/github-mark.svg" alt="github alt" height="50" width="50"/></a>
                    )}
                    {props.url && (
                        <a href={props.url}><img src="/img/internet1.svg" alt="github alt" height="50" width="50"/></a>
                    )}
                </div>
            </div>
        </div>
    )
}
