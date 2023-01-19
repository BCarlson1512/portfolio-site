import ProjectItem from "../types/ProjectItem.ts";

const ProjectProps: ProjectItem[] = [
{
    image:"/img/web3icon.svg",
    heading: "Web3 Transfer",
    description: "A small project exploring smart contracts, Solidity and React. Utilizes MetaMask and Solidity to transfer ethereum (ropsten) across accounts.",
    github_url: "https://github.com/BCarlson1512/Web3.0_Intro",
    techused: [
        {
            name: "Solidity",
            imageclass: "devicon-solidity-plain colored"
        },
        {
            name: "React",
            imageclass: "devicon-react-original",
        }
    ]
},
{
    image:"/img/check-list-lined.svg",
    heading: "Deadline Buddy",
    description: "YUHacks 2021 Award Winning Project. Combines ease of use of a to do list with long term planning capabilities of a calendar. MERN project utilizing Material UI.",
    github_url: "https://github.com/BCarlson1512/YuHacks-Deadline-Buddy",
    techused: [
        {
            name: "React",
            imageclass: "devicon-react-original",
        },
        {
            name: "MongoDB",
            imageclass: "devicon-mongodb-plain colored",
        },
        {
            name: "Express",
            imageclass: "devicon-express-original colored",
        },
    ]
},
{
    image:"/img/db.ico",
    heading: "Dogs Barking",
    description: "A medium-large scale course management software for University of Guelph students.",
    github_url: "https://github.com/BCarlson1512/dogs-barking-public",
    url: "https://dogs-barking.ca",
    techused:[
        {
            name: "Docker",
            imageclass: "devicon-docker-plain colored",
        },
        {
            name: "Nextjs",
            imageclass: "devicon-nextjs-original colored",
        },
        {
            name: "Neo4j",
            imageclass: "devicon-neo4j-plain colored",
        },
    ]
},
{
    image:"/img/mountain1.svg",
    heading: "The GPX Project",
    description: "This project takes strava/alltrails files (.gpx) and performs simple CRUD operations on them. Parser built in C, Frontend is HTML/VanillaJS, Express Backend, MySQL DB.",
    github_url: "https://github.com/BCarlson1512/The-GPX-Project",
    techused:[
        {
            name:"C",
            imageclass:"devicon-c-plain colored"
        },
        {
            name: "Express",
            imageclass: "devicon-express-original colored",
        },
        {
            name: "MySQL",
            imageclass: "devicon-mysql-plain colored",
        },
    ]
},
{
    image:"/img/cart1.svg",
    heading: "Ecommerce Storefront",
    description: "A full-stack e-commerce storefront powered by React, Redux, MongoDB and Express",
    github_url: "https://github.com/BCarlson1512/React-Ecommerce",
    techused:[
        {
            name: "React",
            imageclass: "devicon-react-original",
        },
        {
            name: "MongoDB",
            imageclass: "devicon-mongodb-plain colored",
        },
        {
            name: "Express",
            imageclass: "devicon-express-original colored",
        },
    ]
},
{
    image:"/img/pen1.svg",
    heading: "Immediate Feedback System (IFS)",
    description: "Contributions made for Upper Year CS Project. Creation of new code quality/coverage runners, including cppcheck, checkstyle and similarity analysis between peers. Potential impact, 1000's of students.",
    techused:[
        {
            name: "Python",
            imageclass: "devicon-python-plain",
        },
    ]
},
]

export default ProjectProps;