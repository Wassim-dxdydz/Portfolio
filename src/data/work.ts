import { WorkItem } from "@/types/work";


export const workItems: WorkItem[] = [
  {
    id: "finoutsource",
    title: "Banking workflow Platform",
    description:
      "Full-stack banking platform for submission, tracking, OCR extraction and risk scoring of financing requests. Includes secured REST APIs (JWT, RBAC), KPI dashboards, workflow automation, document management, and credit scoring system.",
    start: "2024-09",
    end: "2025-07",
    images: [
      { src: "/work/Fin1.png", alt: "FinOutsource dashboard" },
      { src: "/work/Fin2.png", alt: "FinOutsource workflow" },
      { src: "/work/Fin3.png", alt: "FinOutsource OCR module" },
    ],
    stack: ["React", "Django", "PostgreSQL"],
    tools: ["Docker", "JWT", "RBAC", "OpenCV", "pytesseract", "CI/CD", "Pytest", "SonarQube"],
    github: { visibility: "private" },
  },


  {
    id: "airport-si",
    title: "Airport Information System",
    description:
      "Three-tier web application for airport management built with Kotlin (Spring Boot), PostgreSQL and Next.js. Developed with incremental iterations and continuous code quality monitoring using SonarQube.",
    start: "2025-01",
    end: "2025-12",
    images: [
      { src: "/work/Airport1.png", alt: "Airport Landing page" },
      { src: "/work/Airport2.png", alt: "Airport flight management" },
      { src: "/work/Airport3.png", alt: "Airport aircraft management" },
    ],
    stack: ["Kotlin", "Spring Boot", "PostgreSQL", "Next.js"],
    tools: ["Docker", "SonarQube", "CI/CD", "jUnit"],
    github: { visibility: "public", url: "https://github.com/Wassim-dxdydz/Airport" },
  },


  {
    id: "warehouse-management",
    title: "Warehouse Management System",
    description:
      "Stock management web application with CRUD operations, real-time quantity updates, threshold alerts, reporting and interactive dashboard.",
    start: "2024-12",
    end: "2025-02",
    images: [
      { src: "/work/Warehouse1.png", alt: "Warehouse dashboard" },
      { src: "/work/Warehouse2.png", alt: "Product management" },
      { src: "/work/Warehouse3.png", alt: "Inventory reporting" },
      
    ],
    stack: ["Django", "HTML", "CSS", "JavaScript", "Sqlite"],
    tools: ["Docker", "CI/CD"],
    github: { visibility: "public", url: "https://github.com/Wassim-dxdydz/Warehouse-Management-System" },
  },


  {
    id: "zebra-tool",
    title: "Zebra Tool - Real-Time Video Analysis",
    description:
      "Python desktop application for real-time video exposure analysis with zebra overlay, luma timeline, adjustable black/white thresholds, A/B markers, MP4 export with progress bar and cancellation.",
    start: "2025-09",
    end: "2025-10",
    images: [
      { src: "/work/Zebra.jpg", alt: "Zebra overlay analysis" },
    ],
    stack: ["Python"],
    tools: ["Qt", "OpenCV", "FFmpeg", "NumPy", "Docker", "CI/CD"],
    github: { visibility: "public", url: "https://github.com/Wassim-dxdydz/Video-tool" },
    zip: "/zips/zebra-tool.zip",
  },


  {
    id: "ml-web-app",
    title: "ML Web App - Neural Network Integration",
    description:
      "Web application integrating a pre-trained neural network model converted to Python for prediction. Includes result visualization using Mohr diagram representation.",
    start: "2025-07",
    end: "2025-09",
    images: [
      { src: "/work/Mlapp.png", alt: "ML prediction interface" },
    ],
    stack: ["Python", "Django", "JavaScript", "HTML", "CSS"],
    tools: ["NumPy", "SciPy", "Matplotlib", "Plotly"],
    github: { visibility: "public", url: "https://github.com/Wassim-dxdydz/ML-webapp" },
  },
  
  {
    id: "Covid19-Analysis",
    title: "Covid-19 Analysis - Data Visualization",
    description:
      "Data visualization project analyzing Covid-19 statistics across countries and time periods. Includes interactive dashboards and statistical insights.",
    start: "2025-03",
    end: "2025-04",
    images: [
      { src: "/work/Covid1.jpg", alt: "Covid-19 dashboard" },
      { src: "/work/Covid2.jpg", alt: "Covid-19 country analysis" },
      { src: "/work/Covid3.jpg", alt: "Covid-19 time series" },
    ],
    stack: ["Python"],
    tools: ["Anaconda", "Spyder", "tkinter", "NumPy", "Pandas", "Matplotlib", "Plotly", "CI/CD"],
    github: { visibility: "public", url: "https://github.com/Wassim-dxdydz/Covid-19-TkinterApp" },
    zip: "/zips/covid19-analysis.zip",
  },
  
  {
    id: "income-prediction",
    title: "Individual Income Prediction - ML",
    description:
      "End-to-end ML pipeline for income prediction using socio-economic data. Includes preprocessing, Random Forest training, evaluation (Accuracy, Precision, F1-score) and visualization.",
    start: "2025-04",
    end: "2025-05",
    images: [
      { src: "/work/Income1.jpg", alt: "Income prediction dashboard" },
      { src: "/work/Income2.jpg", alt: "Income prediction results" },
      { src: "/work/Income3.jpg", alt: "Income prediction model" },
    ],
    stack: ["Python"],
    tools: ["Anaconda", "Spyder", "tkinter", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Plotly", "CI/CD"],
    github: { visibility: "public", url: "https://github.com/Wassim-dxdydz/Income_predictor" },
    zip: "/zips/income-prediction.zip",
  },


  {
    id: "bi-import-export",
    title: "Business Intelligence Import/Export Analysis",
    description:
      "BI project analyzing commercial exchange data. Data modeling and interactive dashboard built in Qlik Sense to visualize trade volumes, top clients and country performance.",
    start: "2024-04",
    end: "2024-06",
    images: [
      { src: "/work/Qlik1.png", alt: "Data import and modeling" },
      { src: "/work/Qlik2.png", alt: "Data visualization" },
      { src: "/work/Qlik3.png", alt: "Data visualization" },
    ],
    stack: ["Qlik Sense"],
    tools: ["Data Modeling", "KPIs"],
  },


  {
    id: "tourism-platform",
    title: "Algeria Tourism Web Platform",
    description:
      "Interactive tourism website featuring map-based navigation of tourist locations and events across Algeria.",
    start: "2023-01",
    end: "2023-06",
    images: [
      { src: "/work/Tourism1.png", alt: "Tourism map interface" },
      { src: "/work/Tourism2.png", alt: "Tourism location details" },
      { src: "/work/Tourism3.png", alt: "Tourism event details" },
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
    tools: ["Leaflet", "Figma"],
  },


  {
    id: "real-estate-platform",
    title: "Real Estate Listings Platform",
    description:
      "Web platform for posting and browsing real estate listings with integrated web scraping and filtering features.",
    start: "2023-06",
    end: "2023-12",
    images: [
      { src: "/work/Realestate1.png", alt: "Real estate listings UI" },
      { src: "/work/Realestate2.png", alt: "Real estate listing details" },
      { src: "/work/Realestate3.png", alt: "Real estate search filters" },
    ],
    stack: ["React", "Django", "PostgreSQL"],
    tools: ["Web Scraping", "Figma"],
  },


  {
    id: "symmetry-app",
    title: "Symmetry Learning Desktop Application",
    description:
      "Interactive bilingual (Arabic/French) desktop application designed for children aged 8–14 to learn plane symmetry through lessons, exercises and progressive levels.",
    start: "2022-03",
    end: "2022-06",
    images: [
      { src: "/work/Symmetry1.png", alt: "Symmetry learning interface" },
      { src: "/work/Symmetry2.png", alt: "Symmetry exercise" },
      { src: "/work/Symmetry3.png", alt: "Symmetry level progression" },
    ],
    stack: ["Javascript", "Electron", "React"],
    github: { visibility: "public", url: "YOUR_GITHUB_LINK_HERE" },
    zip: "/zips/symmetry-app.zip",
  },
  
  {
    id: "etl-pipeline",
    title: "Medical Data ETL Pipeline",
    description:
      "Design and implementation of an ETL pipeline using Pentaho. Extraction, cleaning, transformation and loading into a data warehouse with reporting layer.",
    start: "2024-01",
    end: "2024-03",
    images: [
      { src: "/work/etl.png", alt: "ETL pipeline workflow" },
    ],
    stack: ["Pentaho"],
    tools: ["Data Warehouse", "ETL"],
  },


  {
    id: "english-board-game",
    title: "Educational Board Game (Java) — English Learning",
    description:
      "Customized Java implementation of the Goose Game designed for English learning with quizzes and illustrated progression.",
    start: "2022-01",
    end: "2022-02",
    images: [
      { src: "/work/Game.png", alt: "English learning board game" },
    ],
    stack: ["Java"],
  },
];
