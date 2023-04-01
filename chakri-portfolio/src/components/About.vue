<template>
  <div id="main">
    <div id="left-half">
      <h2 style="font-weight: bold; color: white">Hi, I am</h2>
      <h1 style="color: #3452ff; font-weight: bold">CHAKRAVARTHI PASUMARTHI</h1>
      <!-- <h1 style="font-weight: bold; color: white">PASUMARTHI</h1> -->
      <h2 style="color: white; font-family: cursive">Java Backend Developer</h2>
      <br>
      <div class="links">
        <a href="https://www.linkedin.com/in/chakravarthi-pasumarthi-84b209219/"
          ><i class="fab fa-linkedin" style="color: #fff"></i
        ></a>
        <a href="https://github.com/chakri-abskkidoob"
          ><i class="fab fa-github" style="color: #fff"></i
        ></a>
        <a href="../assetsCHAKRAVARTHI PASUMARTHI Resume.pdf" download=""
          ><i class="far fa-file-alt" style="color: #fff"></i
        ></a>
        <div>
        <router-link :to="'/contact'" class="route">Contact Me</router-link>
      </div>
      </div>
    </div>
      <img id="right-half" src="../assets/chakri2.jpg" alt="">
  </div>
  <div id="main2">
    <h5
      style="
        margin: auto;
        font-weight: bold;
        color: #3452ff;
        border-bottom: 2px solid rgb(155, 152, 152);
      "
    >
      PROFESSIONAL SUMMARY
    </h5>
    <p style="margin: auto; color: rgb(155, 152, 152); margin-top: 2%">
      I am an experienced backend developer who has worked at Eightfolds
      Software Technologies. My primary project involved developing an OTT
      platform named Nammaflix using Java, Spring Boot, and MySQL. As a web
      development intern, I also gained experience in code base management and
      implementing changes. My core values include a strong understanding of
      Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and Vue.js. I am
      passionate about learning new technologies, working on large projects, and
      building my own projects. In the next five years, I aim to become the best
      Java backend developer and achieve a better work-life balance.
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style>
#main {
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 3%;
}
#main2 {
  background-color: rgb(25, 25, 25);
  width: 80%;
  margin: auto;
  padding: 4%;
  border-radius: 30px;
  border: 2px solid #3452ff;
}
#left-half {
  width: 45%;
  text-align: left;
  padding: 3%;
  /* border-radius: 10% 100%/120%; */
  /* background-color: rgba(0, 0, 0, 0.315);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); */
  transition: box-shadow 0.3s ease-in-out;
}
/* #left-half:hover {
  box-shadow: 0px 0px 20px rgba(233, 240, 200, 0.5);
} */
#right-half {
  width: 30%;
  border-radius: 50% 20% / 10% 40%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.315);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease-in-out;
  /* background-image: url(../assets/chakri2.jpg);
  background-size: 120%; */
}
.route{
    text-decoration: none;
}
.route :hover{
    background-color: rgba(39, 39, 103, 0.605);
    color:white;
    /* box-shadow: 0 0px 10px hsl(193, 92%, 10%); */
    border-radius:5px;
    font-size: 14px;
    padding:5px;
}

/* media queries */
/* For devices with a max width of 768px */
@media only screen and (max-width: 768px) {
  #left-half {
    text-align: left;
  }

  #right-half {
    display: none;
  }
}

/* For devices with a min width of 769px and a max width of 1024px */
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  #left-half {
    width: 70%;
  }

  #right-half {
    width: 30%;
  }
}

/* For devices with a min width of 1025px */
@media only screen and (min-width: 1025px) {
  #left-half {
    width: 50%;
  }

  #right-half {
    width: 50%;
    display: block;
  }

  #main2 {
    padding: 2%;
  }
}

</style>
