type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "nadim.benkrouidem@gmail.com",
  title: "Hi, I’m Nadim 👋",
  // profile: "/profile.webp",
  description:
    "Bonjour, i'm a *french studiant developer* with over *2 years* of web experience.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/nayy_kun",
    },
    {
      label: "Github",
      link: "https://github.com/7Nayy",
    },
  ],
};

export default presentation;
