export const profile = {
  name: "PONMANI ",
  title: "Backend Developer & DevOps Engineer",
  description:
    "I build scalable backend systems and automate infrastructure with DevOps and cloud technologies.",
  taglines: [
    "Building scalable backend systems",
    "Designing distributed architectures",
    "Automating cloud infrastructure",
    "Crafting resilient microservices",
    "Optimizing CI/CD pipelines",
    "Engineering fault-tolerant services",
  ],
  about:
    "I'm a passionate Backend Developer and DevOps Engineer with 4+ years of experience building robust, scalable systems that power modern applications. I specialize in designing distributed architectures, automating cloud infrastructure, and implementing secure CI/CD pipelines. My approach combines clean code practices with infrastructure-as-code to deliver reliable, high-performance solutions.",
  specializations: [
    {
      title: "Backend Engineering",
      description:
        "Building high-performance APIs, microservices, and event-driven architectures that handle millions of requests with sub-100ms latency.",
      icon: "server",
    },
    {
      title: "System Design",
      description:
        "Architecting distributed systems with reliability, horizontal scalability, fault tolerance, and data consistency guarantees.",
      icon: "cpu",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Deploying and managing cloud-native applications on AWS using Terraform, Kubernetes, and serverless architectures.",
      icon: "cloud",
    },
    {
      title: "DevSecOps Pipelines",
      description:
        "Implementing automated CI/CD workflows with integrated security scanning, testing, and zero-downtime deployments.",
      icon: "shield",
    },
  ],
  experience: [
    {
      role: "Senior Backend Engineer",
      company: "CloudScale Technologies",
      period: "2030 – Present",
      location: "San Francisco, CA",
      description:
        "Leading backend architecture for microservices platform processing 5M+ daily requests. Designed event-driven systems using Kafka and reduced API latency by 40%. Mentoring a team of 4 junior engineers.",
      highlights: [
        "Reduced API latency by 40% through event-driven architecture",
        "Scaled platform to handle 5M+ daily requests",
        "Led migration from monolith to 20+ microservices",
        "Implemented distributed tracing with OpenTelemetry",
      ],
      tech: ["Node.js", "Go", "Kafka", "Kubernetes", "PostgreSQL", "Redis"],
    },
    {
      role: "DevOps Engineer",
      company: "InfraOps Inc.",
      period: "2029 – 2030",
      location: "Austin, TX",
      description:
        "Built and maintained CI/CD pipelines for 30+ services. Implemented IaC with Terraform, reduced deployment time from 45 min to 8 min, and achieved 99.9% uptime.",
      highlights: [
        "Reduced deployment time from 45 min to 8 min",
        "Achieved 99.9% uptime across all production services",
        "Automated infrastructure provisioning for 3 environments",
        "Implemented GitOps workflow with ArgoCD",
      ],
      tech: ["Terraform", "AWS", "Docker", "Jenkins", "ArgoCD", "Helm"],
    },
    {
      role: "Backend Developer",
      company: "DataFlow Systems",
      period: "2028 – 2029",
      location: "Remote",
      description:
        "Developed RESTful APIs and real-time WebSocket services. Built distributed caching layer with Redis reducing database load by 60%.",
      highlights: [
        "Built caching layer reducing DB load by 60%",
        "Developed WebSocket service for 50K concurrent users",
        "Designed and shipped 12 production-ready API endpoints",
      ],
      tech: ["Node.js", "Express", "Redis", "MongoDB", "Docker"],
    },
    {
      role: "Software Engineering Intern",
      company: "TechStart Labs",
      period: "2027 – 2028",
      location: "Bangalore, India",
      description:
        "Contributed to backend services and wrote automated test suites. Built internal CLI tools that improved developer productivity by 25%.",
      highlights: [
        "Built CLI tools improving team productivity by 25%",
        "Wrote 200+ automated tests with 95% coverage",
        "Contributed to core payment processing module",
      ],
      tech: ["Python", "Flask", "MySQL", "Linux", "Git"],
    },
  ],
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Delivered", value: "30+" },
    { label: "Open Source Repos", value: "40+" },
    { label: "CI/CD Pipelines Built", value: "50+" },
  ],
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com/in",
    email: "xyz@example.com",
  },
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "Indian Institute of Technology",
      period: "2026 – 2030",
      gpa: "8.9 / 10",
    },
  ],
  schoolEducation: [
    {
      standard: "12th Standard",
      school: "XYZ HR Sec School",
      percentage: "92%",
    },
    {
      standard: "10th Standard",
      school: "XYZ HR Sec School",
      percentage: "90%",
    },
  ],
  certifications: [
    "AWS Certified Solutions Architect – Associate",
    "Certified Kubernetes Administrator (CKA)",
    "HashiCorp Terraform Associate",
  ],
};