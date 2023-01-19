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
            <div class="flex flex-col items-center justify-center text-2xl px-0.5 py-0.5 border-2 border-gray-50 rounded-md hover:border-gray-100 drop-shadow-sm hover:drop-shadow-lg transition">
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
