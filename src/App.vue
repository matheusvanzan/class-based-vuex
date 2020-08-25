<template>
  <div id="app">
    dcontador: {{ contador }}<hr>
    delta: <input type="text" v-model="delta"><br>
    <button @click="incrementar">+</button>
    <button @click="decrementar">-</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import { ContadorStore } from './store'

@Component
export default class App extends Vue {
  contadorStore = getModule(ContadorStore, this.$store)
  delta = 0

  get contador() {
    return this.contadorStore.contador
  }
  incrementar() { 
    this.contadorStore.incrementar(this.delta)
  }
  decrementar() { 
    this.contadorStore.decrementar(this.delta)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 150px;

  input {
    width: 50px;
  }

  button {
    width: 50px;
    margin: 10px 5px;
  }
}
</style>
