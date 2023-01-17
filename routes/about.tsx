import Navbar from "../components/Navbar.tsx"
import { Head } from "$fresh/runtime.ts";
import ImageSlider from "../islands/ImageSlider.tsx";

const imageData = null

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>Ben Carlson | About</title>
            </Head>
            <Navbar />
            <div class="flex flex-col items-center justify-center animate-fadeIn">
                <div class="text-6xl pb-6 animate-bounceIn">About Me...</div>
                <div class="text-xl pb-4 animate-bounceIn">
                    <p class="text-center">I'm 22 and finishing off my final semester of Computer Science at the University of Guelph.</p>
                    <p>I currently live in Guelph/St Catharines Ontario but am originally from Calgary, Alberta. Long way from home eh? <br /> </p>
                    <p class="text-center"><b>Precisely 3406 kilometers (2116 miles) for anyone curious</b></p>
                </div>
                <div class="text-xl pb-4">
                    <p class="text-center">
                        I spent most of my childhood with the mountains in my backyard, which sparked my passion for adventure and the outdoors. 
                        <br /> Most of my days off I'm exploring new places, ideally with mountains, to cure my homesickness for the rockies. <br />
                        Obviously this is a fairly ambitious thing, so most days I can be happy being out in the woods exploring non mountainous regions.
                    </p>
                </div>
                <div class="animate-fadeInLong flex flex-row py-2 pb-4">
                    <div class="px-2">
                        <img src="/img/snowboard2.jpg" height="300" width="400"/>
                    </div>
                    <div class="px-2">
                        <img src="/img/bike1.jpg" height="300" width="400"/>
                    </div>
                </div>
                <div class="text-xl pb-5">
                    <p class="text-center">
                        When I'm not exploring, I am chasing adrenaline on a snowboard🏂 in the winter and a bike🚵 on the summer. <br />
                        Nothing beats a bluebird powder day or early season hero dirt!
                    </p>
                </div>
                {imageData &&
                    <div class="flex flex-col items-center justify-center text-3xl mb-5">
                        <p class="items-center ">
                            <b>Check out more of my adventures here!</b>
                        </p>
                        <ImageSlider images={imageData}/>
                    </div>
                }
                
            </div>
        </>
    )
}