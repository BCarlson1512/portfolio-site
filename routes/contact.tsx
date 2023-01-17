import Navbar from "../components/Navbar.tsx"
import { Head } from "$fresh/runtime.ts";
import SocialsModal from "../components/SocialsModal.tsx";
import SocialsProps from "../lib/SocialsProps.ts";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Me! | Ben Carlson</title>
            </Head>
            <Navbar />
            <div class="animate-fadeIn">
                <div class="flex flex-col px-2 py-4">
                    <div class="text-3xl text-center"> Let's Connect! </div>
                </div>
                <div class="flex flex-col px-2 py-4 text-xl text-center">
                    <p>Like what you see on the other pages? Interested in working with me? Something else?</p>
                    <p>Feel free to reach out on any of my socials below</p>
                </div>
                <div class="px-2 py-4 animate-bounceIn">
                    <SocialsModal socials={SocialsProps}/>
                </div>
            </div>
        </>
    )
}