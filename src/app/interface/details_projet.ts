export interface Details {
    id: number;
    title: string;
    description: string;
    langages: string;
    link: string;
}


export const MOCK_DETAILS_PROJET: Details[] = [
    {
        id: 1,
        title: "Boxy Generator",
        description: "Création interactive de boîtes personnalisées avec React, Tailwind CSS et Redux.",
        langages: "🔵 React",
        link: "https://github.com/MafoaSteve9/BoxyGenerator/tree/main/Boxy-project"
    },
    {
        id: 2,
        title: "Projet Angular CC",
        description: "Clone interactif de carte bancaire.",
        langages: "🔴 Angular",
        link: "https://project-angular-cc.vercel.app/"
    },
    {
        id: 3,
        title: "Porsche",
        description: "Site minimaliste dédié aux Porsche, réalisé en HTML, CSS et JS.",
        langages: "🟡 JavaScript",
        link: "https://porsche-ms.vercel.app/"
    },
    {
        id: 4,
        title: "App de divertissement",
        description: "Application dédiée aux films et séries, conçue pour une exploration simplifiée.",
        langages: "🔵 React",
        link: "https://app-de-divertissement-sm.vercel.app/"
    },
    {
        id: 5,
        title: "Portfolio",
        description: "Ce portfolio a été méticuleusement conçu avec ReactJS 18 et stylisé avec Tailwind CSS",
        langages: "🔵 React",
        link: "https://portfolio-stevemafoa.vercel.app/"
    },
    {
        id: 5,
        title: "Api rest",
        description: "Créer des validateurs personnalisés, Authentification avec JWT..",
        langages: "🟢 Node.js",
        link: "https://github.com/MafoaSteve9/API-Rest"
    }
]