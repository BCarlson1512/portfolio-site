import ResumeItem from "../types/ResumeItem.ts";

const ResumeProps:ResumeItem[] = [
    {
        companyName: "Web-Us",
        positionName: "Co-Founder/Full-Stack Developer",
        employmentStart: "2020-08-01",
        employmentEnd: "2021-09-30",
        companyLogo: "/img/WebusLogo.png",
        experiencePoints: ["Worked closeley with clients by creating custom tailored mockups for their web application, deployed responsive, custom tailored web applications powered by React and Express to Heroku and Cloudflare", "Offered data storage, email and support using CPanel"],
        techused: ["React", "Nodejs", "MongoDB", "Express", "Heroku"]
    },
    {
        companyName: "University of Guelph",
        positionName: "Undergraduate Teaching Assistant",
        employmentStart: "2021-09-01",
        employmentEnd: "2021-12-23",
        companyLogo: "/img/UofG.jpg",
        experiencePoints: ["Provided educational support to 300 students regarding Object Oriented Programming concepts VIA office hours", "Presented weekly lab sessions to sections of 40 students discussing common OOP concepts such as encapsulation", "Marked 8 assessments, 3 exams in groups of 40-80 and participated in weekly progress reports with the professor and teaching team"],
        techused: ["Java"]
    },
    {
        companyName: "Condoworks",
        positionName: "Jr. Software Developer Intern",
        employmentStart: "2022-05-01",
        employmentEnd: "2022-08-31",
        companyLogo: "/img/Condoworks.png",
        experiencePoints: ["Monitored production application for anomalies using Grafana and Graylog, performing maintence impacting over 1000 accounts", "Re-engineered core parsing technology to increase overall parsing accuracy from 91.5% to 93.5% on a data set of 100,000 invoices", "Increased monthly invoice volumes from 6000-9000 through creation and maintenance of scrapers utilzing puppeteer, bluebird and async-await", "Worked closely with CTO and lead engineers in an agile work environment"],
        techused: ["Javascript", "Nodejs", "MySQL", "Graylog", "Grafana", "Gitlab"]
    },
]
export default ResumeProps;