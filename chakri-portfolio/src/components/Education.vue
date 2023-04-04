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
        <!-- <div class="div">
          <ul class="ul">
            
          </ul>
        </div> -->
        <div>
          <ul class="ul">
            <li class="li">
              <i class="fas fa-graduation-cap"></i> Masai School - First three
              months - learnt HTML, CSS, JavaScript, Data Structures, Algorithms
            </li>
            <li class="li">
              <i class="fas fa-code"></i> 2 projects: Clone of BeautyBebo,
              Beardo.in
            </li>
            <li class="li">
              <i class="fas fa-graduation-cap"></i> Joined Java backend course -
              Learnt Java, Spring Boot, MySQL
            </li>
            <li class="li">
              <i class="fas fa-shopping-cart"></i> Developed online shopping
              application for backend using Java, Spring Boot, MySQL
            </li>
          </ul>
        </div>
      </div>
      <div id="vishnu">
        <h4 style="border-bottom: 2px solid white; width: 100%">
          Bachelor Of Technology (ECE)
        </h4>
        <h3>Vishnu Institute of Technology</h3>
        <p>June 2017 – June 2021</p>
        <div>
          <ul class="ul">
            <li class="li"><i class="fas fa-microchip"></i> Studied VLSI.</li>
            <li class="li">
              <i class="fas fa-ruler-horizontal"></i> Learned about Linear and
              Digital IC applications.
            </li>
            <li class="li">
              <i class="fas fa-microchip"></i> Gained knowledge on
              Microprocessors and Microcontrollers.
            </li>
            <li class="li">
              <i class="fas fa-signal"></i> Studied Signals and Systems.
            </li>
            <li class="li">
              <i class="fas fa-digital-tachograph"></i> Learned about Digital
              Signal Processor.
            </li>
            <li class="li">
              <i class="fas fa-wave-square"></i> Gained knowledge on Wave
              Propagation.
            </li>
            <li class="li">
              <i class="fas fa-cogs"></i> Studied Control Systems.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EducationPage",
};
</script>

<style scoped>
template {
  width: 100%;
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
  /* display: flex;
  justify-content: space-between; */
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

/* media queries */
/* For screens smaller than 576px */
@media (max-width: 575.98px) {
  #main3 {
    width: 90%;
    padding: 2%;
    border: none;
  }
  #main3 h5 {
    font-size: 16px;
  }
  #main3-inner {
    display: flex;
    flex-direction: column;
  }
  #masai,
  #vishnu {
    width: 100%;
    margin-bottom: 20px;
  }
}

/* For screens larger than or equal to 576px */
@media (min-width: 576px) {
  #main3-inner {
    /* display: flex;
    justify-content: space-between; */
    align-items: flex-start;
  }
  #masai,
  #vishnu {
    width: 100%;
    margin: 5%;
  }
}

/* For screens larger than or equal to 768px */
@media (min-width: 768px) {
  #masai,
  #vishnu {
    width: 100%;
    margin: 5%;
  }
}

/* For screens larger than or equal to 992px */
@media (min-width: 992px) {
  #masai,
  #vishnu {
    width: 100;
    margin: 5%;
  }
}

/* For screens larger than or equal to 1200px */
@media (min-width: 1200px) {
  #masai,
  #vishnu {
    width: 100%;
    margin: 5%;
  }
}
</style>
