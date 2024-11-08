import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rodrigo Huarachi R.",
  initials: "RH",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/Buenos+Aires/",
  about:
    "Data Engineer and Data Analyst    ",
  summary:
    "I'm a dedicated Data Analyst and Data Engineer with over 2 years of experience delivering innovative, client-focused solutions. I strive to provide accurate and valuable results, working closely with clients to understand their needs and guide them toward achieving their goals. My commitment goes beyond simply addressing analytical challenges; I build comprehensive solutions that enhance data management and utilization. I'm always driven to exceed expectations, ensuring efficient, transparent service tailored to the unique demands of each project.",
  avatarUrl: "https://avatars.githubusercontent.com/u/69877961?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "rodrihuarachi@gmail.com",
    tel: "+5491159439878",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rodrihuarachi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rodrigohuarachi/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/rodrihuarachi",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Henry Bootcamp",
      degree: "Data Scientist",
      start: "2023",
      end: "2023",
    },
    {
      school: "E.E.S.T. John F. Kennedy",
      degree: "Programming Technician",
      start: "2011",
      end: "2017",
    },
  ],
  work: [
    {
      company: "CoreBI",
      link: "https://corebi.com.ar/",
      badges: ["Remote"],
      title: "Data Engineer for Pan American Energy",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: [
        "Data Warehouse Monitoring, including:",
        "• Job and Packages control through SQL Server.",
        "• Data Analysis using Excel and Power BI.",
        "• Presentation of monthly executive report.",
        "• Smooth client and the team communication."],
    },
    {
      company: "HUARA Muebles",
      link: "",
      badges: ["In Person"],
      title: "Financial Management",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:[
        "Several tasks were developed:",
        "• I developed a system in Excel to manage income, expenses, salaries and production expenses.",
        "•  Created annual financial visualization highlighting earnings, debt and key trends.",
        "•  Design a tool that automatically adjusts furniture prices based on changes.",
        "•  I implemented a budget system in Excel with material price tables, automatic calculations and printing options."
      ]
    },
    
  ],
  skills: [
    "Python",
    "SQL",
    "Git",
    "Docker",
    "Big Query",
    "Airflow",
    "Power BI",
    "Power Automate",
    "SSIS"
  ],
  projects: [
    {
      title: "Migratory Flows",
      techStack: [
        "Data Engineer",
        "Python",
        "Cloud Storage",
        "Cloud Functions",
        "BigQuery",
        "Power BI",
      ],
      description:
        "Development of a data solution to be able to effectively communicate the relationship of human migrations with the different socioeconomic and geopolitical aspects. ",
      logo: ParabolLogo,
      link: {
        label: "migratory-flows.com",
        href: "hhttps://final-project-page.vercel.app/",
      },
    },
    {
      title: "MLOPs with Steam Games",
      techStack: [
        "Data Scientist",
        "ETL",
        "Python",
        "FastAPI",
        "Render",
      ],
      description:
        "Development of an API in the cloud and application of 2 Machine Learning models: Sentiment Analysis for user comments and Game Recommendation based on a specific game.",
      logo: EvercastLogo,
      link: {
        label: "mlops-steam-games.com",
        href: "https://deploy-pi-rodrigo-huarachi.onrender.com/",
      },
    },
    {
      title: "IT Help Desk",
      techStack: [
        "Data Analyst",
        "Python",
        "Power BI",
        "Excel",
        "DAX",
      ],
      description: "Development of a Power BI dashboard analyzing IT support tickets",
      logo: ConsultlyLogo,
      link: {
        label: "powerbi-it-helpdesk.com",
        href: "https://app.powerbi.com/view?r=eyJrIjoiNjhmZjg1MzYtYTMyYS00OGM0LTk3YjktMTZiMTkxNGU4YzNhIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
      },
    }
  ],
} as const;
