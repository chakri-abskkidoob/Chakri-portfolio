<template>
     <div id="main9">
    <h5
      style="
        margin: auto;
        font-weight: bold;
        color: #3452ff;
        border-bottom: 2px solid rgb(155, 152, 152);
      "
    >
      CONTACT ME
    </h5>
    <div class="container">
  <div class="links">
    <a href="https://www.linkedin.com/in/chakravarthi-pasumarthi-84b209219/"><i class="fab fa-linkedin" style="color: #fff;"></i></a>
    <a href="https://github.com/chakri-abskkidoob"><i class="fab fa-github" style="color: #fff;"></i></a>
    <a href="../assetsCHAKRAVARTHI PASUMARTHI Resume.pdf" download=""><i class="far fa-file-alt" style="color: #fff;"></i></a>
  </div>
  <div class="contact-form">
    <h2>Write to me</h2>
    <form>
      <input type="text" placeholder="Name" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</div>
  </div>
</template>
<script>
export default {
    name : 'ContactPage'
}
</script>
<style>
#main9 {
  background-color: rgb(25, 25, 25);
  width: 80%;
  margin: auto;
  padding: 4%;
  border-radius: 30px;
  margin-top: 2%;
  border: 2px solid #3452ff;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 50px auto;
}

.links {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
}

.links a {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  text-decoration: none;
  color: #fff;
  font-size: 24px;
}

.links a:hover {
  color: #ccc;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #3452ff;
  border-radius: 5px;
  font-size: 16px;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #ff6b6b;
}

.contact-form button {
  padding: 10px 20px;
  background-color: #3452ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #ff6b6b;
}
</style>