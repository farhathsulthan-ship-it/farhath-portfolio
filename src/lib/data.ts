import mediassistImg from "@/assets/projects/mediassist.png";
import aglImg from "@/assets/projects/agl.png";
import hdrImg from "@/assets/projects/hdr.png";

import pythonCert from "@/assets/certificates/python-google.jpg";
import advancedPythonCert from "@/assets/certificates/advanced-python.jpg";
import javaCert from "@/assets/certificates/java.jpg";
import blockchainCert from "@/assets/certificates/blockchain.jpg";

// =====================================================
// PERSONAL INFORMATION
// =====================================================

export const personal = {
  name: "Ahamed Farhath Sulthan",

  role: "Artificial Intelligence & Data Science Engineer",

  tagline:
    "Building Intelligent Solutions through Artificial Intelligence, Machine Learning, and Modern Software Development.",

  email: "farhathsulthan@gmail.com",

  phone: "+91 90921 15542",

  location: "Kilakarai, Ramanathapuram, Tamil Nadu",

  linkedin: "https://linkedin.com/in/farhath-sulthan-837960369",

  github: "https://github.com/farhathsulthan-ship-it",

  resume: "/Ahamed_Farhath_Sulthan_Resume.pdf",

  summary:
    "Motivated B.Tech Artificial Intelligence & Data Science student with a strong foundation in Python, Machine Learning, Data Science, and AI. Passionate about developing AI-driven solutions using modern technologies and analytical techniques — building thoughtful software that turns data into impact.",
};


// =====================================================
// TYPING ANIMATION
// =====================================================

export const typingRoles = [
  "Artificial Intelligence Engineer",
  "Machine Learning Enthusiast",
  "Data Science Student",
  "Python Developer",
  "AI Solution Builder",
  "Problem Solver",
];


// =====================================================
// EDUCATION
// =====================================================

export const education = [
  {
    degree: "B.Tech — Artificial Intelligence & Data Science",
    school: "P.A. College of Engineering and Technology, Pollachi",
    period: "2023 — 2027",
  },

  {
    degree: "Higher Secondary Certificate (HSC)",
    school:
      "Mohamed Sathak Dastagir Matric Hr. Sec. School, Ramanathapuram",
    period: "2021 — 2023",
  },

  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    school: "Pearl Matric Hr. Sec. School, Kilakarai",
    period: "2014 — 2021",
  },
];


// =====================================================
// STATISTICS
// =====================================================

export const stats = [
  {
    value: 3,
    label: "Projects",
  },

  {
    value: 1,
    label: "Internship",
  },

  {
    value: 4,
    label: "Certifications",
  },

  {
    value: 15,
    label: "Technologies",
  },
];


// =====================================================
// SKILLS
// =====================================================

export const skills = [
  {
    category: "Programming Languages",

    items: [
      "Python",
      "Java",
      "C",
      "SQL (MySQL)",
    ],
  },

  {
    category: "Artificial Intelligence",

    items: [
      "Machine Learning",
      "Neural Networks",
      "Data Science",
      "Feature Engineering",
      "Model Evaluation",
      "Data Preprocessing",
    ],
  },

  {
    category: "Web Technologies",

    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },

  {
    category: "Tools & Platforms",

    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Google Colab",
      "Jupyter Notebook",
      "Figma",
    ],
  },
];


// =====================================================
// PROJECTS
// =====================================================

export const projects = [
  {
    title: "MediAssist AI",

    image: mediassistImg,

    featured: true,

    description:
      "An AI-powered medical assistant designed to help users understand symptoms, suggest possible conditions, and provide health guidance using natural language interaction.",

    tech: [
      "Python",
      "Machine Learning",
      "NLP",
      "Streamlit",
    ],

    features: [
      "Symptom analysis with ML classifier",
      "Conversational NLP interface",
      "Health guidance & recommendations",
      "Clean, accessible UI",
    ],

    github: "https://github.com/farhathsulthan",

    demo: "#",
  },

  {
    title: "AI-Based Groundwater Level Predictor",

    image: aglImg,

    featured: false,

    description:
      "SIH Hackathon project that predicts groundwater levels using Machine Learning and environmental datasets to support sustainable water resource planning.",

    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
    ],

    features: [
      "Regression modeling",
      "Environmental data analysis",
      "Interactive visualization",
    ],

    github: "https://github.com/farhathsulthan",

    demo: "#",
  },

  {
    title: "Handwritten Digit Recognition",

    image: hdrImg,

    featured: false,

    description:
      "Deep Learning model that recognizes handwritten digits using TensorFlow and the MNIST dataset with high prediction accuracy.",

    tech: [
      "Python",
      "TensorFlow",
      "Neural Networks",
      "MNIST",
    ],

    features: [
      "Image preprocessing",
      "Deep neural network",
      "High classification accuracy",
    ],

    github: "https://github.com/farhathsulthan-ship-it",

    demo: "#",
  },
];


// =====================================================
// INTERNSHIP
// =====================================================

export const internship = {
  role: "Blockchain Security Intern",

  company: "Atozerv India Pvt. Ltd.",

  period: "May 2025 — Jun 2025",

  points: [
    "Learned fundamentals of blockchain architecture and distributed ledger technology.",

    "Explored blockchain security including cryptographic hashing, digital signatures, and consensus mechanisms.",

    "Hands-on sessions on blockchain applications and security best practices.",

    "Completed practical assignments and project activities during the internship.",
  ],
};


// =====================================================
// CERTIFICATIONS
// =====================================================

export const certifications = [
  {
    name: "Crash Course on Python",

    provider: "Google",

    date: "August 2025",

    image: pythonCert,
  },

  {
    name: "Advanced Python",

    provider: "Simplilearn",

    date: "September 2025",

    image: advancedPythonCert,
  },

  {
    name: "Java Programming for Beginners",

    provider: "Simplilearn",

    date: "4 July 2026",

    image: javaCert,
  },

  {
    name: "Blockchain Security Internship",

    provider: "Atozerv India Pvt. Ltd.",

    date: "June 2025",

    image: blockchainCert,
  },
];


// =====================================================
// NAVIGATION
// =====================================================

export const navLinks = [
  {
    href: "#home",
    label: "Home",
  },

  {
    href: "#about",
    label: "About",
  },

  {
    href: "#skills",
    label: "Skills",
  },

  {
    href: "#projects",
    label: "Projects",
  },

  {
    href: "#experience",
    label: "Experience",
  },

  {
    href: "#certifications",
    label: "Certifications",
  },

  {
    href: "#contact",
    label: "Contact",
  },
];