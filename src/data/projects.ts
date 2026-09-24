export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  id: string
  number: string
  title: string
  category: string
  description: string
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  metrics?: ProjectMetric[]
  previewBlocked?: boolean
}

export const profileContact: {
  github?: string
  linkedin?: string
  email?: string
} = {
  github: 'https://github.com/raza-abidii',
  linkedin: 'https://www.linkedin.com/in/raza-abidi-53675020b/',
  email: 'mailto:razaabidi030@gmail.com',
}

export const siteMetadata = {
  title: 'Raza Abidi — Software Engineer',
  description:
    'Portfolio of Raza Abidi — Software Engineer focused on full-stack development, backend systems, AI/ML and digital products.',
}

export const projects: Project[] = [
  {
    id: 'cupnote',
    number: '00',
    title: 'CUPNOTE',
    category: 'SOCIAL PLATFORM / COFFEE',
    description:
      'Cupnote is a coffee-focused social platform designed as a “Letterboxd for coffee,” combining coffee journaling, café discovery, tasting notes, recipe tracking and community-led discovery in one experience.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    features: [
      'Coffee logging and personal coffee history',
      'Bean and coffee tracking',
      'Brewing recipe documentation',
      'Tasting notes and flavor profiles',
      'Café discovery and social sharing',
    ],
    liveUrl: 'https://www.xn--cupnot-gva.com/',
    githubUrl: undefined,
  },
  {
    id: 'veedentes',
    number: '01',
    title: 'VEEDENTES',
    category: 'WEB APPLICATION / HEALTHCARE',
    description:
      'Healthcare-focused product experience designed to improve patient and operational workflows through accessible digital interfaces and structured systems.',
    technologies: ['React', 'TypeScript', 'Healthcare UX', 'Web App'],
    features: [
      'Healthcare workflow experience',
      'Responsive application design',
      'Access-focused user journeys',
      'Product-ready frontend architecture',
    ],
    liveUrl: 'https://veedentes.com/',
    githubUrl: undefined,
  },
  {
    id: 'result-tracker',
    number: '02',
    title: 'RESULT TRACKER',
    category: 'WEB APPLICATION / EDUCATION',
    description:
      'Education-focused web platform for tracking academic performance, summarizing results and making student progress easier to understand.',
    technologies: ['React', 'Web App', 'Education', 'Responsive UI'],
    features: [
      'Result overview dashboards',
      'Student progress tracking',
      'Clean information hierarchy',
      'Responsive reporting views',
    ],
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: 'shakumaku',
    number: '03',
    title: 'SHAKUMAKU',
    category: 'E-COMMERCE / PRODUCT',
    description:
      'Polished storefront experience centered on product browsing, discovery and conversion-focused UI for a modern e-commerce presence.',
    technologies: ['React', 'TypeScript', 'E-commerce', 'Responsive UI'],
    features: [
      'Product browsing experience',
      'Responsive storefront interface',
      'Conversion-friendly product presentation',
      'Modern commerce UX',
    ],
    liveUrl: 'https://www.shakumaku.com/',
    githubUrl: undefined,
  },
  {
    id: 'redflow-foundation',
    number: '04',
    title: 'REDFLOW FOUNDATION',
    category: 'NON-PROFIT / WEB PLATFORM',
    description:
      'Real-world client project delivering a reliable web platform for public-facing information, outreach and community engagement.',
    technologies: ['Web Platform', 'Client Work', 'Responsive UI', 'Frontend'],
    features: [
      'Client-focused public website',
      'Content-first experience',
      'Responsive information architecture',
      'Clean product execution',
    ],
    liveUrl: 'https://www.redflowfoundation.com/',
    githubUrl: undefined,
  },
  {
    id: 'employee-management-system',
    number: '05',
    title: 'EMPLOYEE MANAGEMENT SYSTEM',
    category: 'FULL-STACK / ENTERPRISE SOFTWARE',
    description:
      'Developed and maintained an Employee Management System for employee records, attendance, leave, departments and HR workflows, working across responsive frontend interfaces, backend APIs, database operations and role-based functionality.',
    technologies: ['React', 'ASP.NET Core', 'SQL Server', 'REST APIs'],
    features: [
      'Employee record management',
      'Attendance and leave workflows',
      'Department and HR operations',
      'Role-based functionality and database logic',
    ],
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: 'credit-card-fraud-detection',
    number: '06',
    title: 'CREDIT CARD FRAUD DETECTION',
    category: 'AI / MACHINE LEARNING',
    description:
      'Machine learning workflow to detect fraudulent transactions using classification models and class imbalance handling techniques.',
    technologies: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'SMOTE', 'Logistic Regression', 'Random Forest', 'XGBoost', 'Streamlit'],
    features: [
      'Imbalanced class handling with SMOTE',
      'Model comparison and evaluation',
      'Python-based ML pipeline',
      'Interactive Streamlit interface',
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    metrics: [{ label: 'F1-score', value: '0.94' }],
  },
  {
    id: 'e-commerce-demand-forecasting',
    number: '07',
    title: 'E-COMMERCE DEMAND FORECASTING',
    category: 'DATA SCIENCE / FORECASTING',
    description:
      'Forecasting model for e-commerce demand patterns using time-series analysis and model evaluation across multiple performance indicators.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Forecasting', 'Machine Learning'],
    features: [
      'Demand prediction workflow',
      'Time-series modeling approach',
      'Quantitative model assessment',
      'Operational forecasting insight',
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    metrics: [
      { label: 'Forecast Accuracy', value: '61.42%' },
      { label: 'R²', value: '0.61' },
      { label: 'RMSE', value: '0.94' },
      { label: 'MAE', value: '0.79' },
      { label: 'MAPE', value: '38.58%' },
    ],
  },
  {
    id: 'plant-disease-detection-system',
    number: '08',
    title: 'PLANT DISEASE DETECTION SYSTEM',
    category: 'AI / COMPUTER VISION',
    description:
      'Computer vision project for image-based plant disease classification using convolutional neural networks and an interactive modeling interface.',
    technologies: ['Python', 'CNN', 'Computer Vision', 'Streamlit'],
    features: [
      'Image classification pipeline',
      'Plant disease detection',
      'CNN-based model workflow',
      'Streamlit user interface',
    ],
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: 'expense-tracker',
    number: '09',
    title: 'EXPENSE TRACKER',
    category: 'WEB APPLICATION',
    description:
      'Expense management workflow for tracking spending, summarizing categories and visualizing financial activity with a lightweight data-driven interface.',
    technologies: ['Streamlit', 'SQLAlchemy', 'SQLite', 'Data Visualization'],
    features: [
      'Expense management workflow',
      'SQLite-backed persistence',
      'Data visualization for spending',
      'Simple operational dashboard',
    ],
    liveUrl: undefined,
    githubUrl: undefined,
  },
]

export const experienceEntries = [
  {
    company: 'SFON Technologies',
    role: 'Full Stack Developer Intern',
    dates: 'Dates not specified',
    status: 'Former',
    description:
      'Developed and maintained an Employee Management System (EMS) for employee records, attendance, leave, departments, and HR workflows, working across responsive frontend interfaces, backend APIs, database operations, and role-based functionality.',
  },
]

export const skillGroups = [
  {
    title: 'BACKEND & SYSTEMS',
    skills: ['Python', 'C#', 'ASP.NET Core', 'FastAPI', 'Node.js', 'REST APIs', 'SQL', 'Entity Framework Core'],
  },
  {
    title: 'AI / MACHINE LEARNING',
    skills: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'Keras', 'XGBoost', 'Random Forest', 'Machine Learning', 'Computer Vision'],
  },
  {
    title: 'WEB DEVELOPMENT',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'DATABASES',
    skills: ['PostgreSQL', 'SQL Server', 'SQLite', 'Supabase'],
  },
  {
    title: 'TOOLS / CLOUD',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Hostinger', 'Azure', 'Google Colab'],
  },
]

export const aboutContent = [
  'Software Engineering student and Full-Stack Developer focused on building reliable web applications, backend systems, AI/ML solutions and digital products.',
  'I enjoy building practical software that connects clear product thinking with solid engineering fundamentals. My work spans frontend experiences, backend services, data-driven systems and machine learning workflows.',
]

export const heroSummary = {
  label: 'SOFTWARE ENGINEER / FULL-STACK / AI',
  title: 'I build software that solves real problems.',
  description:
    'Software Engineering student and Full-Stack Developer focused on building reliable web applications, backend systems, AI/ML solutions and digital products.',
  status: 'OPEN TO OPPORTUNITIES',
  location: 'Hyderabad, India',
  focus: 'Full-Stack Systems',
  exploring: 'AI/ML · Automation · Web3',
  stack: 'React · TypeScript · Python · .NET',
}
