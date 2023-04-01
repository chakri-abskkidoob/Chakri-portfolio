<!-- <template>
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
  width:40%;
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
</style> -->





<!-- added sidebar -->

<template>
  <div>
    <header>
      <div class="left-half">
        <div class="menu-toggle" @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </div>
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
    <div class="sidebar" :class="{ 'sidebar-active': sidebarOpen }">
      <div class="close-sidebar" @click="toggleSidebar">
        <i class="fas fa-times"></i>
      </div>
      <div>
        <router-link :to="'/'" class="route" @click="toggleSidebar">About</router-link>
      </div>
      <div>
        <router-link :to="'/experience'" class="route" @click="toggleSidebar">Experience</router-link>
      </div>
      <div>
        <router-link :to="'/education'" class="route" @click="toggleSidebar">Education</router-link>
      </div>
      <div>
        <router-link :to="'/projects'" class="route" @click="toggleSidebar">Projects</router-link>
      </div>
      <div>
        <router-link :to="'/certificate'" class="route" @click="toggleSidebar">Certifications</router-link>
      </div>
      <div>
        <router-link :to="'/interests'" class="route" @click="toggleSidebar">Interests</router-link>
      </div>
      <div>
        <router-link :to="'/skills'" class="route" @click="toggleSidebar">Skills</router-link>
      </div>
      <div>
        <router-link :to="'/contact'" class="route" @click="toggleSidebar">Contact</router-link>
      </div>
    </div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/footer.vue'
export default {
  name: "App",
  components: {
    Footer,
  },
  data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  background-color: #0c0341;
  color: #2c3e50;
  width: 100%;
  height: 100%;
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
  display:flex;
}

.right-half {
  width:40%;
  text-align: right;
  display: flex;
  justify-content: space-between;
}

/* .left-half .menu-toggle{
  display : none;
} */
.route{
    text-decoration: none;
}

.route :hover{
    background-color: rgba(221, 241, 70, 0.605);
    color:white;
    border-radius:5px;
    font-size: 14px;
    padding:5px;
}

.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 200px;
  padding: 20px;
  background-color: #1e2b8f;
  color: #2314ec;
  z-index: 999;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
}

.sidebar a {
  color: #8f6868;
  text-decoration: none;
  margin-bottom: 10px;
  display: block;
}

.sidebar .close-sidebar {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.sidebar.show-sidebar {
  transform: translateX(0%);
}




/* media queries */
@media screen and (min-width: 1025px) {
  .left-half .menu-toggle {
    display: none;
  }
}

@media screen and (max-width: 768px) {
/* Styles to apply when the viewport width is 768px or less */
.left-half {
width: 100%;
text-align: center;
justify-content: space-between;
flex-direction: row-reverse;
}

.right-half {
display: none;
}
.menu-toggle {
display: block;
}
.sidebar {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #8980dbc7;
color: #fff;
z-index: 9999;
transform: translateX(-100%);
transition: transform 0.3s ease-in-out;
}
.sidebar-active {
transform: translateX(0);
}
.close-sidebar {
position: absolute;
top: 10px;
right: 10px;
font-size: 24px;
cursor: pointer;
}
}

@media screen and (max-width: 768px) {
/* Styles to apply when the viewport width is 768px or less */
.left-half {
width: 100%;
text-align: center;
}
.right-half {
display: none;
}
.menu-toggle {
display: block;
}
.sidebar {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #230de6;
color: #fff;
font-size:1.2rem;
z-index: 9999;
transform: translateX(-100%);
transition: transform 0.3s ease-in-out;
}
.sidebar-active {
transform: translateX(0);
}
.close-sidebar {
position: absolute;
top: 10px;
right: 10px;
font-size: 24px;
cursor: pointer;
}
.sidebar div:hover {
  background-color: #3452ff;
  color: #fff;
}
}

</style>

