export const MOCK_INTERNSHIPS = [
  {
    id: 'int-1',
    title: 'Full-Stack Web Development',
    company: 'Navyan Labs',
    domain: 'Web Development',
    badge: 'Popular',
    stipend: '₹12,000 - ₹20,000 / mo',
    duration: '3 Months',
    mode: 'Remote',
    spotsLeft: 4,
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind'],
    description: 'Build enterprise-grade SaaS web applications with real-world client mentorship. Learn CI/CD pipelines, state management, and modern API architecture.',
    perks: ['Certificate of Completion', 'Offer Letter on Day 1', 'Letter of Recommendation', 'Pre-Placement Offer (PPO)'],
    batchStartDate: '15th Aug 2026',
    requirements: ['Basic JavaScript knowledge', 'HTML/CSS fundamentals', 'Enthusiasm to build real projects']
  },
  {
    id: 'int-2',
    title: 'Artificial Intelligence & ML Intern',
    company: 'Navyan AI Research',
    domain: 'AI & Data Science',
    badge: 'High Stipend',
    stipend: '₹18,000 - ₹25,000 / mo',
    duration: '6 Months',
    mode: 'Hybrid',
    spotsLeft: 2,
    skills: ['Python', 'PyTorch', 'Scikit-Learn', 'LLMs', 'OpenCV'],
    description: 'Work on cutting-edge Generative AI models, neural networks, and automated data pipelines under senior AI scientists.',
    perks: ['Research Publication Credit', 'AI Mentorship', 'High PPO Rate (94%)', 'Paid Cloud Credits'],
    batchStartDate: '20th Aug 2026',
    requirements: ['Python proficiency', 'Linear algebra & calculus basics', 'Familiarity with Pandas/NumPy']
  },
  {
    id: 'int-3',
    title: 'Cloud Engineering & DevOps',
    company: 'Navyan Infrastructure',
    domain: 'Cloud & DevOps',
    badge: 'Trending',
    stipend: '₹15,000 - ₹22,000 / mo',
    duration: '3 Months',
    mode: 'Remote',
    spotsLeft: 6,
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    description: 'Manage automated cloud infrastructure, zero-downtime deployments, microservices orchestration, and serverless architectures.',
    perks: ['AWS Certification Voucher', 'Production Cluster Access', '1-on-1 Mentorship'],
    batchStartDate: '10th Aug 2026',
    requirements: ['Linux basics', 'Understanding of networking', 'Git fundamentals']
  },
  {
    id: 'int-4',
    title: 'UI/UX Design & Product Strategy',
    company: 'Navyan Creative Studio',
    domain: 'UI/UX Design',
    badge: 'Creative',
    stipend: '₹10,000 - ₹16,000 / mo',
    duration: '3 Months',
    mode: 'Remote',
    spotsLeft: 5,
    skills: ['Figma', 'Prototyping', 'Design Systems', 'User Research', 'Wireframing'],
    description: 'Craft stunning, high-converting product interfaces and interactive design systems for tech startups and enterprise clients.',
    perks: ['Design Portfolio Showcase', 'Industry Design Review', 'PPO Opportunity'],
    batchStartDate: '18th Aug 2026',
    requirements: ['Figma familiarity', 'Keen eye for visual aesthetics', 'Understanding of user workflows']
  },
  {
    id: 'int-5',
    title: 'Cybersecurity & Ethical Hacking',
    company: 'Navyan Cyber Shield',
    domain: 'Cybersecurity',
    badge: 'High Demand',
    stipend: '₹14,000 - ₹20,000 / mo',
    duration: '4 Months',
    mode: 'Remote',
    spotsLeft: 3,
    skills: ['Vulnerability Assessment', 'Penetration Testing', 'Wireshark', 'Burp Suite', 'Network Security'],
    description: 'Perform real vulnerability scans, secure API endpoints, and assist in red-team security audits for client infrastructure.',
    perks: ['Ethical Hacker Toolkit', 'Security Clearance Certificate', 'Mentorship from CISSP Certified Pros'],
    batchStartDate: '25th Aug 2026',
    requirements: ['Networking protocols basics', 'OS fundamentals (Linux/Windows)', 'Ethical mindset']
  },
  {
    id: 'int-6',
    title: 'Mobile App Development (Flutter/React Native)',
    company: 'Navyan Mobile',
    domain: 'Mobile Dev',
    badge: 'New',
    stipend: '₹12,000 - ₹18,000 / mo',
    duration: '3 Months',
    mode: 'Remote',
    spotsLeft: 7,
    skills: ['React Native', 'Flutter', 'Dart', 'Firebase', 'REST APIs'],
    description: 'Engineer cross-platform iOS and Android applications with sleek animations and offline-first capabilities.',
    perks: ['Play Store App Deployment', 'Device Lab Access', 'Direct PPO Route'],
    batchStartDate: '12th Aug 2026',
    requirements: ['JavaScript or Dart knowledge', 'Mobile app UI basics']
  }
];

export const MOCK_SERVICES = [
  {
    id: 'srv-1',
    title: 'Custom Web & Enterprise SaaS',
    icon: 'Code2',
    tagline: 'High-performance, scalable web apps built with modern React, Next.js & Cloud backend.',
    features: ['Custom Frontend Architecture', 'Scalable Microservices API', 'Real-time Analytics Dashboard', '99.99% Uptime Guarantee'],
    basePrice: 45000,
    estimatedDays: 14,
    techStack: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Tailwind']
  },
  {
    id: 'srv-2',
    title: 'iOS & Android App Engineering',
    icon: 'Smartphone',
    tagline: 'Native performance cross-platform mobile apps published directly to App Store & Play Store.',
    features: ['Fluid UI Micro-animations', 'Offline Sync & Push Notifications', 'Secure Payment Gateway', 'App Store Optimization'],
    basePrice: 60000,
    estimatedDays: 21,
    techStack: ['Flutter', 'React Native', 'Firebase', 'Swift', 'Kotlin']
  },
  {
    id: 'srv-3',
    title: 'AI Integration & Automation',
    icon: 'Sparkles',
    tagline: 'Empower your business with custom LLMs, smart chatbots, predictive analytics & OCR engines.',
    features: ['Custom Fine-tuned LLM Agents', 'Automated Workflow Pipelines', 'Computer Vision & Document OCR', 'Data Analytics Engine'],
    basePrice: 55000,
    estimatedDays: 18,
    techStack: ['Python', 'OpenAI API', 'LangChain', 'FastAPI', 'Pinecone']
  },
  {
    id: 'srv-4',
    title: 'Cloud Migration & Infrastructure',
    icon: 'Cloud',
    tagline: 'Transform legacy systems into cloud-native AWS / GCP infrastructure with Kubernetes.',
    features: ['Zero-downtime Cloud Migration', 'Kubernetes Orchestration', 'Auto-scaling & Disaster Recovery', 'Cost Optimization (-40%)'],
    basePrice: 50000,
    estimatedDays: 15,
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Datadog']
  }
];

export const MOCK_COURSES = [
  {
    id: 'crs-1',
    title: 'Mastering Modern Full-Stack Development 2026',
    instructor: 'Aarav Sharma (Ex-Google Senior Engineer)',
    rating: 4.9,
    reviewsCount: 1420,
    enrolledStudents: 3850,
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    price: '₹4,999',
    originalPrice: '₹14,999',
    badge: 'Bestseller',
    modules: [
      { name: 'Module 1: Modern JavaScript & ESNext Concepts', lessons: '8 Lessons • 4h 30m' },
      { name: 'Module 2: React 18, Hooks, State & Component Design', lessons: '12 Lessons • 8h 15m' },
      { name: 'Module 3: Server Architecture with Node.js, Express & Mongo', lessons: '10 Lessons • 6h 45m' },
      { name: 'Module 4: Full Stack Integration, Authentication & Deployment', lessons: '9 Lessons • 5h 20m' }
    ]
  },
  {
    id: 'crs-2',
    title: 'Practical Generative AI & LLM Engineering',
    instructor: 'Dr. Meera Nair (AI Scientist & Author)',
    rating: 4.95,
    reviewsCount: 980,
    enrolledStudents: 2410,
    duration: '8 Weeks',
    level: 'Intermediate',
    price: '₹5,499',
    originalPrice: '₹16,999',
    badge: 'Highest Rated',
    modules: [
      { name: 'Module 1: Foundations of Machine Learning & Neural Nets', lessons: '6 Lessons • 4h 00m' },
      { name: 'Module 2: Building AI Apps with LangChain & Vector DBs', lessons: '10 Lessons • 7h 30m' },
      { name: 'Module 3: Fine-Tuning Open Source LLMs (Llama, Mistral)', lessons: '8 Lessons • 6h 10m' },
      { name: 'Module 4: Deploying Scalable AI Services in Production', lessons: '7 Lessons • 5h 00m' }
    ]
  },
  {
    id: 'crs-3',
    title: 'DevOps & AWS Cloud Certification Bootcamp',
    instructor: 'Rohan Verma (AWS Solutions Architect)',
    rating: 4.85,
    reviewsCount: 860,
    enrolledStudents: 1950,
    duration: '10 Weeks',
    level: 'All Levels',
    price: '₹4,499',
    originalPrice: '₹12,999',
    badge: 'Career Boost',
    modules: [
      { name: 'Module 1: Docker Containers & Image Optimization', lessons: '7 Lessons • 5h 15m' },
      { name: 'Module 2: Kubernetes Cluster Setup & Deployment', lessons: '9 Lessons • 7h 00m' },
      { name: 'Module 3: Infrastructure as Code with Terraform', lessons: '8 Lessons • 5h 45m' },
      { name: 'Module 4: CI/CD Pipelines with GitHub Actions & AWS', lessons: '8 Lessons • 6h 30m' }
    ]
  }
];

export const MOCK_JOBS = [
  {
    id: 'job-1',
    title: 'Junior Full Stack Engineer',
    company: 'Navyan Technologies',
    location: 'Bengaluru / Remote',
    experience: '0 - 2 Years',
    salary: '₹6.5 - ₹10.0 LPA',
    type: 'Full Time',
    postedTime: '2 days ago',
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    description: 'We are hiring driven Junior Full Stack Engineers to build cloud products. Fast-track promotion path and international team exposure.'
  },
  {
    id: 'job-2',
    title: 'AI / Machine Learning Engineer',
    company: 'Navyan AI Labs',
    location: 'Hyderabad / Hybrid',
    experience: '1 - 3 Years',
    salary: '₹12.0 - ₹18.0 LPA',
    type: 'Full Time',
    postedTime: '1 day ago',
    skills: ['Python', 'PyTorch', 'FastAPI', 'LangChain'],
    description: 'Develop intelligent automation products and custom LLM microservices for our fortune 500 partners.'
  },
  {
    id: 'job-3',
    title: 'Associate Cloud Security Specialist',
    company: 'Navyan Shield Services',
    location: 'Pune / Remote',
    experience: '0 - 1 Years (Freshers Welcome)',
    salary: '₹5.5 - ₹8.5 LPA',
    type: 'Full Time',
    postedTime: '3 days ago',
    skills: ['AWS', 'Linux', 'Python', 'SOC Analytics'],
    description: 'Monitor cloud security postures, perform automated vulnerability remediation, and assist in SOC compliance operations.'
  }
];

export const MOCK_VERIFICATION_DATABASE = {
  certificates: {
    'NAV-2026-8941': {
      id: 'NAV-2026-8941',
      studentName: 'Ananya Roy',
      domain: 'Full-Stack Web Development Internship',
      issueDate: 'July 15, 2026',
      validity: 'Lifetime Authentic',
      grade: 'Distinction (A+)',
      mentor: 'Vikramaditya Sharma',
      certificateUrl: '#',
      verificationHash: '0x8f9b2a7d4e1c6b3a0f9e8d7c6b5a4f3e'
    },
    'NAV-2026-9022': {
      id: 'NAV-2026-9022',
      studentName: 'Rahul Deshmukh',
      domain: 'AI & Data Science Research Internship',
      issueDate: 'July 28, 2026',
      validity: 'Lifetime Authentic',
      grade: 'Excellence (S Tier)',
      mentor: 'Dr. Meera Nair',
      certificateUrl: '#',
      verificationHash: '0x3c7e9a1b5f2d4e8c0a9b8c7d6e5f4a3b'
    }
  },
  offerLetters: {
    'NAV-OL-4412': {
      id: 'NAV-OL-4412',
      studentName: 'Siddharth Patel',
      role: 'Full-Stack Developer Intern',
      department: 'Engineering & Product Development',
      stipend: '₹18,000 / month',
      startDate: 'August 10, 2026',
      duration: '6 Months',
      status: 'Active & Verified',
      hrContact: 'careers@navyan.tech'
    },
    'NAV-OL-4500': {
      id: 'NAV-OL-4500',
      studentName: 'Priya Sundaram',
      role: 'UI/UX Design Intern',
      department: 'Product Design',
      stipend: '₹15,000 / month',
      startDate: 'August 15, 2026',
      duration: '3 Months',
      status: 'Active & Verified',
      hrContact: 'careers@navyan.tech'
    }
  }
};

export const MOCK_TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Kavya Krishnan',
    role: 'SDE-1 at Flipkart (Ex Navyan Intern)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    quote: 'The hands-on internship at Navyan gave me real production experience with React and Node microservices. It directly helped me crack my SDE interview!',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Rohan Gupta',
    role: 'AI Engineer at TechCorp',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    quote: 'Navyan provided genuine client mentorship and instant certificate verification. The PPO path is 100% real and transparent.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Sneha Kulkarni',
    role: 'Product Designer at Razorpay',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    quote: 'The design systems and Figma projects I built during my Navyan UX internship became the centerpiece of my portfolio.',
    rating: 5
  }
];

export const MOCK_USER_PROFILE = {
  name: 'Devin Sharma',
  email: 'devin.sharma@example.com',
  role: 'Student / Intern',
  joinedDate: 'June 2026',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
  activeInternship: {
    title: 'Full-Stack Web Development',
    progress: 75,
    mentor: 'Vikramaditya S.',
    nextMilestone: 'Deploy Project #3 to Vercel/AWS',
    daysRemaining: 18
  },
  certificatesCount: 2,
  referralCode: 'NAVYAN-DEVIN2026',
  referralEarnings: '₹4,500',
  referralCount: 3,
  submissions: [
    { title: 'Project 1: React Dashboard Component', status: 'Approved', score: '98/100', date: 'Jul 10' },
    { title: 'Project 2: RESTful API Auth Middleware', status: 'Approved', score: '95/100', date: 'Jul 22' },
    { title: 'Project 3: Full Stack E-Commerce Engine', status: 'Under Review', score: 'Pending', date: 'Aug 01' }
  ]
};
