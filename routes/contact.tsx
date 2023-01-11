import Navbar from "../components/Navbar.tsx"
import { Head } from "$fresh/runtime.ts";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Me! | Ben Carlson</title>
            </Head>
            <Navbar />
            <div>
                <h1>Contact Page</h1>
            </div>
        </>
    )
}