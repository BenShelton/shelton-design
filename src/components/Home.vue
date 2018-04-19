<template>
  <div id="home">
    <h1>Welcome to Shelton Design</h1>
    <h2>Software Development & Design Specialist</h2>
    <div id="strengths">
      <div class="strength">
        <i class="material-icons">web</i>
        <p>Full Stack App Design using Cutting Edge Technologies</p>
      </div>
      <div class="strength">
        <i class="material-icons">settings_input_component</i>
        <p>Server & Database Setup & Management</p>
      </div>
      <div class="strength">
        <i class="material-icons">star</i>
        <p>Friendly, Efficient & Professional Service</p>
      </div>
    </div>
    <router-link to="projects">Click here to see some of my previous projects</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="sass" scoped>
#home
  flex: 1 0 auto
  display: flex
  flex-flow: column nowrap
  align-items: center
  justify-content: space-around
  padding: 40px 10px
  background: #0d1e7c
  color: white
h1, h2, #strengths, a
  opacity: 0
  animation: slide-up 0.7s ease-out forwards
  will-change: transform
h1
  animation-delay: 0.3s
h2
  animation-delay: 1.3s
#strengths
  display: flex
  flex-flow: row wrap
  justify-content: space-around
  align-items: center
  animation-delay: 2.3s
.strength
  flex: 1 0 150px
  display: flex
  flex-flow: column nowrap
  justify-content: space-around
  align-items: center
  height: 200px
  margin: 30px
  padding: 20px
  border-radius: 15px
  background: #333333
  line-height: 1.4
.material-icons
  font-size: 48px
  color: #333333
  padding: 10px
  border-radius: 50%
  border: 1px solid white
  background: white
a
  margin-top: 15px
  padding: 15px
  animation-delay: 4s
  border-radius: 12px
  border: 1px solid white
  background: white
  text-decoration: none
  color: #333333
  transition: background 0.15s ease-out, color 0.15s ease-out
  &:hover
    background: transparent
    color: white
@keyframes slide-up
  from
    transform: translateY(100%)
    opacity: 0
  to
    transform: translateY(0)
    opacity: 1
</style>
