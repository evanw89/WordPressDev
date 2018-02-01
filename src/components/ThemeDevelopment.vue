<template>
    <div>
      <h1 class="z-1">Theme Development</h1>
      <div>
        <h1 class="chevron" v-bind:class="{ flip: isActive }" v-on:click="moreContent"><</h1>
        <transition name="fade">
          <div class="desc" v-if="isActive">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum bibendum tortor, eu dapibus velit aliquet non. Fusce cursus eu magna eget hendrerit. Donec at bibendum justo, ut pharetra lectus. Maecenas eu fringilla mauris. Nulla feugiat a nulla mollis malesuada. Vestibulum convallis vestibulum ligula, et lobortis quam dictum ultricies. Nullam lobortis ex ipsum, quis condimentum lacus mattis ut. Morbi sit amet sodales ligula. Nunc nec dapibus turpis. Nulla molestie volutpat commodo. Ut sagittis mi orci, ut dictum ex maximus eget. Curabitur maximus nisl nulla, sed sagittis magna sodales vitae. Curabitur pretium volutpat aliquam. Pellentesque mattis egestas molestie. Vestibulum ipsum magna, pharetra quis odio in, consectetur fringilla ligula.</p> 
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ThemeDevelopment',
    data () {
      return {
        msg: 'themeDev',
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
  .fade-leave-active {
    transition: opacity .3s;
  }
</style>
