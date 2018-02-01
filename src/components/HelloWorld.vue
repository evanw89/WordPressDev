<template>
  <div class="hello">
    <div id="intro" class="container-fluid d-flex">
        <transition name="fade" >
          <div v-if="!isActive" class="flex">
            <h4>Jump-Start Your Small Business</h4>
            <h2>Custom WordPress Development</h2>
            <router-link v-on:click.native="isActive = !isActive" to='/ready'><h1 id="ready">Ready to work?</h1></router-link>
          </div>
        </transition>
        <transition name="dist">
          <router-view v-if="isActive" style="position: absolute;" v-on:changeIsActive="updateIsActive($event)"></router-view>
        </transition>
      </div>
      <div id="shape0" v-bind:class="{'active': isActive}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HOME',
      isActive: false
    }
  },
  methods: {
    updateIsActive: function(boolean) {
      this.isActive = boolean;
    } 
  }
}
</script>

<style scoped>
#intro {
  display: flex;
  height: 100vh;
  width: 100vw;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-image: url("../assets/desknight.jpeg");
  background-size: cover;
  background-position: 100% 100%;
  transition: 0.5s ease;
}
#intro div.flex {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column-reverse;
  padding: 0 6rem;
  text-align: right;
  color: #FFF;
}
#intro h4 {
  margin-bottom: 6rem;
}
#intro #ready {
  position: relative;
  z-index: 1;
  margin-bottom: 3rem;
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
  white-space: nowrap;
}
#intro #ready::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: -10px;
  background-color: tomato;
  mix-blend-mode: exclusion;
  width: 70%;
  height: 3px;
  opacity: 0.8;
  transition: 0.3s ease;
}
#intro #ready:hover::before {
  right: -5%;
  width: 95%;
  height: 130%;
}
#shape0 {
  background-color: tomato;
  position: absolute;
  top: -100%;
  left: -150%;
  height: 200%;
  width: 200%;
  transform: rotate(-45deg);
  mix-blend-mode: exclusion;
  opacity: 0.7;
  transition: 0.7s;
}

</style>
