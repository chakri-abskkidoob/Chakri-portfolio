<template>
  <header>
    <div class="left-half">
      <h2>Portfolio.</h2>
      <!-- <h2>Portfolio</h2> -->
    </div>
    <div class="right-half">
      <nav>
        <ul>
          <li>
            <a href="#certification" @mouseover="hoverEffect('certification')" @mouseleave="hoverEffect('')">
              Certification
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    hoverEffect(section) {
      // Add your hover effect code here
      console.log(`Hovering over ${section}`);
    },
  },
};
</script>

<style>
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
}

.right-half {
  text-align: right;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  color:#3452ff;
  text-decoration: none;
  transition: all 0.3s ease;
}

nav a:hover {
  color: rgb(236, 235, 242);
  /* Add your hover effect styling here */
}
</style>