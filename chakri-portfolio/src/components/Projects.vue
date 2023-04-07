<!-- <template>
  <div id="main4">
    <h5
      style="
        margin: auto;
        font-weight: bold;
        color: #3452ff;
        border-bottom: 2px solid rgb(155, 152, 152);
      "
    >
      PROJECTS
    </h5>
    <div id="main4-project">
      <ul>
        <li v-for="project in projects" :key="project.projectId">
          <div class="project">
            <img
              :src="project.projectImage"
              style="width: 100%; height: 100%"
              alt=""
            />
            <div class="overlay">
              <a href="#">{{ project.projectName }}</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  data() {
    return {
      projects: [
        {
          projectId: 1,
          projectName: "Nammaflix",
          projectImage: "../assets/chakri2.jpg",
        },
        {
          projectId: 2,
          projectName: "Portfolio",
          projectImage: "../assets/chakri2.jpg",
        },
        {
          projectId: 3,
          projectName: "Online Shopping",
          projectImage: "../assets/chakri2.jpg",
        },
        {
          projectId: 4,
          projectName: "Zomata",
          projectImage: "../assets/chakri2.jpg",
        },
        {
          projectId: 5,
          projectName: "Beardo.in",
          projectImage: "../assets/chakri2.jpg",
        },
        {
          projectId: 6,
          projectName: "BeautyBebo",
          projectImage: "../assets/chakri2.jpg",
        },
      ],
    };
  },
};
</script>

<style>
#main4 {
  background-color: rgb(25, 25, 25);
  width: 80%;
  margin: auto;
  padding: 4%;
  border-radius: 30px;
  margin-top: 2%;
  border: 2px solid #3452ff;
}
#main4-project {
  margin: 50px auto;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
}

.project {
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  position: relative;
  width: 33.33%;
  padding: 10px;
}

.project:hover {
  transform: translateY(-10px);
}

.project img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(52, 82, 255, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.project:hover .overlay {
  opacity: 1;
}

.overlay a {
  background-color: #fff;
  color: #3452ff;
  border: 2px solid #3452ff;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.overlay a:hover {
  background-color: #3452ff;
  color: #fff;
}

.overlay-content {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
z-index: 2;
}

.overlay-content h2 {
font-size: 2.5rem;
margin-bottom: 2rem;
}

.overlay-content p {
font-size: 1.25rem;
margin-bottom: 2rem;
}

.overlay-content a {
display: inline-block;
background-color: #3452ff;
color: #fff;
padding: 1rem 2rem;
border-radius: 2rem;
transition: background-color 0.3s ease;
}

.overlay-content a:hover {
background-color: #fff;
color: #3452ff;
}

/* Styles for the close button */
.overlay-close {
position: absolute;
top: 2rem;
right: 2rem;
font-size: 2rem;
font-weight: bold;
color: #3452ff;
cursor: pointer;
}

.overlay-close:hover {
color: #fff;
}

</style> -->

<template>
  <div class="projects-page">
    <h2 class="projects-title">PROJECTS</h2>
    <div class="projects-container">
      <div
        v-for="project in projects"
        :key="project.projectId"
        class="project-card"
      >
        <div class="project-image">
          <img :src="project.projectImage" alt="Project Image" />
        </div>
        <div class="project-details">
          <h3 class="project-name">{{ project.projectName }}</h3>
          <p>Tech Stack : {{ project.projectTechStack }}</p>
          <p class="project-description">{{ project.projectDescription }}</p>
          <!-- <a :href="project.projectLink" target="_blank" class="project-link"
            >View Project</a
          > -->

          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <a :href="project.projectLink" target="_blank" class="project-link">
              <i class="fas fa-eye"></i> View Project
            </a>
            <a
              v-if="project.projectDeploy"
              :href="project.projectDeploy"
              target="_blank"
              class="project-link"
            >
              <i class="fas fa-rocket"></i> Deploy Link
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  data() {
    return {
      projects: [
        {
          projectId: 1,
          projectName: "Nammaflix",
          projectImage:
            "https://www.contus.com/blog/wp-content/uploads/2022/03/banner-image-41.4-01-1000x491.png",
          projectTechStack: "Java | SpringBoot | MySql | Vue Js | BootStrap",
          projectDescription:
            "A movie streaming website built with Java, springboot mysql, vue js where user can find kannada movies, daily serials, motivational videos.",
          projectLink:
            "https://github.com/chakri-abskkidoob/Complete-nammaflix",
        },
        {
          projectId: 2,
          projectName: "Portfolio",
          projectImage:
            "https://thumbs.dreamstime.com/blog/2018/11/essential-tips-organizing-your-portfolio-29167-image42264873.jpg",
          projectTechStack: "Vue js",
          projectDescription:
            "My personal portfolio website built with Vue.js.",
          projectLink: "https://github.com/chakri-abskkidoob/Chakri-portfolio",
          projectDeploy: "https://chakravarthiportfolio.netlify.app/#/",
        },
        {
          projectId: 3,
          projectName: "Online Shopping",
          projectImage:
            "https://www.addictioncenter.com/app/uploads/2020/01/online_shopping_addiction-scaled.jpeg",
          projectTechStack: "Java | SpringBoot | Mysql",
          projectDescription:
            "An online shopping website built with Java, springboot, mysql.",
          projectLink:
            "https://github.com/akshaydwankar3/ONLINE-SHOPPING-APPLICATION-PROJECT-IN-JAVA",
        },
        {
          projectId: 4,
          projectName: "Online Food delivery",
          projectImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlXnQI99IPJZ6dsfofvu-3QH7JUyBt18BlA&usqp=CAU",
          projectTechStack: "Java | SpringBoot | MySql",
          projectDescription:
            "A food delivery website built with Java, springboot, mysql.",
          projectLink:
            "https://github.com/chakri-abskkidoob/Food-delivery-services",
        },
        {
          projectId: 5,
          projectName: "Beardo.in",
          projectImage:
            "https://mediabrief.com/wp-content/uploads/2021/12/IMAGE-beardo-rolls-our-new-campaign-with-yash-MEDIABRIEF.jpg",
          projectTechStack: "HTML | CSS | Javascript",
          projectDescription:
            "An e-commerce website for men's grooming products built by HTML, CSS, Javascript",
          projectLink: "https://github.com/leadernaga/Beardo.in",
          projectDeploy: "https://beardoclone.netlify.app/",
        },
        {
          projectId: 6,
          projectName: "BeautyBebo",
          projectImage:
            "https://i.pinimg.com/736x/23/6d/a1/236da1871956602c6d43b66fbb9bff4f.jpg",
          projectTechStack: "HTML | CSS Javascript",
          projectDescription:
            "An e-commerce website for beauty products built by HTML, CSS< javascript",
          projectLink: "https://github.com/Kalken12/CloneBeautyBebo",
        },
      ],
    };
  },
};
</script>

<style>
.projects-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
}

.projects-title {
  font-size: 3rem;
  font-weight: bold;
  color: #3452ff;
  margin-bottom: 2rem;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  max-width: 1200px;
}

.project-card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image img {
  /* max-width: 100%; */
  width: 100%;
  height: 250px;
}

.project-details {
  padding: 1.5rem;
}

.project-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.project-description {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.project-link {
  display: inline-block;
  background-color: #3452ff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

.project-link:hover {
  background-color: #1e2be6;
}

@media screen and (max-width: 767px) {
  /* mobile view */
  .projects-container {
    display: flex;
    flex-direction: column;
  }
  .project-card {
    max-width: 100%;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  /* tablet view */
  .projects-container {
    grid-template-columns: repeat(auto-fit, minmax(47%, 1fr));
  }
}
</style>
