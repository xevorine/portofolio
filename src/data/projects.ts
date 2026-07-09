export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: "whatsapp-bot",
    number: "01",
    title: "WhatsApp Moderation Bot",
    category: "AI Automation",
    description: "AI-powered WhatsApp moderation system that detects toxic messages, gives progressive warnings, stores violation data, shows leaderboard rankings, and supports auto-kick after repeated violations.",
    tech: ["n8n", "WAHA", "Gemini", "MySQL", "WhatsApp API"],
    link: "https://github.com/xevorine/chatbot_whatsapp"
  },
  {
    id: "website-chatbot",
    number: "02",
    title: "Website Chatbot",
    category: "AI / Web Application",
    description: "A web-based chatbot system integrated into websites to handle customer queries, automate responses, and improve user engagement through smart conversational flows.",
    tech: ["HTML", "CSS", "JavaScript", "Chatbot API"],
    link: "https://github.com/xevorine/website-chatbot"
  },
  {
    id: "hate-speech-detection",
    number: "03",
    title: "ID Multi-Label Hate Speech & Abusive Detection",
    category: "Machine Learning / NLP",
    description: "Machine learning model to detect and classify Indonesian hate speech and abusive language on social media into multiple labels, using advanced NLP preprocessing and model training.",
    tech: ["Python", "Scikit-Learn", "NLP", "Machine Learning"],
    link: "https://github.com/xevorine/id-multi-label-hate-speech-and-abusive-language-detection"
  },
  {
    id: "tournament-manager",
    number: "04",
    title: "Tournament Manager Database",
    category: "Database Design",
    description: "Relational database and backend design for a tournament management system handling player registration, team brackets, match scheduling, and leaderboard progression.",
    tech: ["SQL", "MySQL", "ERD", "Database Design"],
    link: "https://github.com/Xerillia/tournament-manager"
  },
  {
    id: "cc-studio",
    number: "05",
    title: "C&C Studio Landing Page",
    category: "Frontend / UI Design",
    description: "Clean landing page concept for a creative studio with service sections, project showcase, responsive layout, and polished visual hierarchy.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/CatandCStudio-dev/WebSitePorto"
  }
];
