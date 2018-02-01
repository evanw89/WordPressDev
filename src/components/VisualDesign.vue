<template>
    <div>
      <h1 class="z-1">Visual Design</h1>
      <div>
        <h1 class="chevron" v-bind:class="{ flip: isActive }" v-on:click="moreContent"><</h1>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'VisualDesign',
    data () {
      return {
        msg: 'visualDesign',
        isActive: false,
        width: 50
      }
    },
    methods: {
      moreContent: function() {
        this.isActive = !this.isActive;
        if(this.isActive) {
          this.width = 100;
        } else {
          this.width = 50;
        }
        this.$emit("moreContent", this.width);
      }
    }
  }
</script>

<style>


</style>
