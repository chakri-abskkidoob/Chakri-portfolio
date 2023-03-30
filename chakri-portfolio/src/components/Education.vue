<template>
  <div id="main3">
    <h5
      style="
        margin: auto;
        font-weight: bold;
        color: #3452ff;
        border-bottom: 2px solid rgb(155, 152, 152);
      "
    >
      EDUCATION
    </h5>
    <div id="main3-inner">
      <div id="masai">
        <h4 style="border-bottom: 2px solid white; width: 100%">
          Full Stack Web Development
        </h4>
        <h3>Masai School</h3>
        <p>November 2021 – June 2022</p>
        <p> I am an experienced backend developer who has worked at Eightfolds
      Software Technologies. My primary project involved developing an OTT
      platform named Nammaflix using Java, Spring Boot, and MySQL. As a web
      development intern, I also gained experience in code base management and
      implementing changes. My core values include a strong understanding of
      Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and Vue.js. I am
      passionate about learning new technologies, working on large projects, and
      building my own projects. In the next five years, I aim to become the best
      Java backend developer and achieve a better work-life balance.</p>
      </div>
      <div id="vishnu">
        <h4 style="border-bottom: 2px solid white; width: 100%">
          Bachelor Of Technology (ECE)
        </h4>
        <h3>Vishnu Institute of Technology</h3>
        <p>2017 – 2021</p>
        <p> I am an experienced backend developer who has worked at Eightfolds
      Software Technologies. My primary project involved developing an OTT
      platform named Nammaflix using Java, Spring Boot, and MySQL. As a web
      development intern, I also gained experience in code base management and
      implementing changes. My core values include a strong understanding of
      Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and Vue.js. I am
      passionate about learning new technologies, working on large projects, and
      building my own projects. In the next five years, I aim to become the best
      Java backend developer and achieve a better work-life balance.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    name : 'EducationPage'
}
</script>

<style scoped>
template{
    width : 100%;
    height: 100%;
    background-color: red;
}
#main3 {
  /* background-color: rgb(25, 25, 25); */
  width: 80%;
  margin: auto;
  padding: 4%;
  border-radius: 30px;
  margin-top: 2%;
  border: 2px solid #3452ff;
}
#main3-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto;
  max-width: 800px;
}

#masai {
  width: 48%;
  background-color: #3452ff;
  border-radius: 10px;
  padding: 20px;
  color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

#vishnu {
  width: 48%;
  background-color: #ff6b6b;
  border-radius: 10px;
  padding: 20px;
  color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

h3 {
  margin-top: 0;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

p {
  margin: 10px 0;
  font-size: 13px;
}
</style>