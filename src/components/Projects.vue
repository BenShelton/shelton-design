<template>
  <div id="projects">
    <div id="work">
      <h2>Work</h2>
      <a
        class="item"
        href="https://www.avcleaningservices.co.uk/"
        target="_blank"
      >
        <img
          src="https://www.avcleaningservices.co.uk/static/images/logo.png"
          alt="AV Cleaning Services Logo"
        >
        <h3>AV Cleaning Services</h3>
        <p>Website built using Vue + Vuetify</p>
        <i class="material-icons">open_in_new</i>
      </a>
    </div>
    <div id="articles">
      <h2>Articles</h2>
      <a
        class="item"
        href="http://bit.ly/2J6rvD2"
        target="_blank"
      >
        <img
          class="cover"
          src="https://uploads.toptal.io/blog/cover_image/120591/list_top_cover-0418_Nuxt_Luke-Cover-387a18590fb6844bbce0be99d2247438.png"
          alt="Nuxt Article Cover"
        >
        <h3>Creating Server-side Rendered Vue.js Apps Using Nuxt.js</h3>
        <p>Article written for the Toptal Engineering Blog</p>
        <i class="material-icons">open_in_new</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style lang="sass" scoped>
#projects
  display: flex
  flex-flow: row nowrap
  flex: 1 0 100%
  color: #0d1e7c
#work, #articles
  display: flex
  flex-flow: row wrap
  align-content: flex-start
  justify-content: space-around
  flex: 0 0 50%
  > h2
    flex: 1 0 100%
#articles
  border-left: 1px solid #0d1e7c
.item
  display: flex
  flex-flow: column nowrap
  justify-content: space-around
  align-items: center
  position: relative
  flex: 0 0 250px
  height: 250px
  padding: 30px 20px
  border-radius: 12px
  border: 1px solid #0d1e7c
  color: #333333
  text-decoration: none
  transition: background 0.15s ease-out, color 0.15s ease-out
  &:hover
    background: #0d1e7c
    color: white
img
  max-width: 100%
  height: 50%
.cover
  object-fit: cover
i
  position: absolute
  top: 5px
  right: 5px
@media screen and (max-width: 600px)
  #projects
    flex-flow: column nowrap
  #articles
    border-left: none
</style>
