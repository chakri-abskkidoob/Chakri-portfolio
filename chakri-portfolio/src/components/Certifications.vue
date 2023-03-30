<template>
     <div id="main6">
    <h5
      style="
        margin: auto;
        font-weight: bold;
        color: #3452ff;
        border-bottom: 2px solid rgb(155, 152, 152);
      "
    >
      CERTIFICATIONS
    </h5>
    <div class="certifications">
      <ul>
        <li>Full stack Web Development
            <p>lerantlkmlmlmlkmkmklmkmklmkl</p>
        </li>
        <li>ARC International Internship
            <p>lerantlkmlmlmlkmkmklmkmklmkl</p>
        </li>
        <li>Cybersecurity Awareness Training
            <p>lerantlkmlmlmlkmkmklmkmklmkl</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    name : "CertificationsPage",
}
</script>
<style>
#main6 {
  background-color: rgb(25, 25, 25);
  width: 80%;
  margin: auto;
  padding: 4%;
  border-radius: 30px;
  margin-top: 2%;
  border: 2px solid #3452ff;
}

certifications ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.certifications li {
  font-size: 18px;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  color: #ccc;
}

.certifications li:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
</style>