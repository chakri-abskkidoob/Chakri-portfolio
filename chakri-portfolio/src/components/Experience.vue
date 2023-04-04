<!-- <template>
    <div id="main5">
    <h5
      style="
        margin: auto;
        font-weight: bold;
        color: #3452ff;
        border-bottom: 2px solid rgb(155, 152, 152);
      "
    >
      EXPERIENCE
    </h5>
    <div id="main5-experience">
      <div id="eightfolds">
        <h4>Java Backend Developer</h4>
        <h3>Eightfolds Software Technologies</h3>
        <p>September 2022 – November 2022</p>
        <p>
          Built few Api’s for nammaflix application using SpringBoot framework
          and Mysql database for practice and implemented successfully. Learned
          Javascript framework which is Vue Js and non-relational document
          database MongoDB.
        </p>
      </div>
      <br />
      <div id="aumhum">
        <h4>Web Development Intern</h4>
        <h3>Aumhum</h3>
        <p>December 2022</p>
        <p>Went through Vue Js code base to understand and fix bugs.</p>
      </div>
    </div>
  </div>
</template> -->

<!-- <script>
export default{
    name : 'ExperiencePage'
}
</script> -->

<!-- <style>
#main5 {
  background-color: rgb(25, 25, 25);
  width: 80%;
  margin: auto;
  padding: 4%;
  border-radius: 30px;
  margin-top: 2%;
  border: 2px solid #3452ff;
}
#main5-experience {
  margin: 50px auto;
  max-width: 800px;
  /* border: 1px solid #ccc; */
  /* border-radius: 10px; */
  /* overflow: hidden; */
}

#eightfolds,
#aumhum {
  width: 100%;
  background-color: #363434;
  padding: 20px;
  color: #e7e1e1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid #ccc;
}

#eightfolds h4,
#aumhum h4 {
  font-size: 18px;
  margin-bottom: 5px;
  color: #3452ff;
}

#eightfolds h3,
#aumhum h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #05124f;
}

#eightfolds p,
#aumhum p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #666;
}
</style> -->

<template>
  <div id="main5">
    <h5
      style="
        margin: auto;
        font-weight: bold;
        color: #3452ff;
        border-bottom: 2px solid rgb(155, 152, 152);
      "
    >
      EXPERIENCE
    </h5>
    <div id="main5-experience">
      <div id="eightfolds">
        <h4>Java Backend Developer</h4>
        <h3>Eightfolds Software Technologies</h3>
        <p>September 2022 – November 2022</p>
        <!-- <p>
          Built few Api’s for nammaflix application using SpringBoot framework
          and Mysql database for practice and implemented successfully. Learned
          Javascript framework which is Vue Js and non-relational document
          database MongoDB.
        </p> -->
        <!-- <ul>
          <li>
            Developed APIs for Nammaflix using SpringBoot and MySQL database.</li>
          <li>Practiced and implemented APIs successfully.</li>
          <li>Gained knowledge of Vue.js and MongoDB.</li>
          <li>Learned to work with non-relational document databases.</li>
          <li>Worked on building backend infrastructure for OTT platform</li>
        </ul> -->
        <div class="div">
          <ul class="ul">
            <li class="li">
              <i class="fas fa-code"></i>Developed APIs for Nammaflix using
              SpringBoot and MySQL database.
            </li>
            <li class="li">
              <i class="fas fa-check"></i> Practiced and implemented APIs
              successfully.
            </li>
            <li class="li">
              <i class="fas fa-book"></i> Gained knowledge of Vue.js and
              MongoDB.
            </li>
            <li class="li">
              <i class="fas fa-lightbulb"></i> Learned to work with
              non-relational document databases.
            </li>
            <li class="li">
              <i class="fas fa-cogs"></i> Worked on building backend
              infrastructure for OTT platform.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div id="aumhum">
        <h4>Web Development Intern</h4>
        <h3>Aumhum</h3>
        <p>December 2022</p>
        <div class="div">
          <ul class="ul">
            <li class="li">
              <i class="fas fa-search"></i> Analyzed Vue.js code base to gain
              understanding of code.
            </li>
            <li class="li">
              <i class="fas fa-tasks"></i> Implemented admin pages and made them
              functional.
            </li>
            <li class="li">
              <i class="fas fa-cogs"></i> Enhanced admin pages by integrating
              two different APIs for improved functionality.
            </li>
            <li class="li">
              <i class="fas fa-tools"></i> Contributed to development of dynamic
              and useful admin pages for future use.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperiencePage",
};
</script>

<style>
#main5 {
  background-color: rgb(25, 25, 25);
  width: 80%;
  margin: auto;
  padding: 4%;
  border-radius: 30px;
  margin-top: 2%;
  border: 2px solid #3452ff;
}

#main5-experience {
  margin: 50px auto;
  max-width: 800px;
}

#eightfolds,
#aumhum {
  width: 100%;
  /* background-color: #363434; */
  padding: 20px;
  color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  /* border-radius: 5%; */
}

#eightfolds h4,
#aumhum h4 {
  font-size: 18px;
  margin-bottom: 5px;
  color: #c6edf1f4;
}

#eightfolds h3,
#aumhum h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #ffffff5e;
}

#eightfolds p,
#aumhum p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #edecf3ec;
}

/* list */
/* Style for the unordered list */
.ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Style for the list items */
.li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-bottom: none;
}

/* Style for the font awesome icons */
.fa {
  margin-right: 5px;
}

/* Style for the devicons */
.devicon {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}

/* Style for the colored devicons */
.colored {
  fill: #007acc;
}

/* Style for the container div */
.div {
  padding: 20px;
  border-radius: 5px;
}

.li {
  margin-bottom: 10px;
}

.li i {
  margin-right: 10px;
}


/* Media Queries */

/* For screens smaller than 768px */
@media (max-width: 767.98px) {
  #main5 {
    width: 90%;
    padding: 2%;
    border-radius: 20px;
    border: none;
  }

  #eightfolds,
  #aumhum {
    padding: 15px;
    /* border-radius: 2%; */
  }

  #eightfolds h4,
  #aumhum h4 {
    font-size: 16px;
  }

  #eightfolds h3,
  #aumhum h3 {
    font-size: 20px;
  }

  #eightfolds p,
  #aumhum p {
    font-size: 14px;
    line-height: 1.3;
  }
}
</style>
