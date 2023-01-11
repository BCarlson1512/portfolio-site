import Navbar from "../components/Navbar.tsx"
import { Head } from "$fresh/runtime.ts";

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>Ben Carlson | About</title>
            </Head>
            <Navbar />
            <div>
                <h1>About Page</h1>
            </div>
        </>
    )
}