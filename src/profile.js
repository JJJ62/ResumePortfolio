// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Jawad Alamgir",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    " Excellent content specialist and team player with extensive understanding of development tools and programming languages. Individual with a strong eye for detail who is presently a junior at Oregon State University majoring in Computer Science with a concentration on video game creation and simulation, as well as expertise with OpenGL and GLSL.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "Database",
    faClass: "fas fa-database",
  },
  {
    name: "Google Cloud Platform"
  },
  {
    name: "OpenGL"
  },
  {
    name: "OpenGL Shading Language"
  },
  {
    name: "C++"
  },
  {
    name: "C"
  },
  
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Animated Bézier Surface, Computer Graphics",
    skills: ["OpenGL, GLSL, C++, C"],
    url: "https://media.oregonstate.edu/media/t/1_y3vbr0ej",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Disintegration Shader, Computer Graphics Shaders",
    skills: ["OpenGL, GLSL, C++, C"],
    url: "https://media.oregonstate.edu/media/t/1_jo05owxp",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "REST API Google Cloud Platform, Cloud Application Development",
    skills: ["GCP, JavaScript, Node.Js, Google DataStore"],
    url: "https://github.com/JJJ62/GoogleCloud-FinalPrject",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Maze Game in C, Data Structures",
    skills: ["C"],
    url: "https://github.com/JJJ62/Maze-Game-261-Final-group-",
  }
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
// const section4Title = "Miscellaneous";
// const miscellaneous = [
//   {
//     // Add image in './styles/images.css' in #misc1
//     id: "misc1",
//     name: "Miscellaneous 1",
//     url: "https://github.com/kaustubhai",
//   },
//   {
//     // Add image in './styles/images.css' in #misc2
//     id: "misc2",
//     name: "Miscellaneous 2",
//     url: "https://github.com/kaustubhai",
//   },
//   {
//     // Add image in './styles/images.css' in #misc3
//     id: "misc3",
//     name: "Miscellaneous 3",
//     url: "https://github.com/kaustubhai",
//   },
// ];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.",
  copyright: "Jawad Alamgir",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/JJJ62/",
  linkedin: "https://www.linkedin.com/in/jalamgir62/",
  resume: "https://github.com/JJJ62/ResumePortfolio/blob/master/Jawad_Alamgir_Resume.pdf",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
