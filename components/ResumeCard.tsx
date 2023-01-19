import ResumeItem from "../types/ResumeItem.ts";

export default function ResumeCard(props:ResumeItem) {
    const hasStartDate = props.employmentStart || false
    const hasEndDate = props.employmentEnd || false
    return(
        <div class="flex flex-col items-center h-full mx-0.5 px-3 bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 hover:border-gray-300 hover:bg-blue-300 hover:drop-shadow-lg drop-shadow-md transition">
            {props.companyLogo && (
                <div class="my-1 py-4">
                    <img src={props.companyLogo} alt="card img" height="50" width="50"/>
                </div>
            )}
            <div class="text-3xl py-0.5 text-center" >
                {props.companyName}
            </div>
            <div class="text-2xl py-0.5" >
                <i>{props.positionName}</i>
            </div>
            <div class="text-xl text-center">
                {hasStartDate && hasEndDate ?
                    <div><i>{props.employmentStart} - {props.employmentEnd}</i></div>    
                :
                    <div><i>{props.employmentStart} - Current</i></div>
                }
            </div>
            <div class="flex flex-col">
                {props.experiencePoints.map(point => {
                    return (
                        <div class="py-2 text-base text-center">{point}</div>
                    )
                })}
            </div>
            <div class="text-lg"><i>Tech Utilized</i></div>
            <div class="grid grid-cols-3 gap-6 pb-2">
                {props.techused.map(tech => {
                    return(
                        <div class="px-4 mx-2 text-base text-center"><b>{tech}</b></div>
                    )
                })}
            </div>
        </div>
    )
}
