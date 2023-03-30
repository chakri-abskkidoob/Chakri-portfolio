<template>
  <header>
    <div class="left-half">
      <h2><router-link :to="'/'" class="route">Portfolio.</router-link></h2>
    </div>
    <div class="right-half">
      <div>
        <router-link :to="'/'" class="route">About</router-link>
      </div>
      <div>
        <router-link :to="'/experience'" class="route">Experience</router-link>
      </div>
      <div>
        <router-link :to="'/education'" class="route">Education</router-link>
      </div>
      <div>
        <router-link :to="'/projects'" class="route">Projects</router-link>
      </div>
      <div>
        <router-link :to="'/certificate'" class="route">Certifications</router-link>
      </div>
      <div>
        <router-link :to="'/interests'" class="route">Interests</router-link>
      </div>
      <div>
        <router-link :to="'/skills'" class="route">Skills</router-link>
      </div>
      <div>
        <router-link :to="'/contact'" class="route">Contact</router-link>
      </div>
    </div>
  </header>
  <router-view></router-view>
  <Footer />
</template>

<script>
import Footer from './components/footer.vue'
export default {
  name: "App",
  components:{
    Footer
  }
};
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
  width: 100%;
  height: 100%;
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

header {
  background-color: #03032c;
  color:#3452ff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-half {
  text-align: left;
  width:50%;
}

.right-half {
  width:50%;
  text-align: right;
  display: flex;
  justify-content: space-between;
}
.route{
    text-decoration: none;
}
.route :hover{
    background-color: rgba(221, 241, 70, 0.605);
    color:white;
    /* box-shadow: 0 0px 10px hsl(193, 92%, 10%); */
    border-radius:5px;
    font-size: 14px;
    padding:5px;
}
</style>
