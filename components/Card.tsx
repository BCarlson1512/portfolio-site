interface PageProps {
    image: string,
    heading:string,
    description:string,
    url: string
}
export default function Card(props:PageProps){
    return (
        <div>
            <div class="flex flex-col items-center h-full w-full mx-0.5 px-2 bg-green-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 hover:border-gray-300 hover:drop-shadow-md transition">
                <div>
                    <img src={props.image} alt="card img" height="50" width="50"/>
                </div>
                <div class="text-3xl" >
                    {props.heading}
                </div>
                <div>
                    {props.description}
                </div>
                <div>
                    Tech Used:
                </div>
                <div class="h-6 w-6">
                    <a href={props.url}><img src="/img/github-mark.svg" alt="github alt"/></a>
                </div>
            </div>
        </div>
        
    )
}
