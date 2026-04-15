export const useProfile = () => {
    const profile = reactive({
        name: "Islam Samy",
        title: "Software Engineer",
        intro: "DevOps-oriented Software Engineer with 5+ years of experience in cloud infrastructure, CI/CD, and scalable web systems. Skilled in Azure, AWS, Kubernetes, Docker, and Prometheus, with strong backend expertise in PHP (Laravel, Lumen), Golang, and microservices. Known for end-to-end ownership, automation, and ensuring high system reliability.",
        header: "I'm a DevOps-oriented software engineer working across cloud infrastructure, CI/CD, and backend microservices — Azure, AWS, Kubernetes, Docker, Laravel, and Golang, with frontend experience in Nuxt.js and Vue.js.",
        description: "I have a passion for building reliable, scalable systems end-to-end — from infrastructure as code and CI/CD pipelines to backend services and frontend delivery. I'm a quick learner who keeps pushing skills forward to meet real production demands.",
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
            title: "DevOps Engineer",
            company: "GINCO IT",
            location: "Dubai, UAE - Onsite",
            year: "2026 - Present",
            bullets: [
                "Architect and operate scalable, resilient platforms across multi-cloud and on-premises environments.",
                "Implemented GitOps principles to ensure Git remains the single source of truth, making deployments predictable and reversible.",
                "Modernized infrastructure management by treating all resources as version-controlled code (IaC) to ensure auditability and consistency.",
                "Built robust CI/CD pipelines using Azure DevOps and GitHub, streamlining the path from code to production.",
                "Manage production-grade Kubernetes clusters, focusing on security, deep observability, and Helm-based standardization.",
                "Partner with development teams to remove delivery friction, improving overall system reliability and deployment frequency.",
            ],
        },
        {
            title: "Software Engineer",
            company: "Skyloov DMCC",
            location: "Dubai, UAE - Onsite",
            year: "2023 - 2026",
            bullets: [
                "Migrated dev/test environments from AWS (EKS, ECR, Kubernetes) to on-prem Minikube, reducing infrastructure costs by $3K/month.",
                "Built CI/CD pipelines with GitHub Actions + Docker, cutting release cycles by 40%.",
                "Implemented Prometheus monitoring and alerting for continuous microservice health visibility.",
                "Developed microservices for marketing, analytics, chat, and agent tracking using Laravel, MongoDB, Reverb, and XML services.",
                "Configured Omada firewall rules, strengthening network security and throughput.",
                "Used Laravel Pulse APM to monitor performance across all Laravel microservices.",
            ],
        },
        {
            title: "Software Engineer",
            company: "Blue Holding",
            location: "Alexandria, Egypt - Onsite",
            year: "2022 - 2023",
            bullets: [
                "Led cloud migration from cPanel to AWS (EC2, S3, SES, CloudFront), improving uptime, scalability, and reliability.",
                "Designed and implemented Dockerized CI/CD pipelines with GitHub Actions across multiple services.",
                "Owned application deployments, uptime monitoring, and infrastructure health.",
                "Optimized Redis-powered intranet notifications to boost internal communication.",
                "Built backend systems for AGS (American Gulf School), automating attendance and grading, saving staff 15+ hours weekly.",
            ],
        },
        {
            title: "Backend Developer",
            company: "POSLIX",
            location: "Oman, Muscat - Remote",
            year: "2021 - 2022",
            bullets: [
                "Deployed ERP system on AWS Elastic Beanstalk, simplifying scaling, monitoring, and maintenance.",
                "Refactored legacy ERP APIs and optimized PostgreSQL queries, improving performance by 35%.",
                "Recovered and migrated a damaged POS database, ensuring business continuity and data integrity.",
            ],
        },
        {
            title: "Freelance Software Engineer",
            company: "Fiverr, and Upwork",
            location: "Alexandria, Egypt - Remote",
            year: "2020 - 2021",
            bullets: [
                "Delivered deployment-ready web applications, managing hosting, CI/CD, and infrastructure for clients.",
                "Built Media-Share, a freelancer portfolio platform with integrated payments, serving 200+ users.",
                "Developed Y-GYM, a gym management system with real-time attendance tracking and automated workflows.",
            ],
        },
    ]);

    const educations = reactive([
        {
            title: "Bachelor of Computer Science",
            university: "Kafr Elshaikh University",
            location: "Kafr Elshaikh, Egypt",
            year: "2017 - 2021",
            link: "https://www.linkedin.com/in/islamsamy214/overlay/Education/732286525/treasury/?profileId=ACoAACkzMfkBRpxjGlVzE_PQ7aFoWMk4eVyF3Io"
        }
    ]);

    const certifications = reactive([
        {
            title: "Microsoft Certified: Azure Developer Associate (AZ-204)",
            institution: "Microsoft",
            location: "Dubai, UAE",
            year: "2026",
            link: "https://learn.microsoft.com/en-us/users/islacks/credentials/6340d3044e638365"
        },
        {
            title: "Certified Kubernetes Application Developer (CKAD)",
            institution: "The Linux Foundation",
            location: "Dubai, UAE",
            year: "2025",
            link: "https://www.credly.com/badges/0e74aa29-2087-4e0c-aa23-c27a97e8537b"
        },
        {
            title: "HashiCorp Certified: Terraform Associate (003)",
            institution: "HashiCorp",
            location: "Dubai, UAE",
            year: "2025",
            link: "https://www.credly.com/badges/522d41ef-911f-4324-941c-64800f7941f4"
        },
        {
            title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
            institution: "Microsoft",
            location: "Dubai, UAE",
            year: "2025",
            link: "https://learn.microsoft.com/en-us/users/islacks/credentials/526dd634472ed316"
        },
        {
            title: "AWS Certified Cloud Practitioner",
            institution: "Amazon Web Services (AWS)",
            location: "Dubai, UAE",
            year: "2025",
            link: "https://www.credly.com/badges/0b680d35-267c-45ec-a22d-33ac15458727"
        },
        {
            title: "IELTS Band: 6",
            institution: "British Council",
            location: "Alexandria, Egypt",
            year: "2023",
            link: "https://ieltsregistration.britishcouncil.org/ttp/login?returnUrl=/ors/test-details/10024316/results"
        },
        {
            title: "Advanced Cloud DevOps Certification",
            institution: "FWD - Udacity",
            location: "Alexandria, Egypt",
            year: "2022 - 2023",
            link: "https://www.udacity.com/certificate/9TGWADKZ"
        },
        {
            title: "ITI Front-End Certification",
            institution: "Information Technology Institute (ITI)",
            location: "Alexandria, Egypt",
            year: "2020 - 2021",
            link: "https://www.linkedin.com/in/islamsamy214/details/certifications/1635555150220/single-media-viewer?profileId=ACoAACkzMfkBRpxjGlVzE_PQ7aFoWMk4eVyF3Io"
        },
    ]);

    return {
        profile,
        experiences,
        educations,
        certifications
    };
}
