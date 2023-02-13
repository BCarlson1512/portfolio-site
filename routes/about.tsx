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
            <div class="relative">
                <div class="w-screen h-screen z-0 absolute" style="background-image:url(../img/calgary/home-img.jpg); background-size: cover; background-position:center; filter: blur(4px); -webkit-filter: blur(4px); box-shadow: 0 4px 4px 0 #00000040, inset 0 0 0 1000px rgba(0,0,0,.5);"></div>
            </div>
            <div class="h-screen flex text-8xl space-x-3 z-10 py-5 text-gray-200 mx-[2.5vw] px-[2.5vw]">
                <div class="flex flex-col items-left justify-center text-8xl space-x-3 z-10 py-5 animate-fadeIn w-[50vw]">
                    <h1 class="pb-4">About me</h1>
                    <div class="animate-bounceIn">
                        <p class="text-lg py-0.5">I'm 22 and currently finishing my degree in Computer Science at the University of Guelph.</p>
                        <p class="text-lg py-0.5">I'm from Calgary AB, living in St Catharines, ON.</p>
                        <p class="text-lg py-0.5">Far from home eh?</p>
                    </div>
                </div>
            </div>
            <div class="h-[15vh] bg-gray-700 flex items-center justify-center text-gray-200">
                <p class="text-3xl py-0.5">Precisely <b>3406km</b> (2116 miles)</p>
                {/* TODO:  Add google maps modal showing distance from home to kitts */}
            </div>
            <div class="relative">
                <div class="w-screen h-screen z-0 absolute" style="background-image:url(../img/calgary/home2.jpg); background-size: cover; background-position:center; filter: blur(4px); -webkit-filter: blur(4px); box-shadow: 0 4px 4px 0 #00000040, inset 0 0 0 1000px rgba(0,0,0,.5);"></div>
            </div>
            <div class="h-screen flex justify-end text-8xl space-x-3 z-10 py-5 text-gray-200 mx-[2.5vw] px-[2.5vw]">
                <div class="flex flex-col items-end justify-center text-8xl space-x-3 z-10 py-5 animate-fadeIn w-[50vw]">
                    <h1 class="pb-4">Welcome home!</h1>
                    <div class="animate-bounceIn text-end w-[35vw]">
                        <p class="text-lg py-0.5">Most of my childhood was spent in the mountains, which sparked my passion for the outdoors.</p>
                        <p class="text-lg py-0.5">Many of my days off are spent exploring new places, bonus points for mountains, in an attempt to cure my homesickness.</p>
                        <p class="text-lg py-0.5">West coast = best coast</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center animate-fadeIn bg-gray-700 text-gray-300">
                <div class="animate-fadeInLong flex flex-row py-2 mb-4 w-[50vw] border-b-1 border-gray-400 items-center justify-center py-8">
                    <div class="px-2 border-r-1 border-gray-400">
                        <img class="drop-shadow-lg" src="/img/snowboard2-min.jpg" height="300" width="400"/>
                    </div>
                    <div class="px-2">
                        <img class="drop-shadow-lg" src="/img/bike1-min.jpg" height="300" width="400"/>
                    </div>
                </div>
                <div class="text-xl pb-5">
                    <p class="text-center">
                        When I'm not exploring, I am chasing adrenaline on a snowboard🏂 in the winter and a bike🚵 on the summer or pushing for another pr in the gym💪. <br />
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