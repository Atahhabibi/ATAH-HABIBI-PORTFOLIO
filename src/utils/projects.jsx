import foodBlogImg from "../images/projects/food.png";

import mosque from "../images/projects/mosque.png";
import blogPillarImg from "../images/blogPillar.png";

export const projectsData = [
  {
    name: "REACT",
    projects: [
      {
        id: 1,
        name: "Voluntrix",
        liveLink: "https://voluntrix.com/",
        githhubLink: "https://github.com/Atahhabibi/voluntrix",
        img: mosque,
        program: "www.voluntrix.com"
      },
      {
        id: 5,
        name: "BlogPillar",
        liveLink: "https://blogpillar.com",
        githhubLink: "https://github.com/Atahhabibi/blogpillar",
        img: blogPillarImg,
        program: "www.blogpillar.com"
      }
    ]
  },

  {
    name: "HTML/CSS",
    projects: []
  },

  {
    name: "JAVASCRIPT",
    projects: []
  }
];

export const BLOGS = [
  {
    id: 1,
    date: "03 May 2023",
    name: "Food Recipe Blog",
    liveLink: "https://food-blog-recipe.netlify.app/",
    githhubLink: "https://github.com/Atahhabibi/FOOD-RECIPE-BLOG",
    img: foodBlogImg,
    program: "React"
  }
];
