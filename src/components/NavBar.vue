<template>
  <div
    id="nav-bar"
    v-if="showNav"
  >
    <div
      id="line"
      :style="lineStyle"
    />
    <router-link
      id="logo"
      to="/"
      exact
    ><img src="@/assets/logo.png"></router-link>
    <router-link
      v-for="(link, index) of links"
      :key="link.to"
      :ref="link.name"
      :id="'link' + (index + 1)"
      :to="link.to"
      v-text="link.name"
    />
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      lineReady: false,
      lineToggle: false,
      resizeTimeout: 0,
      links: [
        { to: 'projects', name: 'Projects' },
        { to: 'about', name: 'About' },
        { to: 'contact', name: 'Contact' }
      ]
    }
  },
  mounted () {
    this.setLineReady(true)
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    showNav () {
      return !this.$route.meta.private
    },
    lineStyle () {
      const ref = this.$refs[this.$route.name]
      if (!this.lineReady || !ref) return { top: '45px', left: '110%', width: '0' }
      const rect = ref[0].$el.getBoundingClientRect()
      return {
        top: (window.pageYOffset + (rect.bottom - (rect.height * 0.2))) + 'px',
        left: rect.left + 'px',
        width: rect.width + 'px'
      }
    }
  },
  methods: {
    handleResize (event) {
      this.setLineReady(false)
      if (this.resizeTimeout) clearTimeout(this.resizeTimeout)
      this.resizeTimeout = setTimeout(this.setLineReady, 100, true)
    },
    setLineReady (ready) {
      this.lineReady = ready
    }
  }
}
</script>

<style lang="sass" scoped>
#nav-bar
  flex: 0 0 120px
  display: grid
  grid-template-columns: 200px 1fr 80px 80px 80px
  grid-template-rows: 60px 60px
  grid-template-areas: "logo . link1 link2 link3" "logo . . . ."
#logo
  grid-area: logo
  height: 100%
#link1
  grid-area: link1
#link2
  grid-area: link2
#link3
  grid-area: link3
#line
  position: absolute
  top: 45px
  left: 110%
  height: 2px
  width: 0
  background: #0d1e7c
  transition: top 0.4s ease, left 0.4s ease, width 0.4s ease
a
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
  text-decoration: none
  color: #333333
  transition: color 0.6s ease
  &.router-link-active
    color: #0d1e7c
    cursor: default
img
  width: 100%
  height: 100%
@media screen and (max-width: 480px)
  #nav-bar
      grid-template-columns: 200px 1fr 80px
      grid-template-rows: 40px 40px 40px
      grid-template-areas: "logo . link1" "logo . link2" "logo . link3"
</style>
