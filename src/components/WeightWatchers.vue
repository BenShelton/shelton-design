<template>
  <div id="weight-watchers">
    <h1>WeightWatchers ProPoints Calculator</h1>
    <form @submit.prevent>
      <label for="protein">Protein:</label>
      <input
        ref="protein"
        name="protein"
        v-model="protein"
        type="number"
        min="0"
        @keyup.enter="focusEl('carbs')"
      >
      <br>
      <label for="carbs">Carbs:</label>
      <input
        ref="carbs"
        name="carbs"
        v-model="carbs"
        type="number"
        min="0"
        @keyup.enter="focusEl('fat')"
      >
      <br>
      <label for="fat">Fat:</label>
      <input
        ref="fat"
        name="fat"
        v-model="fat"
        type="number"
        min="0"
        @keyup.enter="focusEl('fibre')"
      >
      <br>
      <label for="fibre">Fibre:</label>
      <input
        ref="fibre"
        name="fibre"
        v-model="fibre"
        type="number"
        min="0"
      >
      <br>
      <hr>
      <label for="points">ProPoints:</label>
      <input
        class="disabled"
        name="points"
        :value="points"
        type="number"
        readonly
      >
    </form>
  </div>
</template>

<script>
export default {
  name: 'WeightWatchers',
  data () {
    return {
      protein: '',
      carbs: '',
      fat: '',
      fibre: ''
    }
  },
  computed: {
    points () {
      return Math.round(
        (this.protein / 10.99) +
        (this.carbs / 9.17) +
        (this.fat / 3.89) -
        (this.fibre / 34.48)
      )
    }
  },
  methods: {
    focusEl (name) {
      this.$refs[name].focus()
    }
  }
}
</script>

<style lang="sass" scoped>
h1
  margin: 40px 0
form
  border: 1px solid black
  border-radius: 15px
  display: block
  width: 200px
  padding: 20px
  margin: 10px auto
input, label
  display: inline-block
  margin: 5px 0
input
  width: 85px
  border: 1px solid black
  padding: 1px 8px
  margin-left: 5px
label
  width: 70px
  text-align: right
.disabled
  background: #CCCCCC
</style>
