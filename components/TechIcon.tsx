import { Head } from "$fresh/runtime.ts";

interface PageProps {
    imageclass: string,
    name: string,
    loc?: number,
}

export default function TechIcon(props: PageProps) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            </Head>
            <div class="animate-bounceIn flex flex-col items-center justify-center text-2xl px-2 mx-1 py-0.5 border-b-1 hover:border-gray-100 drop-shadow-sm hover:drop-shadow-lg transition">
                <div>
                    <i class={props.imageclass}></i>
                </div>
                <div class="py-0.5">
                    <p>{props.name}</p>
                </div>
            </div>
        </>
    )
}
