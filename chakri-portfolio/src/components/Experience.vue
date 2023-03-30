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
</template>

<script>
export default{
    name : 'ExperiencePage'
}
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
</style>