import ResumeItem from "../types/ResumeItem.ts";
import TechIcon from "./TechIcon.tsx";

export default function ResumeCard(props:ResumeItem) {
    const hasStartDate = props.employmentStart || false
    const hasEndDate = props.employmentEnd || false
    return(
        <div class="flex flex-col items-center h-full mx-0.5 px-3 bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 hover:border-gray-300 hover:drop-shadow-lg drop-shadow-md transition">
            <div class="border-b-1 border-sky-200 pb-2 hover:border-sky-400">
                {props.companyLogo && (
                    <div class="flex justify-center items-center my-1 py-4">
                        <img class="max-h-20 max-w-20" src={props.companyLogo} alt="card img"/>
                    </div>
                )}
                <div class="text-3xl py-1 text-center" >
                    {props.companyName}
                </div>
                <div class="text-2xl py-1" >
                    <i>{props.positionName}</i>
                </div>
                <div class="text-xl text-center py-1">
                    {hasStartDate && hasEndDate ?
                        <div><i>{props.employmentStart} - {props.employmentEnd}</i></div>    
                    :
                        <div><i>{props.employmentStart} - Current</i></div>
                    }
                </div>
            </div>
            <div class="flex flex-col py-2">
                {props.experiencePoints.map(point => {
                    return (
                        <div class="py-2 text-base text-center">{point}</div>
                    )
                })}
            </div>
            <div class="text-xl pb-1"><i>Tech Utilized</i></div>
            <div class="grid grid-cols-3 gap-6 pb-2 mb-2">
                {props.techused.map(tech => {
                    return(
                        <TechIcon name={tech.name} imageclass={tech.imageclass} />
                    )
                })}
            </div>
        </div>
    )
}
