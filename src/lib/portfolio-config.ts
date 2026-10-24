// Portfolio Configuration - Zohaib Ahmad Khan Sumbal
export const PORTFOLIO_CONFIG = {
  // Personal Information
  name: "Zohaib Ahmad Khan Sumbal",
  title: "Data Scientist & AI Engineer",
  tagline: "Building Intelligent Systems with AI & Machine Learning",
  bio: "I'm a BS Data Science graduate passionate about building intelligent systems. I specialize in generative AI, agentic workflows, and deep learning solutions. I transform complex data problems into production-ready AI applications.",
  
  // Contact Information
  email: "zohaibsumbal8@gmail.com",
  phone: "+92 306 1032323",
  location: "Muzaffargarh, Pakistan",
  
  // Social Links
  github: "https://github.com/zohaibsumbal786",
  linkedin: "https://www.linkedin.com/in/zohaib-ahmad-khan-sumbal", // Update if you have one
  portfolio: "https://zyftora-ai-solutions.pages.dev",
  whatsapp: "https://wa.me/923061032323",
  
  // Education
  education: [
    {
      degree: "Bachelor of Science in Data Science",
      institution: "MNS University of Agriculture Multan (MNSUAM)",
      location: "Multan, Pakistan",
      period: "2022 - 2026",
      gpa: "3.10/4.0",
      highlights: [
        "Focused on Machine Learning, Deep Learning, and AI Systems",
        "Research in IoT-based Non-Invasive Health Monitoring",
        "Multiple AI/ML project implementations"
      ]
    },
    {
      degree: "Higher Secondary School Certificate (FSC Pre-Engineering)",
      institution: "Sardar Kaurey Khan Public Higher Secondary School",
      location: "Muzaffargarh, Pakistan",
      period: "2020 - 2022",
      score: "70%"
    }
  ],
  
  // Skills Categories
  skills: {
    "AI & Machine Learning": [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing (NLP)",
      "Convolutional Neural Networks (CNN)",
      "Artificial Neural Networks",
      "Statistical Modeling"
    ],
    "Generative AI & LLMs": [
      "Agentic AI Systems",
      "Multi-Agent Orchestration",
      "RAG (Retrieval-Augmented Generation)",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "LLM Tool-Calling",
      "Prompt Engineering"
    ],
    "AI APIs & Platforms": [
      "OpenAI API (GPT-4)",
      "Anthropic Claude API",
      "Groq API",
      "Cursor AI",
      "Kiro AI",
      "GitHub Copilot"
    ],
    "Programming Languages": [
      "Python",
      "JavaScript/TypeScript",
      "C++",
      "Java",
      "R",
      "SQL"
    ],
    "Web Development": [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "FastAPI",
      "Tailwind CSS",
      "TypeScript"
    ],
    "Data Science Tools": [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Jupyter Notebook",
      "Power BI",
      "Tableau"
    ],
    "Databases & Backend": [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Redis",
      "Neo4j",
      "Supabase",
      "MongoDB"
    ],
    "DevOps & Cloud": [
      "Docker",
      "Git & GitHub",
      "Vercel",
      "Railway",
      "Linux",
      "Windows Server"
    ],
    "Other Tools": [
      "Celery",
      "Stripe API",
      "WhatsApp Business API",
      "MS Office Suite"
    ]
  },
  
  // Certifications
  certifications: [
    {
      title: "Foundations of Data Science",
      issuer: "Google",
      description: "Core data science concepts, statistics, programming, and data analysis"
    },
    {
      title: "Data Analysis with R Programming",
      issuer: "Google",
      description: "Master data analysis using R, including data visualization and statistical techniques"
    },
    {
      title: "Introduction to the Internet of Things and Embedded Systems",
      issuer: "University of California, Irvine",
      description: "IoT concepts, embedded systems architecture, and hardware-software integration"
    },
    {
      title: "Discover Data Analysis",
      issuer: "Microsoft",
      description: "Data exploration, analytics concepts, and data-driven decision-making"
    },
    {
      title: "Implement Error Handling with Transact-SQL",
      issuer: "Microsoft",
      description: "Error handling in SQL Server using Transact-SQL and TRY-CATCH blocks"
    },
    {
      title: "Introduction to End-to-End Analytics Using Microsoft Fabric",
      issuer: "Microsoft",
      description: "End-to-end analytics, data transformation, analysis, and visualization"
    }
  ],
  
  // Stats
  stats: [
    { number: "30+", label: "AI/ML Projects Completed" },
    { number: "6+", label: "Technical Certifications" },
    { number: "4+", label: "Years of Experience" },
    { number: "100%", label: "Open Source Contributions" }
  ]
};

// Featured Projects (manually curated from GitHub)
export const FEATURED_PROJECTS = [
  {
    title: "Meridian - AI Research Intelligence Platform",
    description: "Enterprise AI research platform with semantic paper search, LLM research copilot, interactive knowledge graph, and AI-detected contradiction analysis using React, FastAPI, Groq LLaMA-3, and PubMed data.",
    tags: ["AI", "RAG", "LLM", "React", "FastAPI", "Knowledge Graph"],
    github: "https://github.com/zohaibsumbal786/research-platform",
    category: "Generative AI",
    featured: true
  },
  {
    title: "Sentinel Grid - AI Security Operations Platform",
    description: "Enterprise SIEM security operations platform with multi-agent AI pipeline for log correlation, automated incident investigation, RAG-powered security copilot, and Neo4j attack-graph visualization.",
    tags: ["Security", "Multi-Agent AI", "RAG", "Neo4j", "FastAPI"],
    github: "https://github.com/zohaibsumbal786/sentinel-grid",
    category: "Agentic AI",
    featured: true
  },
  {
    title: "RingBack AI - WhatsApp Business Assistant",
    description: "WhatsApp-first missed-call recovery and AI receptionist SaaS that auto-engages callers, qualifies leads, and books appointments using FastAPI, Celery, Claude tool-calling agents, and WhatsApp Business API.",
    tags: ["WhatsApp Bot", "Claude AI", "FastAPI", "Celery", "SaaS"],
    github: "https://github.com/zohaibsumbal786/auto-job-client-hunting",
    category: "Agentic AI",
    featured: true
  },
  {
    title: "337-Agent Orchestration System",
    description: "Master orchestrator with web dashboard and CLI task runner, enabling automated task routing across 337 specialized AI agents for engineering, marketing, security, and product development.",
    tags: ["Multi-Agent", "Orchestration", "AI Agents", "TypeScript"],
    github: "https://github.com/zohaibsumbal786/agent-of-agents",
    category: "Agentic AI",
    featured: true
  },
  {
    title: "IoT-Based Non-Invasive Glucose Monitoring",
    description: "Research paper implementation: Multi-parameter biometric health kiosk using ESP32-S3, MAX30102, and MLX90614 sensors with context-aware glucose estimation (87% accuracy in Clarke Zone A+B).",
    tags: ["IoT", "Machine Learning", "Healthcare", "Embedded Systems"],
    github: "https://github.com/zohaibsumbal786/IOT-project-parrot-monitoring-system",
    category: "IoT & Machine Learning",
    featured: true
  },
  {
    title: "Eziline Talent Match AI Platform",
    description: "AI-powered candidate-job matching system with role-based dashboards, semantic matching via sentence-transformers and ChromaDB, and automated interview scheduling.",
    tags: ["AI Matching", "RAG", "React", "FastAPI", "PostgreSQL"],
    github: "https://github.com/zohaibsumbal786/talent-match-ai",
    category: "Machine Learning",
    featured: true
  },
  {
    title: "AI Virtual Try-On System",
    description: "Computer vision and deep learning system to digitally fit garments on human images using advanced image processing and neural networks.",
    tags: ["Computer Vision", "Deep Learning", "CNN", "Image Processing"],
    category: "Computer Vision",
    featured: true
  },
  {
    title: "Car Violation Detection System",
    description: "Automatically detect vehicle number plates and headlight violations using image processing and object detection techniques.",
    tags: ["Computer Vision", "Object Detection", "OpenCV", "YOLO"],
    category: "Computer Vision",
    featured: true
  },
  {
    title: "Fraud Detection System",
    description: "Machine learning models to identify suspicious and anomalous transaction patterns using classification algorithms and anomaly detection.",
    tags: ["Machine Learning", "Anomaly Detection", "Classification"],
    category: "Machine Learning",
    featured: true
  },
  {
    title: "Cat and Dog Classification",
    description: "Deep learning image classification using Convolutional Neural Networks (CNN) to distinguish between cats and dogs.",
    tags: ["CNN", "Deep Learning", "Image Classification", "TensorFlow"],
    github: "https://github.com/zohaibsumbal786/cat-and-dog-classification",
    category: "Deep Learning",
    featured: false
  },
  {
    title: "Flight Delay Predictor",
    description: "Machine learning system to predict flight delays using historical data, weather patterns, and airline information.",
    tags: ["Machine Learning", "Predictive Analytics", "Python"],
    github: "https://github.com/zohaibsumbal786/Flight_Delay_Predictor_Project",
    category: "Machine Learning",
    featured: false
  },
  {
    title: "AI Collection Engine",
    description: "Accounts receivable automation with personalized AI collection reminders via Claude API, invoice-aging analytics, and Stripe payment integration.",
    tags: ["Claude AI", "FastAPI", "Stripe", "Automation"],
    github: "https://github.com/zohaibsumbal786/ai-collection-engine",
    category: "AI Automation",
    featured: false
  },
  {
    title: "Shopify Store Scraper Pro",
    description: "Extract complete product catalogs from any public Shopify store with async concurrent downloads, live progress via Server-Sent Events, and CSV/JSON export.",
    tags: ["Web Scraping", "Python", "Async", "Data Extraction"],
    github: "https://github.com/zohaibsumbal786/shopify-scraper-pro",
    category: "Data Engineering",
    featured: false
  },
  {
    title: "E-Health Web Application",
    description: "Healthcare platform connecting patients and doctors with appointment scheduling, medical records, and telemedicine features.",
    tags: ["Web Development", "Healthcare", "JavaScript", "Full-Stack"],
    github: "https://github.com/zohaibsumbal786/E-health-Web-App",
    category: "Web Development",
    featured: false
  },
  {
    title: "Trend Scout Pro",
    description: "AI-powered trend analysis and market research platform for identifying emerging opportunities and market insights.",
    tags: ["AI", "Market Analysis", "TypeScript", "Data Analysis"],
    github: "https://github.com/zohaibsumbal786/trend-scout-pro",
    category: "Data Science",
    featured: false
  }
];

export const PROJECT_CATEGORIES = [
  "All Projects",
  "Generative AI",
  "Agentic AI",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "IoT & Machine Learning",
  "AI Automation",
  "Data Science",
  "Web Development"
];
