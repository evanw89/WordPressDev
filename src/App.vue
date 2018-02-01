<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates');
  body, html {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
      margin-bottom: .5rem;
      font-family: inherit;
      font-weight: 500;
      line-height: 1.2;
      color: inherit;
      margin-top: 0;
  }
  h2 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  #app {
  /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;*/
    font-family: 'Montserrat Alternates', sans-serif;
    overflow: hidden;
  }
  .z-1 {
    position: relative;
    z-index: 1;
  }
  .fade-enter-active {
    transition: opacity 1.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .dist-enter-active, .dist-leave-active {
    transition: opacity .5s;
  }
  .dist-enter, .dist-leave-to {
    opacity: 0;
  }
</style>
