export const useServices = () => {
    const services = useState("services", () => {
        return [
            {
                title: "Backend development",
                icon: "mdi:server",
                discription:
                    "I can build a scalable and secure backend for your application.",
            },
            {
                title: "Frontend development",
                icon: "mdi:web",
                discription:
                    "I can build a responsive and user-friendly frontend for your application.",
            },
            {
                title: "DevOps",
                icon: "mdi:aws",
                discription: "I can help you in deploying and managing your application.",
            },
            { title: "Fullstack development", icon: "material-symbols:code-off-rounded", discription: "I can build both the frontend and backend for your application." },
            { title: "Database design", icon: "material-symbols-light:database", discription: "I can design a database schema for your application." },
            { title: "API integration", icon: "mdi:api", discription: "I can integrate third-party APIs into your application." },
            { title: "Performance optimization", icon: "material-symbols:performance-max", discription: "I can optimize your application for speed and efficiency." },
            { title: "Security audit", icon: "material-symbols:security", discription: "I can perform a security audit on your application." },
            { title: "Code review", icon: "material-symbols:planner-review-rounded", discription: "I can review your codebase and provide feedback." },
            { title: "Documentation", icon: "material-symbols:docs-outline", discription: "I can write technical documentation for your application." },
            { title: "Project management", icon: "fluent:projection-screen-text-24-filled", discription: "I can manage your project from start to finish." },
            { title: "UI/UX design", icon: "material-symbols:design-services-rounded", discription: "I can design a beautiful and intuitive user interface for your application." },
            { title: "SEO optimization", icon: "tabler:seo", discription: "I can optimize your website for search engines to increase your visibility." },
            { title: "E-commerce development", icon: "material-symbols:add-shopping-cart", discription: "I can build an online store for your business." },
            { title: "Web hosting", icon: "simple-icons:hostinger", discription: "I can host your website on a secure and reliable server." },
            { title: "Domain registration", icon: "material-symbols:cloud-domains", discription: "I can register a domain name for your website." },
            { title: "Maintenance & support", icon: "material-symbols:checked-bag-question-rounded", discription: "I can maintain and support your website after it's launched." },
            { title: "Consulting", icon: "mdi:cellphone-message", discription: "I can provide you with expert advice on your project." },
            { title: "Training", icon: "material-symbols:model-training-outline-rounded", discription: "I can train you or your team on web development technologies." },
            { title: "Custom solutions", icon: "material-symbols:dashboard-customize", discription: "I can build a custom solution for your unique requirements." },
            { title: "And more...", icon: "gg:more-o", discription: "I can help you with any other web development services you need." },
        ];
    });

    const homeServices = ref([
        services.value[0],
        services.value[1],
        services.value[2],
    ]);

    return { services, homeServices };
}