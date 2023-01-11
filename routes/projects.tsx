import Navbar from "../components/Navbar.tsx"
import { Head } from "$fresh/runtime.ts";

export default function ProjectsPage() {
    return (
        <>
            <Head>
                <title>My Work! | Ben Carlson</title>
            </Head>
            <Navbar />
            <div>
                <h1>Projects Page</h1>
            </div>
        </>
    )
}