export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: "whatsapp-bot",
    number: "01",
    title: "WhatsApp Moderation Bot",
    category: "AI Automation",
    description: "AI-powered WhatsApp moderation system that detects toxic messages, gives progressive warnings, stores violation data, shows leaderboard rankings, and supports auto-kick after repeated violations.",
    tech: ["n8n", "WAHA", "Gemini", "MySQL", "WhatsApp API"],
    link: "https://github.com/xevorine/chatbot_whatsapp",
    challenge: "Handling real-time messages at scale while accurately identifying abusive language without generating high API latency or false positives.",
    solution: "Built a reactive pipeline using n8n and WAHA. Integrated Gemini API with strict context-aware guidelines for hate speech detection and logged infraction counters in MySQL for automated warning thresholds."
  },
  {
    id: "website-chatbot",
    number: "02",
    title: "Website Chatbot",
    category: "AI / Web Application",
    description: "A web-based chatbot system integrated into websites to handle customer queries, automate responses, and improve user engagement through smart conversational flows.",
    tech: ["HTML", "CSS", "JavaScript", "Chatbot API"],
    link: "https://github.com/xevorine/website-chatbot",
    challenge: "Designing an adaptive chatbot UI that looks consistent across different website layouts while loading fast and handling offline modes.",
    solution: "Crafted a clean Vanilla JS web component with light DOM isolation. Utilized localStorage to cache conversation histories and integrated a lightweight web socket connection for real-time answers."
  },
  {
    id: "hate-speech-detection",
    number: "03",
    title: "ID Multi-Label Hate Speech & Abusive Detection",
    category: "Machine Learning / NLP",
    description: "Machine learning model to detect and classify Indonesian hate speech and abusive language on social media into multiple labels, using advanced NLP preprocessing and model training.",
    tech: ["Python", "Scikit-Learn", "NLP", "Machine Learning"],
    link: "https://github.com/xevorine/id-multi-label-hate-speech-and-abusive-language-detection",
    challenge: "Dealing with highly informal, slang, and misspelled Indonesian social media text containing multiple overlapping abusive labels (e.g. offensive, hate speech, individual vs group targeting).",
    solution: "Engineered custom tokenization and TF-IDF weighting pipelines. Compared multiple algorithms (Naive Bayes, SVM, Random Forest) and trained multi-label classifiers using Scikit-Learn to accurately separate sentiment categories."
  },
  {
    id: "tournament-manager",
    number: "04",
    title: "Tournament Manager Database",
    category: "Database Design",
    description: "Relational database and backend design for a tournament management system handling player registration, team brackets, match scheduling, and leaderboard progression.",
    tech: ["SQL", "MySQL", "ERD", "Database Design"],
    link: "https://github.com/Xerillia/tournament-manager",
    challenge: "Modeling complex recursive relational schemas for multi-stage tournament brackets (single/double elimination, round robin) while maintaining referential integrity during bulk updates.",
    solution: "Designed a clean, normalized database structure with strict indexes. Wrote detailed stored procedures and triggers to automatically compute bracket wins, advance players, and update global leaderboards dynamically."
  },
  {
    id: "cc-studio",
    number: "05",
    title: "C&C Studio Landing Page",
    category: "Frontend / UI Design",
    description: "Clean landing page concept for a creative studio with service sections, project showcase, responsive layout, and polished visual hierarchy.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/CatandCStudio-dev/WebSitePorto",
    challenge: "Creating a highly visual creative showcase that performs well on low-end devices and respects fluid typography guidelines.",
    solution: "Built responsive layouts using modern Tailwind grid patterns. Optimized image loading via lazy loading and CSS compression to keep initial page load speed fast and animations buttery."
  }
];
