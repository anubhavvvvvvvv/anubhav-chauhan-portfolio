import { Certification, EducationItem, Achievement } from "@/types";

export const education: EducationItem[] = [
  {
    course: "B.Tech, Mathematics & Computing (MAC)",
    institution: "Netaji Subhas University of Technology",
    year: "2023 – 2027",
    metric: "6.92",
    metricLabel: "CGPA",
  },
  {
    course: "CBSE Board (Class XII)",
    institution: "Khaitan Public School",
    year: "2023",
    metric: "75%",
    metricLabel: "Score",
  },
  {
    course: "CBSE Board (Class X)",
    institution: "Khaitan Public School",
    year: "2021",
    metric: "94%",
    metricLabel: "Score",
  },
];

export const certifications: Certification[] = [
  {
    title: "Programming in Java",
    issuer: "NPTEL Elite Certification",
    score: "91 / 100",
  },
  {
    title: "Psychology of Learning",
    issuer: "NPTEL Elite Certification",
    score: "97 / 100",
  },
];

export const achievements: Achievement[] = [
  {
    title: "HackTU 6.0 Finalist",
    description:
      "Finalist at Thapar Institute of Engineering & Technology's flagship hackathon with 'Under Water Heroes' — an AI-enabled underwater pollution monitoring system.",
    url: "https://github.com/anubhavvvvvvvv",
  },
  {
    title: "Deepfake Detection on NVIDIA DGX A100",
    description:
      "Trained a PyTorch deepfake detection model on terabyte-scale datasets using an NVIDIA DGX A100 GPU, identifying compressed AI-upscaled 'ShallowReals.'",
  },
  {
    title: "250+ LeetCode DSA Problems Solved",
    description:
      "Covering Arrays, Dynamic Programming, Greedy Algorithms, Linked Lists, SQL, and Binary Search.",
  },
];

export const experience = {
  role: "Research Intern",
  organization: "Netaji Subhas University of Technology (NSUT), Delhi",
  duration: "June 2025 – Present",
  points: [
    "Designed with my team ,a cyber-physical hydroponics monitoring system integrating deep learning with quantum computing (Qiskit) for continuous plant health forecasting.",
    "Benchmarked quantum optimization approaches against classical hydroponic models using Python, PyTorch, Qiskit, GRU, VQE, SPSA, and Simulated Annealing.",
  ],
};

export const positionOfResponsibility = {
  role: "Logistics Head",
  organization: "Student Council — Extension & Field Outreach, NSUT",
  duration: "2025 – Present",
  points: [
    "Coordinated logistics for 6+ university events, managing volunteer operations, venue setup, scheduling, and stakeholder communication.",
  ],
};

export const contact = {
  name: "Anubhav Chauhan",
  role: "Data & Product Analyst",
  email: "anubhav.chauhan.ug23@nsut.ac.in",
  linkedin: "https://www.linkedin.com/in/anubhav-chauhan-283052266/",
  github: "https://github.com/anubhavvvvvvvv",
  location: "Delhi, India",
  resumeUrl: "/resume/Anubhav_Chauhan_Resume.pdf",
};

export const aboutMe = {
  paragraphs: [
    "I'm a third-year B.Tech student at Netaji Subhas University of Technology (NSUT), working at the intersection of data, AI, and business problem-solving. My focus is Product & Data Analytics — using SQL, Python, and BI tools to turn raw, messy data into insights that actually shape product and business decisions.",
    "What draws me to this work is the \u201Cwhy\u201D behind the numbers. It's easy to report a metric; it's harder \u2014 and more valuable \u2014 to explain what's driving it and what to do next. That mindset has taken me from vendor performance analysis (uncovering $4.35M in loss-making sales) to a Tableau BI pipeline processing \u20B9986M+ in revenue, to a product case study on transparent checkout design for a quick-commerce app.",
    "Across my projects, I've worked with data at a scale that mirrors real business stakes \u2014 analyzing 520 brands and uncovering $4.35M in loss-making sales, building a BI pipeline behind \u20B9986M+ in revenue across 14 markets, and running 30+ SQL queries against multi-table procurement datasets. I'm currently looking for a Data Analyst internship where I can bring that same rigor to real business problems, with long-term goals of growing into a Product Analyst or Analytics Engineer role.",
  ],
  targetCompanies: ["Microsoft", "Amazon", "Adobe", "Zomato", "Blinkit", "Flipkart", "Swiggy"],
};