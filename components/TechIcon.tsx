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
            <div class="flex flex-col items-center justify-center">
                <div>
                    <i class={props.imageclass}></i>
                </div>
                <div>
                    <p>{props.name}</p>
                </div>
            </div>
        </>
    )
}
