export const useProjects = () => {
  const config = useRuntimeConfig();

  const projects = useState("projects", () => {
    return [
      {
        title: "Skyloov Property Portal",
        image: "/images/skyloov.webp",
        category:
          "Real Estate - Python, Django, PHP, Laravel, Vue.js & Next.js",
        url: "https://skyloov.com/",
        description:
          "Skyloov is a real estate portal that allows users to buy, sell, and rent properties. It also provides a platform for real estate agents to list their properties and manage their clients. I was responsible for the backend development, API creation, I worked on CMS Microservice, Analytics Microservice, Marketing Microservice, and Chat Microservice. I also developed the frontend for the admin panel and the frontend for the CMS Microservice.",
      },
      {
        title: "Map-App",
        image: "/images/map-app.webp",
        category: "Discover Nearby Landmarks with Ease - Laravel",
        url: "https://map-app.inteligencia.me/",
        description:
          "Map-App is a versatile application meticulously designed to streamline the process of locating nearby addresses, landmarks for our dedicated sales team. It provides comprehensive data, including ratings, addresses, and contact numbers, for various local destinations. I had the privilege of spearheading this project from inception to fruition. Currently, Map-App is freely accessible to all, oﬀering its beneﬁts to a wider audience. However, there is a possibility that the organization may decide to limit access exclusively to company members in the future.",
      },
      {
        title: "Blueholding Intranet",
        image: "/images/intranet.webp",
        category:
          "Your Company's Exclusive Social Hub - Laravel, Vue.js & Next.js",
        url: "https://intranet.blueholding.co.uk/",
        description:
          "Blueholding Intranet is a dynamic platform inspired by LinkedIn, tailored speciﬁcally for our company. It serves as a social media hub for internal communication, allowing us to share news, upcoming events, interactive posts (akin to Twitter and Facebook), employee proﬁles, achievements, and more. Although similar to LinkedIn, it excludes job applications. The project was a formidable challenge, given our tight timeline and the need for real-time notiﬁcations. To achieve this, I implemented Redis for realtime features and utilized Laravel workers to queue and deliver manager emails through AWS SES. My responsibilities included developing the backend, crafting the CMS interface, and overseeing the deployment process.",
      },
      {
        title: "Poslix",
        image: "/images/poslix.webp",
        category:
          "Streamlined ERP for Diverse Point of Sales - Laravel & Next.js",
        url: "https://poslix.com",
        description:
          "Poslix is a versatile ERP solution catering to various point of sale businesses under a single owner. I took charge of backend development and API creation, despite the initial challenge of working with an existing and somewhat damaged database. After cloning the database for testing and reﬁning it, I successfully developed the required APIs to meet the owner's mobile needs.",
      },
      {
        title: "Laravel & PrimeVue Dashboard",
        image: "/images/sakai.webp",
        category: "Admin dashboard - Laravel & Vue.js",
        url: "https://github.com/islamsamy214/admin-laravel-primevue/",
        description:
          "A dashboard template I migrate it from Sakai CLI and PrimeVue from native vue to be with Laravel. It is a fully responsive dashboard template that can be used for any type of web application. It is built with Laravel, PrimeVue, and Tailwind CSS.",
      },
      {
        title: "American gulf school AGS",
        image: "/images/ags.webp",
        category: "Scholarship - Laravel & Next.js",
        url: "https://ags.ae",
        description:
          "American gulf school AGS is a scholarship platform that allows students to apply for scholarships and get the results of their applications. They can also view the available scholarships and the requirements for each one. I was responsible for the backend and the deployment, It was a challenge because it has a lot of data to be managed with CMS, and of course, my role was to make that CMS, It was a challenge because it has a lot of data to be managed with CMS, and of course, my role was to make that CMS. I was responsible for the backend and the deployment, It wasn’t that challenge to be fair otherwise it was too long because it has a lot of data to be managed with CMS, and of course, my role was to make that CMS.",
      },
      {
        title: "Champix",
        image: "/images/champix.webp",
        category: "Games - Laravel & Next.js",
        url: "https://champix.inteligencia.me/",
        description:
          "I was responsible for the backend and the deployment, It was a game like AGT but for a play, many teams will be involved and each team has many role plays so each role-play should have its rate and the team will get the average overall rate for each of them in all rounds and each round divided into multiple rates and each rate has a weight in addition that there is a separated round for a presentation with its rates should be added to the overall too.",
      },
      {
        title: "Media-Share",
        image: "/images/media-share.webp",
        category: "Showcase Freelancer's Projectss - Laravel & Vue.js",
        url: "https://media-share-9zii.onrender.com",
        description:
          "Media-Share is a platform that hosts portfolios for multiple freelancers, allowing them to display their work to potential clients.",
      },
      {
        title: "Y-GYM",
        image: "/images/y-gym.webp",
        category: "Gymnastics - Laravel",
        url: "https://www.youtube.com/watch?v=KW5MRq9IIPY",
        description:
          "Y-GYM is a full gym web application for administrating its clients, help the trainers to manage their workouts, and facilitate the workouts explanation I built it with Laravel",
      },
      {
        title: "BEASTs Gym",
        image: "/images/BEASTsGym-template-min.webp",
        category: "Gym and bodybuilding webiste",
        url: config.public.appUrl + "/BEASTsGym-template/",
        description:
          "BEASTsGym is website for a fictional gym. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript",
      },
      {
        title: "Blogs",
        image: "/images/blogs.webp",
        category: "Blogging - Laravel & Vue.js",
        url: "https://github.com/islamsamy214/blogs/",
        description:
          "A blogging web application I built it with Laravel and Vue.js, it has a lot of features like comments, likes, tags, categories, and more.",
      },
      {
        title: "Nortech",
        image: "/images/nortech.webp",
        category: "Engaging Social Challenge Game - Laravel, Vue.js & Next.js",
        url: "https://nortech.inteligencia.me/",
        description:
          "Nortech is an immersive and interactive game designed to seamlessly integrate into events and serve as an exciting source of social entertainment. In this captivating experience, participants gather in groups and embark on a journey through diverse challenge levels. Each level introduces unique scoring challenges that tap into creativity, acting skills, and more, along with multiple evaluation forms. These forms encompass a range of criteria, each carrying its own signiﬁcance in determining comprehensi the ﬁnal score. Ultimately, the system aggregates the scores from all levels, delivering a comprehensive assessment of each team's performance. I took charge of the backend development, the CMS interface, and handled the deployment process as well.",
      },
      {
        title: "Grad School",
        image: "/images/grad-school-template-min.webp",
        category: "Educational website",
        url: config.public.appUrl + "/grad-school-template/",
        description:
          "Grad School is a website for a fictional school. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        title: "Medic Care",
        image: "/images/medic-care-template-min.webp",
        category: "Medical website",
        url: config.public.appUrl + "/medic-care-template/",
        description:
          "Medic Care is a website for a fictional hospital. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        title: "New Business",
        image: "/images/NewBusiness-bootstrap-business-template-min.webp",
        category: "Business website",
        url: config.public.appUrl + "/NewBusiness-bootstrap-business-template/",
        description:
          "New Business is a website for a fictional business. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        title: "SEO MASTER",
        image: "/images/SEO-MASTER-min.webp",
        category: "Digital marketing website",
        url: config.public.appUrl + "/SEO-MASTER/",
        description:
          "SEO MASTER is a website for a fictional digital marketing agency. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        title: "Business Landing Page",
        image: "/images/template-business-landing-page-min.webp",
        category: "Business website",
        url: config.public.appUrl + "/template-business-landing-page/",
        description:
          "Business Landing Page is a website for a fictional business. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        title: "Traveler",
        image: "/images/traveler-template-min.webp",
        category: "Traveling website",
        url: config.public.appUrl + "/traveler-template/",
        description:
          "Traveler is a website for a fictional travel agency. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        title: "WCTV",
        image: "/images/WCTV-template-min.webp",
        category: "Home Camera website",
        url: config.public.appUrl + "/WCTV-template/",
        description:
          "WCTV is a website for a fictional home camera company. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      // {
      //   title: "just maried",
      //   image: "/images/just-maried-template-min.webp",
      //   category: "Wedding website",
      //   url: config.public.appUrl + "/just-maried-template/",
      //   description:
      //     "WEDDING is a website for a fictional wedding planner. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      // },
      // {
      //   title: "Interior",
      //   image: "/images/interior-template-min.webp",
      //   category: "Interior design website",
      //   url: config.public.appUrl + "/interior-template/",
      //   description:
      //     "Interior is a website for a fictional interior design company. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      // },
      // {
      //   title: "Cleaning",
      //   image: "/images/cleaning-template-min.webp",
      //   category: "Cleaning company website",
      //   url: config.public.appUrl + "/cleaning-template/",
      //   description:
      //     "Cleaning is a website for a fictional cleaning company. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      // },
    ];
  });

  const homeProjects = ref([
    projects.value[0],
    projects.value[3],
    projects.value[5],
  ]);

  return { projects, homeProjects };
};
