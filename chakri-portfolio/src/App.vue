<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <profile2 />
  <!-- <Profile />
  <Education />
  <Experience />
  <Projects />
  <Certifications /> -->
  <Skills />
  <Interests />
  <Footer />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Profile2 from './components/Profile2.vue'
// import Profile from './components/Profile.vue'
// import Education from './components/Education.vue'
// import Projects from './components/Projects.vue'
// import Skills from './components/skills.vue'
// import Interests from './components/Interests.vue'
// import Certifications from './components/Certifications.vue'
import Footer from './components/footer.vue'
// import Experience from './components/Experience.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, Footer, Profile2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  /* background-image: src("https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"); */
  background-color: #0c0341;
  color: #2c3e50;
  /* margin-top: 60px; */
}

/* width */
::-webkit-scrollbar {
width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
background: #fff;
}

/* Handle */
::-webkit-scrollbar-thumb {
background: #3452ff;
border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: #1e2b8f;
}

/* Add a gradient effect to the scrollbar */
::-webkit-scrollbar-thumb {
background: linear-gradient(to bottom, #3452ff, #1e2b8f);
}

/* Add a border to the scrollbar */
::-webkit-scrollbar {
border: 1px solid #3452ff;
}
</style>
