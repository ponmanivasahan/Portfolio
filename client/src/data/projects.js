export const projectCategories = ["All", "Full Stack", "Cloud", "Mobile", "AI/ML", "DevOps"];

export const projects = [
  {
    id: 1,
    title: "Cloud-Native E-Commerce Platform",
    description: "A scalable e-commerce platform built with microservices architecture, deployed on AWS EKS with auto-scaling and CI/CD pipeline.",
    longDescription: "Designed and implemented a cloud-native e-commerce platform handling 10K+ concurrent users. The system uses microservices architecture with Kubernetes orchestration, ensuring high availability and fault tolerance.",
    category: "Cloud",
    featured: true,
    tech: ["React", "Node.js", "AWS", "Kubernetes", "Docker", "MongoDB", "Redis"],
    role: "Lead Developer & Cloud Architect",
    duration: "6 months",
    team: "4 developers",
    github: "https://github.com/username/ecommerce-platform",
    demo: "https://ecommerce-demo.com",
    challenge: "The client needed a platform that could handle sudden traffic spikes during sales events while maintaining performance and reliability. The existing monolithic solution couldn't scale effectively.",
    solution: "Implemented a microservices architecture with Kubernetes orchestration. Used AWS EKS for container management, Redis for caching, and MongoDB for product catalog. Set up auto-scaling policies to handle traffic spikes.",
    architecture: "The system consists of 8 microservices including product catalog, user authentication, order processing, payment, inventory, and notification services. Each service is containerized and deployed separately.",
    features: [
      "Real-time inventory management",
      "JWT-based authentication",
      "Payment gateway integration",
      "Order tracking system",
      "Admin dashboard with analytics"
    ],
    impact: [
      "Handles 50K+ concurrent users during peak times",
      "99.9% uptime achieved",
      "60% faster page loads compared to previous system"
    ]
  },
  {
    id: 2,
    title: "AI-Powered Code Review Assistant",
    description: "An intelligent code review tool that uses machine learning to detect bugs, suggest improvements, and enforce coding standards.",
    category: "AI/ML",
    featured: true,
    tech: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL", "Docker"],
    role: "ML Engineer & Full Stack Developer",
    duration: "4 months",
    team: "3 developers",
    github: "https://github.com/username/code-review-assistant",
    demo: "https://code-assistant-demo.com",
    challenge: "Development teams spend significant time on code reviews, often missing common bugs and style issues. Manual review processes are inconsistent and time-consuming.",
    solution: "Built an ML model trained on millions of code samples to detect bugs, security vulnerabilities, and style violations. Integrated with GitHub/GitLab APIs for automated PR reviews.",
    architecture: "Uses BERT-based model fine-tuned on code datasets. FastAPI backend serves predictions, React frontend provides dashboard. PostgreSQL stores review history and analytics.",
    features: [
      "Real-time PR analysis",
      "Security vulnerability detection",
      "Code style enforcement",
      "Performance optimization suggestions",
      "Integration with GitHub/GitLab"
    ],
    impact: [
      "Reduced review time by 40%",
      "Detected 500+ critical bugs before production",
      "Used by 50+ development teams"
    ]
  },
  {
    id: 3,
    title: "TaskFlow - Project Management Suite",
    description: "A comprehensive project management tool with real-time collaboration, task tracking, and team analytics capabilities.",
    category: "Full Stack",
    featured: false,
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Tailwind"],
    role: "Full Stack Developer",
    duration: "3 months",
    team: "2 developers",
    github: "https://github.com/username/taskflow",
    demo: "https://taskflow-demo.com",
    challenge: "Teams struggle with scattered communication and lack of visibility into project progress. Existing tools are either too complex or missing essential features.",
    solution: "Created an intuitive project management tool with real-time updates, drag-drop interfaces, and comprehensive reporting. Focused on user experience and team collaboration.",
    architecture: "Next.js frontend with server-side rendering. Prisma ORM with PostgreSQL database. Socket.io for real-time updates. Deployed on Vercel with AWS RDS.",
    features: [
      "Real-time task updates",
      "Drag-drop kanban boards",
      "Team chat integration",
      "Time tracking",
      "Automated reporting"
    ],
    impact: [
      "Used by 20+ active teams",
      "4.8/5 rating from users",
      "Increased team productivity by 35%"
    ]
  },
  {
    id: 4,
    title: "HealthTrack Mobile App",
    description: "A cross-platform mobile app for tracking fitness activities, nutrition, and health metrics with personalized insights.",
    category: "Mobile",
    featured: false,
    tech: ["React Native", "Redux", "Node.js", "MongoDB", "HealthKit", "Google Fit"],
    role: "Mobile Developer",
    duration: "5 months",
    team: "3 developers",
    github: "https://github.com/username/healthtrack",
    demo: "https://healthtrack-demo.com",
    challenge: "People need a unified platform to track various health metrics across different devices and services.",
    solution: "Developed a cross-platform mobile app that integrates with HealthKit, Google Fit, and wearables. Provides personalized health insights and recommendations.",
    architecture: "React Native for cross-platform mobile development. Node.js backend with MongoDB. Integration with multiple health APIs.",
    features: [
      "Activity tracking",
      "Nutrition logging",
      "Sleep analysis",
      "Integration with wearables",
      "Personalized insights"
    ],
    impact: [
      "10K+ downloads",
      "4.7 star rating",
      "Featured in App Store"
    ]
  },
  {
    id: 5,
    title: "DevOps CI/CD Pipeline",
    description: "Automated CI/CD pipeline with comprehensive testing, security scanning, and multi-environment deployment strategies.",
    category: "DevOps",
    featured: true,
    tech: ["Jenkins", "GitHub Actions", "Terraform", "Ansible", "AWS", "Prometheus"],
    role: "DevOps Engineer",
    duration: "2 months",
    team: "1 developer",
    github: "https://github.com/username/devops-pipeline",
    demo: "https://devops-demo.com",
    challenge: "Manual deployment processes were error-prone and slow, taking up to 2 days for production releases.",
    solution: "Implemented automated CI/CD pipeline with GitHub Actions and Jenkins. Infrastructure as Code using Terraform. Comprehensive testing and security scanning at each stage.",
    architecture: "Multi-stage pipeline with parallel testing, security scanning, and automated deployments to staging/production. Monitoring with Prometheus and Grafana.",
    features: [
      "Automated testing",
      "Security vulnerability scanning",
      "Multi-environment deployment",
      "Infrastructure as Code",
      "Real-time monitoring"
    ],
    impact: [
      "Deployment time reduced from 2 days to 30 minutes",
      "Zero deployment failures in 6 months",
      "Automated security compliance checks"
    ]
  },
  {
    id: 6,
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for visualizing business metrics, with real-time data processing and predictive analytics.",
    category: "Full Stack",
    featured: false,
    tech: ["Vue.js", "D3.js", "Python", "FastAPI", "TimescaleDB", "Redis"],
    role: "Full Stack Developer",
    duration: "4 months",
    team: "2 developers",
    github: "https://github.com/username/analytics-dashboard",
    demo: "https://analytics-demo.com",
    challenge: "Business stakeholders needed real-time insights from complex data but existing reports were static and slow.",
    solution: "Built interactive dashboard with real-time data visualization. Implemented predictive analytics using time-series forecasting.",
    architecture: "Vue.js frontend with D3.js for visualizations. FastAPI backend with TimescaleDB for time-series data. Redis for caching.",
    features: [
      "Real-time data streaming",
      "Interactive charts",
      "Predictive analytics",
      "Custom report builder",
      "Export capabilities"
    ],
    impact: [
      "50% faster decision-making",
      "Handles 1M+ data points daily",
      "Used by executive team"
    ]
  }
];