export const useServices = () => {
    const services = useState("services", () => {
        return [
            {
                title: "Cloud Infrastructure & Migration",
                icon: "mdi:aws",
                discription:
                    "Stuck on outdated hosting or bleeding money on cloud bills? I move your infrastructure to Azure or AWS properly — no surprises, no downtime drama.",
            },
            {
                title: "CI/CD & DevOps Automation",
                icon: "mdi:pipe",
                discription:
                    "If deploying feels risky or takes hours, something's broken. I set up pipelines that let your team ship with confidence — GitHub Actions, Azure DevOps, whatever fits.",
            },
            {
                title: "Kubernetes & Containers",
                icon: "mdi:kubernetes",
                discription:
                    "Containers running but nobody really understands how? I set up Kubernetes the right way — Helm charts, proper networking, monitoring, and security that doesn't get ignored.",
            },
            {
                title: "Backend Engineering & APIs",
                icon: "mdi:server",
                discription:
                    "Need a backend that won't buckle under load? I build APIs and microservices in Laravel and Golang that are fast, tested, and ready for the real world.",
            },
            {
                title: "Monitoring & Observability",
                icon: "material-symbols:performance-max",
                discription:
                    "You can't fix what you can't see. I wire up Prometheus, Grafana, and alerting so you know what's happening in your systems before your users do.",
            },
            {
                title: "Infrastructure as Code",
                icon: "material-symbols:code-off-rounded",
                discription:
                    "Clicking around in cloud consoles doesn't scale. I set up Terraform, Bicep, or CloudFormation so your infra is versioned, repeatable, and not stuck in someone's head.",
            },
            {
                title: "Security & Compliance",
                icon: "material-symbols:security",
                discription:
                    "Security configs you set up once and forgot about? I audit what's actually running, tighten the gaps, and help you meet compliance requirements without the panic.",
            },
            {
                title: "Full-Stack Web Development",
                icon: "mdi:web",
                discription:
                    "Sometimes you just need the whole thing built — frontend to backend to deployment. I work across Nuxt.js, Vue.js, Laravel, and Golang to deliver complete systems.",
            },
        ];
    });

    const homeServices = ref([
        services.value[0],
        services.value[1],
        services.value[3],
    ]);

    return { services, homeServices };
}
