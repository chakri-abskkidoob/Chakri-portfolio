<template>
    <div id="main7">
    <h5
      style="
        margin: auto;
        font-weight: bold;
        color: #3452ff;
        border-bottom: 2px solid rgb(155, 152, 152);
      "
    >
      INTERESTS
    </h5>
    <div class="interests">
      <ul>
        <li>
          <i class="fas fa-futbol"></i> Sports
          <div class="popup">
            <p>
              I enjoy playing and watching a variety of sports, including
              cricket, vollleyball, and tennis.
            </p>
          </div>
        </li>
        <li>
          <i class="fas fa-bicycle"></i> Bike riding
          <div class="popup">
            <p>
              I love going on long bike rides and exploring new trails and
              routes.
            </p>
          </div>
        </li>
        <li>
          <i class="fas fa-pen"></i> Blog Writing
          <div class="popup">
            <p>
              I write about a variety of topics on my personal blog, including
              technology, travel, and lifestyle.
            </p>
          </div>
        </li>
        <li>
          <i class="fas fa-newspaper"></i> News Reading
          <div class="popup">
            <p>
              I like to stay informed about current events and read news
              articles from a variety of sources.
            </p>
          </div>
        </li>
        <li>
          <i class="fas fa-music"></i> Music
          <div class="popup">
            <p>
              I enjoy listening to a wide range of music genres, including rock,
              pop, and electronic.
            </p>
          </div>
        </li>
        <li>
          <i class="fas fa-camera"></i> Photography
          <div class="popup">
            <p>
              I like to take photos of landscapes, architecture, and people, and
              experiment with different editing techniques.
            </p>
          </div>
        </li>
        <li>
          <i class="fas fa-hiking"></i> Hiking
          <div class="popup">
            <p>
              I love exploring nature and going on hikes in the mountains and
              forests.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    name : 'InterestsPage'
}
</script>
<style>
#main7 {
  background-color: rgb(25, 25, 25);
  width: 80%;
  margin: auto;
  padding: 4%;
  border-radius: 30px;
  margin-top: 2%;
  border: 2px solid #3452ff;
}

#main7 h5 {
  font-size: 24px;
  margin: 0;
  padding: 20px;
  /* background-color: #f5f5f5; */
  color: #3452ff;
  border-bottom: 2px solid #9b9898;
}

#main7 ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

#main7 li {
  margin: 10px;
  padding: 20px;
  background-color: #a8a0b4;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  flex-basis: calc(33.33% - 20px);
  text-align: center;
}

#main7 li:hover .popup {
  display: block;
}

#main7 .popup {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  z-index: 1;
  text-align: left;
}

#main7 .popup:before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  border: 10px solid transparent;
  border-bottom-color: #fff;
}

#main7 i {
  margin-bottom: 10px;
  font-size: 30px;
  color: #3452ff;
}


/* media queries */
/* For screens smaller than 768px (i.e. tablets) */
@media only screen and (max-width: 767px) {
  #main7{
    border:none;
  }
  .interests ul {
    display: flex;
    flex-direction: column;
  }
  .interests li {
    margin-bottom: 20px;
  }
}

/* For screens smaller than 576px (i.e. mobile phones) */
@media only screen and (max-width: 575px) {
  .interests li {
    display: flex;
    flex-direction: column;
  }
  .interests li .popup {
    position: static;
    opacity: 1;
    visibility: visible;
    margin-top: 10px;
    margin-left: 0;
    padding: 10px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
  }
  .interests li .popup p {
    margin: 0;
  }
}

</style>