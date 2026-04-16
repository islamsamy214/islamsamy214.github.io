export const useProjects = () => {
  const config = useRuntimeConfig();

  const projects = useState("projects", () => {
    return [
      {
        title: "Skyloov Property Portal",
        image: "/images/skyloov.webp",
        category:
          "Real Estate — Python, Django, PHP, Laravel, Vue.js & Next.js",
        url: "https://skyloov.com/",
        description:
          "Dubai real estate portal that needed to handle listings, agents, analytics, marketing, and live chat — all as separate services. I built the backend microservices, wired up the CMS and admin panel, and got the whole thing running in production. It's live and growing.",
      },
      {
        title: "Blueholding Intranet",
        image: "/images/intranet.webp",
        category:
          "Corporate Intranet — Laravel, Vue.js & Next.js",
        url: "https://blueholding.co.uk/",
        description:
          "The company wanted their own internal LinkedIn — posts, events, news, employee profiles, the works. Tight deadline. I built the backend with Redis-powered real-time notifications, set up AWS SES for email queues, and shipped the whole thing including deployment. It's been running since.",
      },
      {
        title: "Poslix",
        image: "/images/poslix.webp",
        category:
          "ERP / Point of Sale — Laravel & Next.js",
        url: "https://poslix.com",
        description:
          "Inherited a damaged POS database and a legacy ERP that was barely holding together. Recovered the data, refactored the APIs, optimized PostgreSQL queries, and got performance up 35%. Deployed on AWS Elastic Beanstalk. The business didn't miss a day.",
      },
      {
        title: "American Gulf School (AGS)",
        image: "/images/ags.webp",
        category: "Education — Laravel & Next.js",
        url: "https://ags.ae",
        description:
          "School needed a platform for scholarship applications, grades, attendance — a lot of data to manage. I built the backend and CMS from scratch. The attendance and grading automation alone saved their staff 15+ hours a week.",
      },
      // {
      //   title: "Map-App",
      //   image: "/images/map-app.webp",
      //   category: "Discover Nearby Landmarks with Ease - Laravel",
      //   url: "https://map-app.inteligencia.me/",
      //   description:
      //     "Map-App is a versatile application designed to streamline the process of locating nearby addresses and landmarks for sales teams. Provides comprehensive data including ratings, addresses, and contact numbers for various local destinations.",
      // },
      // {
      //   title: "Champix",
      //   image: "/images/champix.webp",
      //   category: "Games - Laravel & Next.js",
      //   url: "https://champix.inteligencia.me/",
      //   description:
      //     "Built the backend for an interactive event game platform with multi-team scoring, weighted evaluation rounds, and real-time leaderboards.",
      // },
      // {
      //   title: "Media-Share",
      //   image: "/images/media-share.webp",
      //   category: "Showcase Freelancer's Projects - Laravel & Vue.js",
      //   url: "https://media-share-9zii.onrender.com",
      //   description:
      //     "A platform hosting portfolios for multiple freelancers with integrated payments, serving 200+ users.",
      // },
      // {
      //   title: "Nortech",
      //   image: "/images/nortech.webp",
      //   category: "Engaging Social Challenge Game - Laravel, Vue.js & Next.js",
      //   url: "https://nortech.inteligencia.me/",
      //   description:
      //     "An interactive event game with diverse challenge levels, multi-criteria scoring, and comprehensive team performance assessment.",
      // },
      // {
      //   title: "Y-GYM",
      //   image: "/images/y-gym.webp",
      //   category: "Gymnastics - Laravel",
      //   url: "https://www.youtube.com/watch?v=KW5MRq9IIPY",
      //   description:
      //     "A full gym web application for administrating clients, managing trainer workouts, and facilitating workout explanations.",
      // },
      // {
      //   title: "Laravel & PrimeVue Dashboard",
      //   image: "/images/sakai.webp",
      //   category: "Admin dashboard - Laravel & Vue.js",
      //   url: "https://github.com/islamsamy214/admin-laravel-primevue/",
      //   description:
      //     "A dashboard template migrated from Sakai CLI and PrimeVue to Laravel. Fully responsive dashboard built with Laravel, PrimeVue, and Tailwind CSS.",
      // },
      // {
      //   title: "Blogs",
      //   image: "/images/blogs.webp",
      //   category: "Blogging - Laravel & Vue.js",
      //   url: "https://github.com/islamsamy214/blogs/",
      //   description:
      //     "A blogging web application built with Laravel and Vue.js with comments, likes, tags, categories, and more.",
      // },
      // {
      //   title: "BEASTs Gym",
      //   image: "/images/BEASTsGym-template-min.webp",
      //   category: "Gym and bodybuilding website",
      //   url: config.public.appUrl + "/BEASTsGym-template/",
      //   description:
      //     "BEASTsGym is website for a fictional gym. Fully responsive, built with HTML, CSS, and JavaScript.",
      // },
      // {
      //   title: "Grad School",
      //   image: "/images/grad-school-template-min.webp",
      //   category: "Educational website",
      //   url: config.public.appUrl + "/grad-school-template/",
      //   description:
      //     "Grad School is a website for a fictional school. Fully responsive, built with HTML, CSS, and JavaScript.",
      // },
      // {
      //   title: "Medic Care",
      //   image: "/images/medic-care-template-min.webp",
      //   category: "Medical website",
      //   url: config.public.appUrl + "/medic-care-template/",
      //   description:
      //     "Medic Care is a website for a fictional hospital. Fully responsive, built with HTML, CSS, and JavaScript.",
      // },
      // {
      //   title: "New Business",
      //   image: "/images/NewBusiness-bootstrap-business-template-min.webp",
      //   category: "Business website",
      //   url: config.public.appUrl + "/NewBusiness-bootstrap-business-template/",
      //   description:
      //     "New Business is a website for a fictional business. Fully responsive, built with HTML, CSS, and JavaScript.",
      // },
      // {
      //   title: "SEO MASTER",
      //   image: "/images/SEO-MASTER-min.webp",
      //   category: "Digital marketing website",
      //   url: config.public.appUrl + "/SEO-MASTER/",
      //   description:
      //     "SEO MASTER is a website for a fictional digital marketing agency. Fully responsive, built with HTML, CSS, and JavaScript.",
      // },
      // {
      //   title: "Business Landing Page",
      //   image: "/images/template-business-landing-page-min.webp",
      //   category: "Business website",
      //   url: config.public.appUrl + "/template-business-landing-page/",
      //   description:
      //     "Business Landing Page for a fictional business. Fully responsive, built with HTML, CSS, and JavaScript.",
      // },
      // {
      //   title: "Traveler",
      //   image: "/images/traveler-template-min.webp",
      //   category: "Traveling website",
      //   url: config.public.appUrl + "/traveler-template/",
      //   description:
      //     "Traveler is a website for a fictional travel agency. Fully responsive, built with HTML, CSS, and JavaScript.",
      // },
      // {
      //   title: "WCTV",
      //   image: "/images/WCTV-template-min.webp",
      //   category: "Home Camera website",
      //   url: config.public.appUrl + "/WCTV-template/",
      //   description:
      //     "WCTV is a website for a fictional home camera company. Fully responsive, built with HTML, CSS, and JavaScript.",
      // },
    ];
  });

  const homeProjects = ref([
    projects.value[0],
    projects.value[1],
    projects.value[3],
  ]);

  return { projects, homeProjects };
};
