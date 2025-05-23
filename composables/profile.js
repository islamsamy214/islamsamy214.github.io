export const useProfile = () => {
    const profile = reactive({
        name: "Islam Samy",
        title: "Software Engineer",
        intro: "I’m a software engineer specialized in web development, motivated to meet customers and users expectations with high-quality and eﬀective website layouts, It’s good to say that I know my limits and I always try to exceed them, I accept the fact that I’m wrong when I’m wrong and build experience upon it too, and last but not least that I always try to develop my personality just like developing my skills.",
        header: "I’m a software engineer specialized in web development, using Laravel framework and Golang for backend and Nuxt.js with Vue.js for frontend, in addition to DevOps skills too.",
        description: "I have a passion for web development and love to create for web and mobile devices. I have a solid foundation in computer science, and I am a quick learner who is always trying to learn new technologies to improve my skills. ",
        name: "Islam Samy",
        address: "Dubai, UAE",
        email: "islamsamy214@gmail.com",
        phone: "(+971) 50 541 6038",
        phoneNumber: "+971505416038",
        altPhone: "(+20) 114 034 7814",
        altPhoneNumber: "+201140347814",
        links: {
            github: "https://github.com/islamsamy214",
            linkedin: "https://www.linkedin.com/in/islamsamy214/",
            whatsapp: "https://wa.me/+971505416038",
            buymeacoffee: "https://www.buymeacoffee.com/islamsamy"
        }
    });

    const experiences = reactive([
        {
            title: "Software Engineer",
            company: "Skyloov DMCC",
            location: "Dubai, UAE - Onsite",
            year: "2023 - Present",
        },
        {
            title: "Software Engineer",
            company: "Blue Holding",
            location: "Alexandria, Egypt - Onsite",
            year: "2022 - 2023",
        },
        {
            title: "Backend Developer",
            company: "POSLIX",
            location: "Oman, Muscat - Remote",
            year: "2021 - 2022",
        },
        {
            title: "Freelance Software Engineer",
            company: "Fiverr, and Upwork",
            location: "Alexandria, Egypt - Remote",
            year: "2020 - 2021",
        },
    ]);

    const educations = reactive([
        {
            title: "Bachelor of Computer Science",
            university: "Kafr Elshaikh University",
            location: "Kafr Elshaikh, Egypt",
            year: "2017 - 2021",
        },
        {
            title: "AWS Certified Cloud Practitioner",
            university: "Amazon Web Services (AWS)",
            location: "Dubai, UAE",
            year: "2025",
        },
        {
            title: "Advanced Cloud DevOps Certification",
            university: "FWD - Udacity",
            location: "Alexandria, Egypt",
            year: "2022 - 2023",
        },
        {
            title: "Front-End Certification",
            university: "Information Technology Institute (ITI)",
            location: "Alexandria, Egypt",
            year: "2020 - 2021",
        },
    ]);

    return {
        profile,
        experiences,
        educations,
    };
}