<template>
      <div id="main4">
    <h5
      style="
        margin: auto;
        font-weight: bold;
        color: #3452ff;
        border-bottom: 2px solid rgb(155, 152, 152);
      "
    >
      PROJECTS
    </h5>
    <div id="main4-project">
      <div class="project">
        <img
          src="https://live.api.app.nammaflix.in/nammaflix/file/MEDIA-c54560d5d5834b14a56cce767a354f35"
          style="width: 100%; height: 100%"
          alt="Project 1"
        />
        <div class="overlay">
          <!-- <h3>Clone of Nammaflix</h3> -->
          <!-- <p>An OTT platform which is widely used in Karnataka. From this platform you can watch movies, series, daily serials and you can also listen to motivational speech. It is provided with subscription plans which users have to purchase the plan according to them.</p> -->
          <a href="#">Nammaflix</a>
        </div>
      </div>
      <div class="project">
        <img
          src="https://img.freepik.com/premium-vector/mobile-smartphone-with-food-delivery-app-order-food-online-modern-creative-data-graphic-design-application-flat-style-cartoon-illustration-vector_610956-200.jpg"
          alt="Project 2"
        />
        <div class="overlay">
          <!-- <h3>Project 2</h3>
      <p>Description of project 2.</p> -->
          <a href="#">Food Delivery Services</a>
        </div>
      </div>
      <div class="project">
        <img
          src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZG8teWFzaC13ZWJzaXRlLWJhbm5lci0xMDgwLXgtMTA4MC0zODc0OC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0Ijoib3V0c2lkZSJ9fX0="
          alt="Project 3"
        />
        <div class="overlay">
          <!-- <h3>Project 3</h3>
      <p>Description of project 3.</p> -->
          <a href="#">Beardo.in</a>
        </div>
      </div>
      <div class="project">
        <img
          src="https://live.api.app.nammaflix.in/nammaflix/file/MEDIA-c54560d5d5834b14a56cce767a354f35"
          style="width: 100%; height: 100%"
          alt="Project 1"
        />
        <div class="overlay">
          <!-- <h3>Clone of Nammaflix</h3> -->
          <!-- <p>An OTT platform which is widely used in Karnataka. From this platform you can watch movies, series, daily serials and you can also listen to motivational speech. It is provided with subscription plans which users have to purchase the plan according to them.</p> -->
          <a href="#">Nammaflix</a>
        </div>
      </div><div class="project">
        <img
          src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZG8teWFzaC13ZWJzaXRlLWJhbm5lci0xMDgwLXgtMTA4MC0zODc0OC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0Ijoib3V0c2lkZSJ9fX0="
          style="width: 100%; height: 100%"
          alt="Project 1"
        />
        <div class="overlay">
          <!-- <h3>Clone of Nammaflix</h3> -->
          <!-- <p>An OTT platform which is widely used in Karnataka. From this platform you can watch movies, series, daily serials and you can also listen to motivational speech. It is provided with subscription plans which users have to purchase the plan according to them.</p> -->
          <a href="#">Nammaflix</a>
        </div>
      </div><div class="project">
        <img
          src="https://live.api.app.nammaflix.in/nammaflix/file/MEDIA-c54560d5d5834b14a56cce767a354f35"
          style="width: 100%; height: 100%"
          alt="Project 1"
        />
        <div class="overlay">
          <!-- <h3>Clone of Nammaflix</h3> -->
          <!-- <p>An OTT platform which is widely used in Karnataka. From this platform you can watch movies, series, daily serials and you can also listen to motivational speech. It is provided with subscription plans which users have to purchase the plan according to them.</p> -->
          <a href="#">Nammaflix</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    name : 'ProjectsPage'
}
</script>
<style>
#main4 {
  background-color: rgb(25, 25, 25);
  width: 80%;
  margin: auto;
  padding: 4%;
  border-radius: 30px;
  margin-top: 2%;
  border: 2px solid #3452ff;
}
#main4-project {
  margin: 50px auto;
  max-width: 800px;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px; */
  display: flex;
    flex-wrap: wrap;
}

.project {
  /* background-color: #fff; */
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  position: relative;

  width: 33.33%;
  padding: 10px;
}

.project:hover {
  transform: translateY(-10px);
}

.project img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project h3 {
  margin: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #3452ff;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.project:hover h3 {
  opacity: 1;
}

.project p {
  margin: 10px;
  font-size: 16px;
  color: #888;
  text-align: center;
}

.project a {
  display: block;
  margin: 10px;
  padding: 10px;
  background-color: #3452ff;
  color: #fff;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

.project a:hover {
  background-color: #ff6b6b;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(52, 82, 255, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.project:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
}

.overlay p {
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
}

.overlay a {
  background-color: #fff;
  color: #3452ff;
  border: 2px solid #3452ff;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.overlay a:hover {
  background-color: #3452ff;
  color: #fff;
}



/* media queries */
@media only screen and (max-width: 767px) {
    /* Mobile view */
    #main4{
      border: none;
    }
    .project {
      width: 100%;
    }
  }
  
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    /* Tablet view */
    .project {
      width: 50%;
    }
  }
  
  @media only screen and (min-width: 992px) {
    /* Laptop view */
    .project {
      width: 33.33%;
    }
  }

</style>