import { Head } from "$fresh/runtime.ts";
import Card from "../components/Card.tsx";
import Navbar from "../components/Navbar.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben Carlson | Home</title>
      </Head>
      <div>
        <Navbar />
      </div>
      <div class="p-4 mx-auto max-w-screen-lg">
        <div class="flex justify-center pb-4">
          <div class="flex items-center text-8xl space-x-3">
            <h1 class="">Hi👋... I'm</h1>
            <p class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">Ben</p>
          </div>
        </div>
        <div class="flex justify-center text-3xl py-4">
            <h3>Passionate Developer💻 Gym💪 and Granola Addict 🌲⛰️</h3>
        </div>
        <div class="flex flex-row justify-center items-center space-x-10">
          <a class="flex flex-row justify-center items-center" href="https://github.com/BCarlson1512">Github <img class="ml-2" src="/img/github-mark.svg" height="30" width="30"/></a>
          <a class="flex flex-row justify-center items-center" href="https://www.linkedin.com/in/bencarlson1512/">Linkedin <img class="ml-2" src="/img/linkedin-3.svg" height="30" width="30"/></a>
          <a class="flex flex-row justify-center items-center" href="/docs/ben_carlson_resume_2023.pdf">Resume <img class="ml-2" src="/img/document-thin.svg" height="30" width="30"/></a>
        </div>
        <>
          <div class="flex flex-col justify-center text-center py-2">Hello and welcome to my site, I'm Ben Carlson. I'm a 4th year computer science student at the University of Guelph. I am passionate about creating/developing solutions to problems of any scale. This could be as simple as a to do list that also functions as a calendar or something complex like a course management and planning system for students. I am always looking for the next thing I can tinker with or automate within my life.</div>
          <div class="flex flex-col justify-center text-center py-2">When I'm not solving problems, I'm more than likely spending my time outdoors, most likely near mountains of some sort or pushing for a new PR in the gym.</div>
        </>
      </div>
    </>
  );
}
