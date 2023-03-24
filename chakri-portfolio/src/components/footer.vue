<template>
  <footer class="footer">
  <button class="back-to-top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' });"><i class="fas fa-arrow-up"></i></button>
  <p>&copy; 2023 Chakri. All rights reserved.</p>
</footer>
</template>

<script>
export default{
  name : 'FooterPage'
}
</script>

<style>
.footer {
  margin-top: 20px;
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-to-top {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #3452ff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}

.back-to-top:hover {
  background-color: #ff6b6b;
}

@media screen and (min-width: 768px) {
  .back-to-top {
    display: block;
  }
}
</style>