<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style lang="scss">
@import "./src/styles/custom-bootstrap.scss";
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500&display=swap');

body{
  font-family: 'Zilla Slab', serif;
}
span{
  font-size: 1.4em;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
