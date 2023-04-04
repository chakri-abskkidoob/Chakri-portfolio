<template>
  <div id="main6">
    <h5
      style="
        margin: auto;
        font-weight: bold;
        color: #3452ff;
        border-bottom: 2px solid rgb(155, 152, 152);
      "
    >
      CERTIFICATIONS & ACHIEVEMENTS
    </h5>
    <div class="certifications">
      <div class="div">
        <ul class="ul">
          <li class="li">
            <i class="fas fa-laptop-code"></i> Full Stack Web Development -
            Learned HTML, CSS, JavaScript, Java, SpringBoot, MySQL, DSA.
          </li>
          <li class="li">
            <i class="fas fa-robot"></i> ARC International Internship -
            Experienced robots to increase production efficiency.
          </li>
          <li class="li">
            <i class="fas fa-shield-alt"></i> Cybersecurity Awareness Training -
            Learnt about preventing hacking in digital systems.
          </li>
          <li class="li">
            <i class="fab fa-java"></i> Java - Gold Level - Earned 553 points.
          </li>
          <li class="li">
            <i class="fas fa-database"></i> SQL - Gold Level - Earned 960
            points.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CertificationsPage",
};
</script>
<style>
#main6 {
  background-color: rgb(25, 25, 25);
  width: 80%;
  margin: auto;
  padding: 4%;
  border-radius: 30px;
  margin-top: 2%;
  border: 2px solid #3452ff;
}

certifications ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.certifications li {
  font-size: 18px;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  color: #ccc;
}

.certifications li:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
li {
  border-bottom: 1px solid #aba4a4;
}

/* media queries */
/* For screens smaller than 768px (tablets) */
@media (max-width: 767px) {
  #main6 {
    padding: 10px;
    border: none;
  }
  .certifications li {
    font-size: 16px;
    line-height: 1.2;
  }
}

/* For screens between 768px and 1024px (small laptops and tablets) */
@media (min-width: 768px) and (max-width: 1023px) {
  #main6 {
    padding: 20px;
  }
  .certifications li {
    font-size: 18px;
    line-height: 1.3;
  }
}

/* For screens larger than 1024px (desktops and large laptops) */
@media (min-width: 1024px) {
  #main6 {
    padding: 30px;
  }
  .certifications li {
    font-size: 20px;
    line-height: 1.4;
  }
}
</style>
