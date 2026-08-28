import lifesyncImage from "../assets/lifesync.png";
// import lifesyncMockup from "../assets/lifesync-mockup.png";

import tjslImage from "../assets/tjsl.png";
import tjslMockup from "../assets/tjsl.png";

import watchuImage from "../assets/watchu.png";
// import watchuMockup from "../assets/watchu-mockup.png";

import sikrsImage from "../assets/sikrs.png";
import sikrsMockup from "../assets/sikrs.png";

import arcticImage from "../assets/arctics.png";
// import arcticMockup from "../assets/arctic-travels-mockup.png";


export const projects = [

  {
    id: 1,

    name: "LifeSync",

    role: "Backend Developer",

    tagline: "Internal Management Web Application",

    description:
      "A web-based internal application designed to streamline operational processes and improve data management.",

    image: lifesyncImage,

    // mockup: lifesyncMockup,

    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
    ],
    demo: "",
    github: "",

    overview:
      "LifeSync is an internal web application developed to support operational activities and simplify the management of organizational data through a centralized digital system.",

    problem:
      "Several operational processes were still dependent on manual workflows and scattered data, making information management less efficient and increasing the possibility of errors.",

    solution:
      "The system centralizes operational data into a web-based application with structured workflows, CRUD functionality, role-based access, reporting, and API-based communication between application components.",

    caseStudyContributions: [
      "Developed application features using Laravel",
      "Designed and implemented responsive interfaces.",
      "Developed RESTful APIs for data communication.",
      "Implemented CRUD operations and application business logic.",
      "Managed MySQL database structures and data.",
      "Implemented reporting and document export functionality.",
    ],

    features: [
      "Authentication and authorization",
      "Dashboard and data overview",
      "CRUD data management",
      "Search and filtering",
      "RESTful API integration",
      "PDF report generation",
      "Excel data export",
      "Responsive interface",
    ],

    technical:
      "The application uses Laravel and CodeIgniter 4 for application development, PHP for server-side logic, MySQL for database management, JavaScript for interactive functionality, and Tailwind CSS for responsive interface development. The system follows an MVC-based architecture and uses RESTful APIs for communication between application components.",

    challenges:
      "One of the main challenges was integrating multiple application components while maintaining consistent data structures. This was addressed by defining clearer API endpoints, validating request data, structuring database relationships properly, and separating application responsibilities between frontend, backend, and database layers.",

    result:
      "The resulting application provides a centralized platform for managing operational data, reducing reliance on manual processes, improving accessibility of information, and providing structured reporting capabilities.",
  },


  // =====================================================
  // 02 — TJSL
  // =====================================================

  {
    id: 2,

    name: "TJSL",

    role: "Full Stack Developer",

    tagline: "Corporate Social Responsibility Management System",

    description:
      "A web application developed to support the management and monitoring of corporate social responsibility activities.",

    image: tjslImage,

    mockup: tjslMockup,

    stack: [
      "Laravel",
      "CodeIgniter 4",
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],

    // contributions: [
    //   "Developed responsive web interfaces.",
    //   "Implemented backend functionality.",
    //   "Developed RESTful API endpoints.",
    //   "Implemented CRUD operations.",
    //   "Developed reporting and export features.",
    // ],

    demo: "",
    github: "",

    overview:
      "TJSL is a web-based management system designed to help organize, manage, and monitor corporate social responsibility activities in a centralized platform.",

    problem:
      "Managing social responsibility activities can involve many records, documents, and activity information. Without a centralized system, monitoring and reporting can become inefficient.",

    solution:
      "The application provides a centralized digital platform for managing activity data, monitoring records, processing information, and generating reports.",

    caseStudyContributions: [
      "Developed responsive web interfaces.",
      "Implemented backend functionality.",
      "Developed RESTful API endpoints.",
      "Implemented CRUD operations.",
      "Integrated frontend with backend APIs.",
      "Worked with MySQL database structures.",
      "Implemented reporting and export functionality.",
    ],

    features: [
      "Dashboard",
      "Activity management",
      "Data search and filtering",
      "CRUD operations",
      "API integration",
      "Reporting",
      "PDF generation",
      "Excel export",
    ],

    technical:
      "The system was developed using Laravel and CodeIgniter 4 with PHP as the primary backend language. MySQL was used for data persistence, while JavaScript and Bootstrap were used to create the frontend experience.",

    challenges:
      "The main challenge involved maintaining consistent communication between frontend components and backend APIs while handling different data structures. The solution involved organizing API endpoints, validating request data, and standardizing responses.",

    result:
      "The completed application provides a more structured way to manage and monitor TJSL activities while simplifying data processing and reporting.",
  },


  // =====================================================
  // 03 — WATCHU
  // =====================================================

  {
    id: 3,

    name: "WatchU",

    role: "Backend Developer",

    tagline: "Collaborative Movie Discovery Platform",

    description:
      "A web application developed collaboratively to help users discover and manage movie-related information.",

    image: watchuImage,

    stack: [
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "REST API",
      "Supabase PostgreeSQL",
    ],

    // contributions: [
    //   "Developed frontend components.",
    //   "Built RESTful API endpoints.",
    //   "Integrated frontend with backend services.",
    //   "Implemented data management functionality.",
    //   "Collaborated with a multidisciplinary development team.",
    // ],

    demo: "",
    github: "",

    overview:
      "WatchU is a collaborative web application developed to provide users with a convenient platform for discovering and exploring movie information.",

    problem:
      "Users often need to browse information from different sources when searching for movies, making it difficult to organize and discover relevant content efficiently.",

    solution:
      "WatchU brings movie discovery and related information into a single web interface with structured data, search functionality, and an interactive user experience.",

    caseStudyContributions: [
      "Developed RESTful APIs using Express.js.",
      "Integrated frontend with backend services.",
      "Integrated Backend with AI model.",
      "Implemented data retrieval and processing.",
      "Worked collaboratively within a six-member multidisciplinary team.",
      "Tested and refined application functionality.",
    ],

    features: [
      "Movie discovery",
      "Movie search",
      "Movie information",
      "Dynamic content",
      "REST API integration",
      "Responsive interface",
    ],

    technical:
      "The application uses React for the frontend and Node.js with Express.js for backend services. RESTful APIs are used to exchange data between the frontend and backend, while JavaScript handles application logic and interactive functionality.",

    challenges:
      "One challenge was coordinating development across a multidisciplinary team while keeping frontend and backend integrations consistent. The team addressed this through clearer API contracts, task division, and iterative testing.",

    result:
      "The project resulted in a functional movie discovery platform while providing practical experience in collaborative full-stack development, API integration, and modern JavaScript development.",
  },


  // =====================================================
  // 04 — SiKRS
  // =====================================================

  {
    id: 4,

    name: "SiKRS",

    role: "Frontend Developer",

    tagline: "Student Course Registration Information System",

    description:
      "A web-based academic information system designed to simplify course registration and provide students with structured access to their academic course data.",

    image: sikrsImage,

    mockup: sikrsMockup,

    stack: [
      "Laravel",
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
    ],

    // contributions: [
    //   "Developed the student and administrator interfaces.",
    //   "Implemented authentication and authorization.",
    //   "Developed RESTful API integration.",
    //   "Implemented KRS data management.",
    //   "Designed responsive interfaces using Tailwind CSS.",
    //   "Integrated frontend with backend services.",
    // ],

    demo: "",
    github: "",

    overview:
      "SiKRS is a web-based Course Registration System designed to help students and administrators manage course registration data digitally.",

    problem:
      "Course registration data can become difficult to manage when handled through separate documents or manual processes. Students also need an easier way to access their registered courses.",

    solution:
      "SiKRS provides a centralized web application where administrators can manage student, class, course, and KRS data while students can securely access their own registered courses.",

    caseStudyContributions: [
      "Developed responsive student and administrator interfaces.",
      "Implemented authentication using Laravel.",
      "Implemented CRUD functionality for academic data.",
      "Developed student-specific KRS data retrieval.",
      "Implemented validation and error handling.",
      "Designed consistent UI using Tailwind CSS.",
    ],

    features: [
      "Student authentication",
      "Administrator authentication",
      "Student management",
      "Class management",
      "Course management",
      "KRS management",
      "Student-specific KRS display",
      "CRUD operations",
      "REST API integration",
      "Responsive dashboard",
    ],

    technical:
      "SiKRS uses Laravel as the web application layer and CodeIgniter 4 for backend API services. MySQL is used for database management, while JavaScript and Tailwind CSS support interactive and responsive interfaces. The system uses RESTful API communication to connect application components.",

    challenges:
      "One of the main challenges was ensuring that authenticated students could only access their own KRS data while administrators could manage academic records. This was addressed through authentication guards, user-specific queries, API validation, and structured access control.",

    result:
      "The resulting system provides a centralized platform for managing course registration data and gives students easier access to their registered courses while reducing dependence on manual academic data management.",
  },


  // =====================================================
  // 05 — ARCTIC TRAVELS
  // =====================================================

  {
    id: 5,

    name: "Arctic Travels",

    role: "Frontend Developer",

    tagline: "Luxury Winter Travel Experience",

    description:
      "A modern travel booking website concept designed to showcase premium winter destinations, resorts, ski passes, and travel experiences.",

    image: arcticImage,

    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Lucide React",
    ],

    // contributions: [
    //   "Designed and developed the responsive frontend interface.",
    //   "Translated UI concepts into reusable React components.",
    //   "Implemented destination browsing and detail pages.",
    //   "Developed interactive booking form components.",
    //   "Implemented animations and micro-interactions using Framer Motion.",
    //   "Implemented responsive layouts using Tailwind CSS.",
    // ],

    demo: "",
    github: "",

    overview:
      "Arctic Travels is a frontend travel platform concept focused on creating a premium digital experience for users looking for luxury winter holidays, ski resorts, and curated travel destinations.",

    problem:
      "Travel websites can become visually overwhelming when destination information, accommodation, activities, and booking options are presented without a clear hierarchy or engaging user experience.",

    solution:
      "Arctic Travels organizes winter travel information into visually focused destination cards, regional exploration, luxury lodging, ski passes, booking components, and detailed destination pages.",

    caseStudyContributions: [
      "Designed and implemented the main landing page.",
      "Developed reusable React components for cards, buttons, badges, and sections.",
      "Implemented destination detail pages using React Router.",
      "Created interactive destination galleries.",
      "Implemented booking form interactions.",
      "Added wishlist functionality using localStorage.",
      "Implemented resort filtering and search interactions.",
      "Added Framer Motion animations and page transitions.",
    ],

    features: [
      "Destination discovery",
      "Destination detail pages",
      "Destination gallery",
      "Resort filtering",
      "Search functionality",
      "Luxury lodging section",
      "Ski pass section",
      "Interactive booking form",
      "Wishlist",
      "Responsive design",
      "Animated UI",
      "Page transitions",
    ],

    technical:
      "Arctic Travels was developed using React with Vite and TypeScript, with Tailwind CSS used for responsive styling. React Router handles navigation between the homepage and destination detail pages, while Framer Motion provides entrance animations, hover interactions, and page transitions. LocalStorage is used for lightweight client-side wishlist persistence.",

    challenges:
      "The main challenge was creating a visually rich travel experience while keeping the interface reusable and responsive. This was addressed by breaking the interface into reusable components, centralizing destination data, using responsive Tailwind utilities, and adding animations selectively to improve the user experience.",

    result:
      "The project resulted in a responsive luxury travel website concept with interactive destination discovery, detailed destination pages, booking interactions, wishlist functionality, filtering, and modern animated UI components.",
  },

];