export const projects = [
  {
    number: "01",
    title: "Order Fulfillment\nPlatform",
    shortTitle: "Order Fulfillment Platform",
    description:
      "Developed a Go-based microservices order fulfillment platform with services for users, products, carts, checkout, orders, and inventory. Implemented REST APIs using Gin, gRPC with Protocol Buffers for internal service communication, and GraphQL APIs using gqlgen. Integrated PostgreSQL for persistent storage and Redis for caching. Containerized services using Docker and Docker Compose.",
    technologies: [
      "Go",
      "Gin",
      "gRPC",
      "Protocol Buffers",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    github: "https://github.com/ashish-pushpad/order-fulfillment",
    live: "",
    diagramType: "orderFulfillment",
  },
  {
    number: "02",
    title: "Song Hunter",
    shortTitle: "Song Hunter",
    description:
      "Built an AI-powered music discovery application that helps users find songs based on emotions and descriptive tags. Developed a responsive frontend using React.js and Tailwind CSS, integrated Google Gemini for AI-assisted song discovery, and implemented backend REST APIs with MongoDB storage for songs and emotional tags. Supports song discovery using descriptive tags and manually entered song metadata.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Google Gemini", "REST APIs", "MongoDB"],
    github: "",
    live: "https://song-hunter.vercel.app/",
    diagramType: "songHunter",
  },
  {
    number: "03",
    title: "TenderBandhu\nE-Tendering\nSolution",
    shortTitle: "TenderBandhu",
    description:
      "Developed a full-stack e-tendering platform using the MERN stack, featuring a responsive React frontend, user authentication, and tender and bid management workflows. Built backend REST APIs using Node.js and Express.js, with MongoDB for persistent data storage.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git"],
    github: "https://github.com/ashish-pushpad/tender_app",
    live: "",
    diagramType: "tenderBandhu",
  },
];
