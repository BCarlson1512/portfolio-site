import { Head } from "$fresh/runtime.ts";
import Card from "../components/Card.tsx";
import Navbar from "../components/Navbar.tsx"

interface PageProps {
  image: string,
  heading:string,
  description:string,
  url: string
}

const ProjectProps: PageProps[] = [
  {
    image:"/img/web3icon.svg",
    heading: "Web3 Transfer",
    description: "A small project exploring smart contracts, Solidity and React. Utilizes MetaMask and Solidity to transfer ethereum across accounts.",
    url: "https://github.com/BCarlson1512/Web3.0_Intro"
  },
  {
    image:"/img/db.ico",
    heading: "Dogs Barking",
    description: "A medium-large scale course management software for University of Guelph students. Utilizes Nextjs, AWS, Docker and Neo4j.",
    url: "https://dogs-barking.ca"
  },
  {
    image:"/img/check-list-lined.svg",
    heading: "Deadline Buddy",
    description: "YUHacks 2021 Award Winning Project. Combines ease of use of a to do list with long term planning capabilities of a calendar. MERN project utilizing Material UI.",
    url: "https://github.com/BCarlson1512/YuHacks-Deadline-Buddy"
  },
]

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
        <div class="flex flex-row justify-center items-center space-x-10 py-4">
          <a class="flex flex-row justify-center items-center bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-lg border-2 border-gray-200 hover:border-gray-400 px-4 py-0.5 transition" href="https://github.com/BCarlson1512">Github <img class="ml-2" src="/img/github-mark.svg" height="30" width="30"/></a>
          <a class="flex flex-row justify-center items-center bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-lg border-2 border-gray-200 hover:border-gray-400 px-4 py-0.5 transition" href="https://www.linkedin.com/in/bencarlson1512/">Linkedin <img class="ml-2" src="/img/linkedin-3.svg" height="30" width="30"/></a>
          <a class="flex flex-row justify-center items-center bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-lg border-2 border-gray-200 hover:border-gray-400 px-4 py-0.5 transition" href="/docs/ben_carlson_resume_2023.pdf">Resume <img class="ml-2" src="/img/document-thin.svg" height="30" width="30"/></a>
        </div>
        <>
          <div class="flex flex-col justify-center text-center py-2">Hello and welcome to my site, I'm Ben Carlson. I'm a 4th year computer science student at the University of Guelph. I am passionate about creating/developing solutions to problems of any scale. This could be as simple as a to do list that also functions as a calendar or something complex like a course management and planning system for students. I am always looking for the next thing I can tinker with or automate within my life.</div>
          <div class="flex flex-col justify-center text-center py-2">When I'm not solving problems, I'm more than likely spending my time outdoors, most likely near mountains of some sort or pushing for a new PR in the gym.</div>
        </>
        <div class="flex flex-col justify-center text-center py-4">
          <h3 class="text-4xl">Check out some of my work!</h3>
          <a></a>
          <div class="flex py-2">
            {ProjectProps.map((prop:PageProps) =>{
              return(
                <Card image={prop.image} heading={prop.heading} description={prop.description} url={prop.url}/>
              );
            })
            }
          </div>
        </div>
      </div>
    </>
  );
}
