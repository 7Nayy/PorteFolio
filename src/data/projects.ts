export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
/*
  {
    title: "Portfolio / Lina BLIDI",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "https://www.linablidi.fr/",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },*/
  {
    title: "PizzaMama",
    techs: ["Python", "Django"],
    link: "https://7nayy.pythonanywhere.com",
  },
];

export default projects;
