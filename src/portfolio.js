/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Harish's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Harish Kumar Portfolio",
    type: "website",
    url: "https://github.com/harishrishee",
  },
};

//Home Page
const greeting = {
  title: "Harish Kumar",
  logo_name: "Harish Kumar",
  nickname: "HKR",
  subTitle:
    "Seasoned QA professional with over 7 years of experience in manual and automation testing. Specializes in Selenium, performance testing, CI/CD, and DevOps practices. Demonstrated success in ensuring software quality, optimizing testing processes, and collaborating seamlessly with cross-functional teams.",
  resumeLink: "",
  portfolio_repository: "https://github.com/harishrishee/masterPortfolio",
  githubProfile: "https://github.com/harishrishee",
};

const socialMediaLinks = [
  {
    name: "Gmail",
    link: "mailto:harishrishee@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Github",
    link: "",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  // {
  //   name: "Twitter",
  //   link: "",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Manual Testing",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Expert in manual testing, ensuring thorough validation of software functionality.",
        "⚡ Proficient in creating comprehensive test plans, detailed test cases, and meticulous test scripts.",
        "⚡ In-depth experience in functional testing, validating software features, user interfaces, and data interactions.",
        "⚡ Strong attention to detail, identifying and reporting defects with precision and clarity.",
        "⚡ Adept at regression testing, maintaining the stability of existing functionalities during development.",
        "⚡ Skilled in usability testing, assessing user experiences and interface design for optimal usability.",
        "⚡ Adherence to industry best practices for test execution and documentation.",
        "⚡ Collaborative approach, working seamlessly with development teams to ensure software quality.",
      ],
      softwareSkills: [
        {
          skillName: "Jirasoftware",
          fontAwesomeClassname: "simple-icons:jirasoftware",
          style: {
            backgroundColor: "transparent",
            color: "#0052CC",
          },
        },
        {
          skillName: "Testrail",
          fontAwesomeClassname: "simple-icons:testrail",
          style: {
            //backgroundColor: "white",
            color: "#65C179",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
      ],
    },
    {
      title: "UI Automation",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in Selenium WebDriver for web automation, allowing precise interaction with web elements and browsers.",
        "⚡ Expertise in creating and maintaining Gherkin feature files, ensuring a clear and structured representation of test scenarios.",
        "⚡ Strong programming skills in languages such as Java and JavaScript for developing step definitions and test automation scripts",
        "⚡ In-depth knowledge of Cucumber framework, TestNg, JUnit facilitating collaboration between testers, developers, and domain experts.",
        "⚡ Experience in parallel test execution, enhancing test efficiency and reducing execution time.",
        "⚡ Proficient in generating detailed test reports, providing comprehensive insights into test results.",
        "⚡ Continuous integration expertise, seamlessly integrating Selenium with Cucumber into CI/CD pipelines for automated testing.",
      ],
      softwareSkills: [
        {
          skillName: "Selenium",
          fontAwesomeClassname: "simple-icons:selenium",
          style: {
            color: "#43B02A",
          },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "simple-icons:apachemaven",
          style: {
            color: "#C71A36",
          },
        },
        {
          skillName: "Junit",
          fontAwesomeClassname: "simple-icons:junit5",
          style: {
            color: "#25A162",
          },
        },
        {
          skillName: "Cucumber",
          fontAwesomeClassname: "simple-icons:cucumber",
          style: {
            color: "#23D96C",
          },
        },
        {
          skillName: "Extent Reports",
          imageSrc: "extent_reports.png",
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "Speedtest",
          fontAwesomeClassname: "simple-icons:speedtest",
          style: {
            color: "#141526",
          },
        },
      ],
    },
    {
      title: "API Automation",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in RestAssured for API automation, enabling precise interaction with RESTful API services.",
        "⚡ Expertise in crafting API requests and handling responses using a clear and readable syntax.",
        "⚡ Ability to create comprehensive and structured API test scripts for various scenarios.",
        "⚡ In-depth knowledge of authentication methods and validation techniques for API testing.",
      ],
      softwareSkills: [
        {
          skillName: "RestAssured",
          imageSrc: "rest_assured.png",
        },
        {
          skillName: "Extent Reports",
          imageSrc: "extent_reports.png",
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "simple-icons:apachemaven",
          style: {
            color: "#C71A36",
          },
        },
        {
          skillName: "Junit",
          fontAwesomeClassname: "simple-icons:junit5",
          style: {
            color: "#25A162",
          },
        },
        {
          skillName: "Cucumber",
          fontAwesomeClassname: "simple-icons:cucumber",
          style: {
            color: "#23D96C",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Graphql",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E10098",
          },
        },
      ],
    },
    {
      title: "Performance Testing",
      fileName: "DesignImg",
      skills: [
        "⚡ Proficient in Apache JMeter for load testing, stress testing, and performance testing of web applications and services.",
        "⚡ Expertise in scripting test scenarios, simulating user behavior, and creating performance test plans.",
        "⚡ Ability to design and execute comprehensive performance tests to identify bottlenecks and assess system scalability.",
        "⚡ In-depth knowledge of integrating JMeter with Grafana for real-time performance metrics monitoring and reporting.",
      ],
      softwareSkills: [
        {
          skillName: "JMeter",
          fontAwesomeClassname: "simple-icons:apachejmeter",
          style: {
            color: "#D22128",
          },
        },

        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },
        {
          skillName: "Virtualbox",
          fontAwesomeClassname: "simple-icons:virtualbox",
          style: {
            color: "#183A61",
          },
        },
      ],
    },
    {
      title: "Cypress",
      fileName: "CypressImg",
      skills: [
        "⚡ Proficient in Cypress for end-to-end testing of web applications, ensuring high-quality user experiences.",
        "⚡ Expertise in writing clean and maintainable test scripts using JavaScript, enhancing test reliability and maintainability.",
        "⚡ Ability to create comprehensive test suites, covering various user scenarios and application functionalities.",
        "⚡ Experience in real-time debugging and time-travel debugging, facilitating quick issue identification and resolution.",
        "⚡ Knowledge of integrating Cypress with continuous integration (CI) pipelines for automated testing.",
      ],
      softwareSkills: [
        {
          skillName: "Cypress",
          fontAwesomeClassname: "simple-icons:cypress",
          style: {
            color: "#17202C",
          },
        },
        {
          skillName: "MochaAssome",
          fontAwesomeClassname: "simple-icons:mocha",
          style: {
            color: "#8D6748",
          },
        },
      ],
    },
    // {
    //   title: "DevOps",
    //   fileName: "CypressImg",
    //   skills: [
    //     "⚡ Proficient in Cypress for end-to-end testing of web applications, ensuring high-quality user experiences.",
    //     "⚡ Expertise in writing clean and maintainable test scripts using JavaScript, enhancing test reliability and maintainability.",
    //     "⚡ Ability to create comprehensive test suites, covering various user scenarios and application functionalities.",
    //     "⚡ Experience in real-time debugging and time-travel debugging, facilitating quick issue identification and resolution.",
    //     "⚡ Knowledge of integrating Cypress with continuous integration (CI) pipelines for automated testing.",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#2496ED",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //     {
    //       skillName: "Amazon EKS",
    //       fontAwesomeClassname: "simple-icons:amazoneks",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page : Commented in educations.js
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jawaharlal Nehru Technological University Hyderabad",
      subtitle: "B.Tech. in Electronics and Communication Engineering",
      logo_path: "JNTU_Hyderabad_logo.png",
      alt_name: "JNTUH",
      duration: "2012 - 2016",
      descriptions: [],
      website_link: "https://jntuh.ac.in/",
    },
    {
      title: "Board of Intermediate Education Telangana",
      subtitle: "MPC",
      logo_path: "telanganalogo.png",
      alt_name: "Board of Intermediate Education Telangana",
      duration: "2010 - 2012",
      descriptions: [],
      website_link: "https://tsbie.cgg.gov.in/home.do",
    },
  ],
};
//Hiding this sectio
const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have worked with many evolving startups as Test Engineer and SSDET-III. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Software Development Engineer in Test (SSDET-III)",
          company: "Baker Hughes pvt Ltd.(Zemoso Technologies Pvt Ltd)",
          company_url: "https://www.bakerhughes.com/",
          logo_path: "legato_logo.png",
          duration: "Dec 2019 - Till Now",
          location: "Hyderabad, Telangana",
          description:
            "As a Senior Software Development Engineer in Test (SSDET-III), I excel in manual and automation testing using Selenium and Java, ensuring robust software quality. Proficient in performance testing methodologies, I also possess leadership skills to effectively lead and mentor testing teams, enhancing overall product reliability and quality.",
          color: "#0879bf",
        },
        {
          title: "Quality Analyst",
          company: "Infasta Software Solutions Pvt Ltd",
          company_url: "https://www.infasta.com/",
          logo_path: "muffito_logo.png",
          duration: "Jun 2017 - Dec 2019",
          location: "Hyderabad, Telangana",
          description:
            "As a Testing Engineer, I proficiently execute manual and automated testing using Selenium and Java. My expertise lies in ensuring software quality, detecting defects, and enhancing system reliability. I employ systematic testing approaches to deliver high-quality, error-free software products, contributing to overall project success.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to automation(API and UI) scripts and Performance, Manual testing techniques.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Selenium, JMeter, RestAssured, Cypress, Java, Javascript and Manual testing.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "TejaswiNagar, Attapur, Hyderabad, Pin-500048",
    locality: "TejaswiNagar",
    country: "IN",
    region: "Telangana",
    postalCode: "500048",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/54SDsVtQeaVA2ktP9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
