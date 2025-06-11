export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  category: string;
  problem: string;
  solution: string;
  results: string;
}

export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  offerLetter?: string;
  completionCertificate?: string;
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  cgpa: number;
  percentage?: number;
  description: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string;
  proof?: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number; // 0-100
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  description: string;
  credential?: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Adharsh",
  about: "B.Tech in Electronics and Communication Engineering @GCET'25 || Python Programmer || AI Animation Creator || Web Developer",
  location: "Hyderabad, INDIA",
  email: "adharshgoud1432@gmail.com",
  github: "https://github.com/Adharsh-goud",
  linkedin: "https://www.linkedin.com/in/adharsh-goud-509790351/",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Browser Automation Using AI Agent",
    description: "An AI-powered system enabling browser automation through natural language using LLMs, LangChain, and Playwright.",
    image: "public/images/AI_agent.png",
    technologies: ["Python", "LangChain", "Playwright", "GPT-4o", "Gemini", "Gradio"],
    github: "https://github.com/Adharsh-goud/AI-Agent-project", 
    demo: "https://drive.google.com/file/d/1I9ifqMJyT93DKRjfX7xN8eCyOH6pyORR/view?usp=drive_link", 
    category: "AI & Automation",
    problem: "Traditional web automation tools require scripting knowledge and struggle with dynamic websites and user-specific customization.",
    solution: "Built a no-code AI automation system that uses natural language, intelligent planning, and real-time browser control with LLMs and Playwright.",
    results: "Reduced manual browser effort by 70%, improved automation success rate on dynamic pages by 60%, and made automation accessible to non-programmers."
  },
 
  {
    id: 2,
    title: "Bank Loan Eligibility  Using Machine Learning",
    description: "To predict loan eligibility by analyzing applicant data such as demographics, income, credit score, and employment details. It aims to assist financial institutions in making accurate and informed loan approval decisions while minimizing default risk.",
    image: "public/images/loan predictor.jpg", 
    technologies: ["Python", "HTML", "CSS", "django", "Kaggle",],
    github: "https://github.com/Adharsh-goud/Bank-loan", 
    demo: "https://drive.google.com/file/d/1Zg5J3-zr7_rAjqYZe9vYp86HaQRlTPfT/view?usp=drive_link", 
    category: "ML & Loan Eligibility",
    problem: "Banks struggle to accurately assess whether a loan applicant is likely to repay the loan, which can lead to financial losses from defaults. There is a need for a reliable, data-driven system to improve loan approval decisions.",
    solution: "Developed a machine learning model to predict loan eligibility and help financial institutions make accurate, risk-aware lending decisions.",
    results: "The machine learning model accurately predicted loan eligibility. Among the tested algorithms, Random Forest outperformed the others, offering high accuracy and robust classification performance."
  },
  {
    id: 3,
    title: "PN Sequence for Spectral Widening",
    description: "PN sequences are binary signals that spread a communication signal over a wider bandwidth. This spectral widening improves resistance to interference and is commonly used in spread spectrum systems like CDMA.",
    image: "public/images/pic.png", 
    technologies: ["Scilab", "Digital Signal Processing", "Correlation Analysis", "PN Sequence Generation", "Gold Codes", "Walsh-Hadamard Codes", "Spread Spectrum Communication"],
    github: "https://github.com/Adharsh-goud/PN-SEQUENCES-FOR-SPECTRAL-SPREADING.git", 
    demo: "https://drive.google.com/file/d/1T2yIHx6XJxwXUJSAXh04cPFX5e1BqEdy/view?usp=drive_link", 
    category: "Secure Communication Systems",
    problem: "In modern wireless communication systems, narrowband signals are highly vulnerable to interference, jamming, and eavesdropping. There is a need for techniques that can enhance signal security and robustness. The challenge is to implement a method that can effectively spread the signal spectrum, making it less susceptible to such threats while maintaining reliable data transmission.",
    solution: "he use of Pseudo-Noise (PN) sequences provides an effective solution through spread spectrum modulation. By modulating the original signal with a high-rate PN sequence, the signal's bandwidth is widened significantly. This process makes the transmission more resistant to narrowband interference and harder to intercept or jam. At the receiver end, the same PN sequence is used to de-spread the signal and recover the original data, ensuring secure and robust communication.",
    results: "The implementation of PN sequence-based spread spectrum successfully increased the bandwidth of the original signal, making it less susceptible to noise and interference. Simulations showed improved signal-to-noise ratio (SNR) and reliable data recovery at the receiver end using the matched PN sequence for de-spreading. The system demonstrated enhanced security and robustness compared to conventional narrowband transmission."
  },  
  {
    id: 4,
    title: "Number-Plate-Vision-App",
    description: "A web-based application built with Streamlit that uses computer vision and OCR to detect and extract text from vehicle number plates. This app is ideal for vehicle identification, parking management, and security monitoring.",
    image: "public/images/number-plate-vision-app.png", 
    technologies: ["Streamlit", "OpenCV", "Tesseract OCR", "Python"],
    github: "https://github.com/Adharsh-goud/Number-Plate-Vision-App", 
    demo: "https://drive.google.com/file/d/1GaLpniJis0H1hMTBaokPzXTnBR2Cqb_C/view?usp=drive_link", 
    category: "Computer Vision & Web Applications",
    problem: "Manual vehicle identification and parking management can be time-consuming and prone to errors, especially in high-traffic areas.",
    solution: "Developed a web-based app that automates the detection and extraction of license plate numbers from vehicle images using computer vision and OCR, reducing errors and improving efficiency in vehicle identification and parking management.",
    results: "Improved vehicle identification accuracy by 85%, automated parking management tasks, and provided a scalable solution for security monitoring."
  },
  {
    id: 5,
    title: "Netflix Clone Website",
    description: "A web page replicating Netflix's homepage, featuring sections like unlimited streaming, offline downloads, kid-friendly profiles, and a FAQ section. Built with HTML and CSS, it includes interactive layout elements and modern styling for various devices.",
    image: "public/images/netflixclone.jpeg", 
    technologies: ["HTML", "CSS"],
    github: "https://github.com/Adharsh-goud/netflix", 
    demo: "https://drive.google.com/file/d/1ty8-kYy-9ETutjBNIA-oPcigs89ZL340/view?usp=drive_link", 
    category: "Computer Vision & Web Applications",
    problem: "Users looking to explore Netflix's features and offerings often face limited access without signing in, and developers need a clear, engaging interface to demonstrate such platforms. There is a need for a responsive, visually appealing Netflix-like website that showcases its core features and functionality without requiring backend integration.",
    solution: "Developed a static Netflix clone website using HTML and CSS that mimics the real platform look and feel. The site includes sections like feature highlights, email signup, FAQs, and a user-friendly layout—providing an engaging front-end experience without needing backend support.",
    results: "The Netflix clone website successfully replicates the core design and layout of the original platform, offering a seamless and responsive user interface. It effectively showcases key features like multi-device support, offline viewing, and kid-friendly profiles, demonstrating strong front-end development skills.."
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 1,
    company: "Academor",
    position: "Web Development Intern",
    duration: "May 2023 - Jun 2023",
    description: [
      "Developed a fully responsive and mobile-friendly web application using only HTML, CSS, and JavaScript.",
      "Created an interactive quiz with 5+ questions to help Intermediate students decide between B.Tech or Degree paths based on their interests.",
      "Displayed relevant branch options dynamically (e.g., CSE, ECE, B.Com, BA) based on quiz results.",
      "Populated a list of top colleges for each selected path to guide student decisions.",
      "Implemented a contact/feedback form to collect user input.",
      "Designed a clean, user-friendly interface with accessibility and responsiveness in mind (mobile, tablet, desktop).",
      "Built without using any frameworks, showcasing core frontend development skills."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Chrome DevTools", "VS Code"],
    completionCertificate: "https://drive.google.com/file/d/1l1n_wI5ipSHWby-dmeQy-n8PVI8FeD_e/view?usp=drive_link"
  },
];

export const education: EducationItem[] = [
  {
    id: 1,
    institution: "Geethanjali College of Engineering and Technology | Hyderabad,Telanagana",
    degree: "Bachelor of Engineering",
    duration: "2021 - 2025",
    cgpa: 7.0,
    percentage:70,
    description: "Electronics and Communication Engineering",
},
  {
    id: 2,
    institution: "Sri Chaitanya Junior Kalasala, | ECIL,Hyderabad,Telanagana",
    degree: "Intermediate",
    duration: "2019 - 2021",
    cgpa:8.8,
    percentage:88.8,
    description: "Mathematics, Physics, and Chemistry (MPC) ",
},
];

export const skills: Skill[] = [
  { id: 1, name: "JavaScript", category: "Frontend", level: 95 },
  { id: 2, name: "React", category: "Frontend", level: 90 },
  { id: 3, name: "TypeScript", category: "Frontend", level: 85 },
  { id: 4, name: "HTML/CSS", category: "Frontend", level: 95 },
  { id: 5, name: "Node.js", category: "Backend", level: 80 },
  { id: 6, name: "Python", category: "Backend", level: 75 },
  { id: 7, name: "MongoDB", category: "Database", level: 70 },
  { id: 8, name: "SQL", category: "Database", level: 75 },
  { id: 9, name: "Git/GitHub", category: "Tools", level: 90 },
  { id: 10, name: "Docker", category: "DevOps", level: 65 },
  { id: 11, name: "AWS", category: "Cloud", level: 60 },
  { id: 12, name: "TensorFlow", category: "AI/ML", level: 70 },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Python Course Completion Certificate",
    issuer: "scaler",
    date: "May 03, 2025",
    image: "public/certification/python.jpg",
    description: "This certificate recognizes the successful completion of the Python Course for Beginners With Certification: Mastering the Essentials, provided by Scaler Topics. The course covered essential Python programming concepts through 121 video tutorials, 16 modules, and 10 hands-on challenges.",
    credential: "https://drive.google.com/file/d/1d8TF60MuJVFJSpCRDbT-fTyvbThmz3Va/view?usp=drive_link",
  }, 
  {
    id: 2,
    title: "HTML & CSS Crash Course Completion Certificate",
    issuer: " Coursera, in partnership with Scrimba",
    date: "May 04, 2025",
    image: "public/certification/htmlcss.jpg",
    description: "The course provided in-depth knowledge of core web development principles, including structuring content with HTML and designing visually engaging pages with CSS. It included hands-on projects and practical exercises to strengthen foundational front-end skills.",
    credential: "https://drive.google.com/file/d/19cH2qwlAMbqSLwFajB6uIKO_iCRP1BYG/view?usp=drive_link", 
  },  
  {
    id: 3,
    title: "Git Training Completion Certificate",
    issuer: "Simpli Learn by Skillup",
    date: "May 2025",
    image: "public/certification/git.jpg", 
    description: "Demonstrating a strong understanding of version control concepts, including repository management, branching, merging, and collaboration using Git. The certificate validates hands-on experience with essential Git workflows used in modern software development.",
    credential: "https://drive.google.com/file/d/1Kl3WEMsFB3gLGPP2LCc1gkSElzvOJ2_h/view?usp=drive_link",
  },

];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/Adharsh-goud",
    icon: "Github",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adharsh-goud-509790351/",
    icon: "Linkedin",
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:adharsh@example.com",
    icon: "Mail",
  },
];
