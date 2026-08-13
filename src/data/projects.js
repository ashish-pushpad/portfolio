export const projects = [
  {
    number: "01",
    title: "Order Fulfillment\nPlatform",
    shortTitle: "Order Fulfillment Platform",
    description:
      "A distributed order management system handling product inventory, cart operations, pricing logic and fulfillment workflows across microservices.",
    technologies: ["Go", "PostgreSQL", "gRPC", "Docker"],
    github: "#",
    live: "",
    diagramType: "microservices",
  },
  {
    number: "02",
    title: "REST API\nGateway",
    shortTitle: "REST API Gateway",
    description:
      "A lightweight API gateway that routes requests, handles authentication middleware and aggregates responses from multiple upstream services.",
    technologies: ["Node.js", "Express", "Redis", "Docker"],
    github: "#",
    live: "",
    diagramType: "gateway",
  },
  {
    number: "03",
    title: "Real-Time\nData Pipeline",
    shortTitle: "Real-Time Data Pipeline",
    description:
      "An event-driven data pipeline using Kafka for message streaming between services, with PostgreSQL as the persistent store.",
    technologies: ["Go", "Kafka", "PostgreSQL", "Kubernetes"],
    github: "#",
    live: "",
    diagramType: "pipeline",
  },
];
