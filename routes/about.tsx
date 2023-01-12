import Navbar from "../components/Navbar.tsx"
import { Head } from "$fresh/runtime.ts";

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>Ben Carlson | About</title>
            </Head>
            <Navbar />
            <div class="flex flex-col items-center justify-center">
                <div class="text-6xl">About Me...</div>
            </div>
        </>
    )
}