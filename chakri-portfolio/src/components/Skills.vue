<template>
<div id="main8">
    <h5
      style="
        margin: auto;
        font-weight: bold;
        color: #3452ff;
        border-bottom: 2px solid rgb(155, 152, 152);
      "
    >
      SKILLS
    </h5>
    <div id="main8-skills">
      <div class="skills-list">
        <div class="skill">
          <div class="skill-icon">
            <i class="fas fa-code"></i>
          </div>
          <div class="skill-name">DSA</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fab fa-js"></i>
          </div>
          <div class="skill-name">JavaScript</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fab fa-java"></i>
          </div>
          <div class="skill-name">Java</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fab fa-spring"></i>
          </div>
          <div class="skill-name">Spring Boot</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fas fa-database"></i>
          </div>
          <div class="skill-name">SQL</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fab fa-html5"></i>
          </div>
          <div class="skill-name">HTML</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fab fa-css3-alt"></i>
          </div>
          <div class="skill-name">CSS</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fas fa-database"></i>
          </div>
          <div class="skill-name">MongoDB</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fab fa-vuejs"></i>
          </div>
          <div class="skill-name">Vue.js</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fab fa-react"></i>
          </div>
          <div class="skill-name">React.js</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fab fa-react"></i>
          </div>
          <div class="skill-name">React Native</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fas fa-building"></i>
          </div>
          <div class="skill-name">Organization</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fas fa-users"></i>
          </div>
          <div class="skill-name">Collaboration</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fas fa-handshake"></i>
          </div>
          <div class="skill-name">Approachability</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fas fa-exchange-alt"></i>
          </div>
          <div class="skill-name">Adaptability</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fas fa-users"></i>
          </div>
          <div class="skill-name">Leadership</div>
        </div>
        <div class="skill">
          <div class="skill-icon">
            <i class="fas fa-clock"></i>
          </div>
          <div class="skill-name">Time Management</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name : 'SkillsPage'
}
</script>
<style>
#main8 {
  background-color: rgb(25, 25, 25);
  width: 80%;
  margin: auto;
  padding: 4%;
  border-radius: 30px;
  margin-top: 2%;
  border: 2px solid #3452ff;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto;
  max-width: 800px;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 120px;
}

.skill-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #3452ff;
  color: #fff;
  font-size: 24px;
}

.skill-name {
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #3452ff;
}

/* media queries */
@media only screen and (max-width: 767px) {
  #main8{
    border:none;
  }
}
</style>