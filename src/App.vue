<template>
  <div id="app">
    <nav-bar />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: { NavBar }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/icon?family=Material+Icons')
#app
  display: flex
  flex-flow: column nowrap
  min-height: 100vh
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
.fade-enter, .fade-leave-to
  opacity: 0
.fade-enter-active
  transition: opacity 0.6s ease
</style>
