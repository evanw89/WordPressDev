<template>
  <div class="ready">
    <h1>Take the plunge</h1>
    <div>
      <ul>
        <li v-for="service in services">
          <router-link v-bind:to="service.path" v-on:click.native="readyFalse">
            <h3>{{ service.name }}</h3>
            <p>{{ service.desc }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <router-view class="content" v-bind:style="contentWidth" v-bind:key="$route.path" v-on:moreContent="loadMoreContent($event)"></router-view>
    </transition>
    <router-link class="z-1" v-on:click.native="changeIsActive" to="/" style="position: absolute; top: 20px; left: 20px;">X</router-link>
    <router-link class="z-1" v-on:click.native="readyTrue" to="/ready" style="position: absolute; bottom: 20px; right: 20px;" v-if="!isReady">X</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Ready',
    data () {
      return {
        msg: 'ready',
        isReady: true,
        contentWidth: {
          width: '50%'
        },
        services: [
          {
            name: 'Visual Design',
            desc: '',
            path: '/VisualDesign'
          },
          { 
            name: 'Theme Development',
            desc: '',
            path: '/ThemeDevelopment'
          },
          { 
            name: 'WordPress Conversion', 
            desc: '',
            path: '/WordPressConversion'
          },
          {
            name: 'Easy Editing', 
            desc: '',
            path: '/EasyEditing'
          },
          {
            name: 'PluginSupport',
            desc: '',
            path: '/PluginSupport'
          },
          {
            name: 'SEO/Digital Maintenance', 
            desc: '',
            path: '/DigitalSEO'
          }
        ]
      }
    },
    methods: {
      changeIsActive: function() {
        this.$emit('changeIsActive', false);
      },
      readyTrue: function() {
        this.isReady = true;
      },
      readyFalse: function() {
        this.isReady = false;
        this.loadMoreContent(50);
      },
      loadMoreContent: function(newWidth) {
        this.contentWidth.width = newWidth + '%';
      }
    }
  }
</script>

<style>
  .ready {
    display: block;
    height: 100vh;
    width: 100%;
    color: #FFF;
    text-align: left;
    left: 0;
  }
  .ready > h1:first-child {
    position: absolute;
    bottom: 150px;
    left: 5vw;
    z-index: 1;
  }
  .ready ul {
    position: absolute;
    top: 5vh;
    left: 5vw;
    z-index: 1;
    list-style-type: none;
  }
  .ready ul li {
    margin: 20px 0;
    max-width: 150px;
  }
  .ready ul li:nth-of-type(even) {
    text-align: right;
    animation: dist 1s forwards ease;
  }
  .ready ul li:nth-of-type(odd) {
    text-align: left;
    animation: dist2 1s forwards ease;
  }
  @keyframes dist {
    50% {
      transform: translateX(0) translateY(0);
    }
    100% {
      transform: translateX(-25px) translateY(10vh);
    }
  }
  @keyframes dist2 {
    50% {
      transform: translateX(0) translateY(0);
    }
    100% {
      transform: translateX(175px) translateY(20vh);
    }
  }
  .content {
    position: absolute;
    z-index: 1;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #f97e85ba;
    background-color: rgba(249, 126, 133, 0.73);
    transition: 0.5s ease;
  }
  .content > h1:first-child {
    text-align: right;
    padding: 30px;
  }
  .chevron {
    position: absolute;
    left: 0;
    top: 0;
    height: 35px;
    margin: calc(50vh - 17.5px) 1vw;
    text-align: center;
    transition: 0.8s ease;
  }
  .chevron h1 {
    margin: auto 0;
  }
  .chevron:hover {
    cursor: pointer;
  }
  .flip {
    transform: rotate(-180deg);
  }
  .desc {
    position: absolute;
    left: 50px;
    width: calc(50vw - 100px);
    padding: 25px;
  }
  #shape0[data-v-656039f0].active {
  /*  left: 0;
    top: 0;*/
  /*  height: 100vh;
    width: 100vw;*/
    animation: shift 1.4s forwards;
  }
  @keyframes shift {
    40% {
      transform: rotate(0deg);
    }
    100% {
      background-color: #33B0C6;
      transform: translateX(50%) rotate(0deg);
    }
  }

</style>
