import { Head } from "$fresh/runtime.ts";
import ProjectCard from "../components/ProjectCard.tsx";
import Navbar from "../components/Navbar.tsx"
import ProjectItem from "../types/ProjectItem.ts";
import ProjectProps from "../lib/ProjectProps.ts";
import SocialsModal from "../components/SocialsModal.tsx";
import SocialsProps from "../lib/SocialsProps.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben Carlson | Home</title>
      </Head>
      <div>
        <Navbar />
      </div>
      <div class="p-4 mx-auto max-w-screen-lg animate-fadeIn">
        <div class="flex justify-center pb-4">
          <div class="flex items-center text-8xl space-x-3">
            <h1 class="flex">Hi...<p class="animate-waving-hand">👋</p> I'm</h1>
            <p class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">Ben</p>
          </div>
        </div>
        <div class="flex justify-center text-3xl py-4 border-b-1">
            <h3 class="flex">Passionate Developer💻 Gym💪 and Granola Addict 🌲⛰️</h3>
        </div>
        <div class="animate-bounceIn">
          <SocialsModal socials={SocialsProps} />
        </div>
        <>
          <div class="flex flex-col justify-center text-center py-2">Hello and welcome to my site, I'm Ben Carlson. I'm a 4th year computer science student at the University of Guelph. I am passionate about creating/developing solutions to problems of any scale. This could be as simple as a to do list that also functions as a calendar or something complex like a course management and planning system for students. I am always looking for the next thing I can tinker with or automate within my life.</div>
          <div class="flex flex-col justify-center text-center py-2">When I'm not solving problems, I'm more than likely spending my time outdoors, most likely near mountains of some sort or pushing for a new PR in the gym.</div>
        </>
        <div class="flex flex-col justify-center text-center py-4">
          <h3 class="text-4xl mb-2">Check out some of my work!</h3>
          <a></a>
          <div class="flex py-2">
            {ProjectProps.slice(0,3).map((prop:ProjectItem) =>{
              return(
                <ProjectCard image={prop.image} heading={prop.heading} description={prop.description} github_url={prop.github_url} url={prop.url} techused={prop.techused}/>
              );
            })
            }
          </div>
        </div>
      </div>
    </>
  );
}
