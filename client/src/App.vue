<template>
  <div id="app">
    <v-app>
     <page-header />
     <img src="./assets/logo.png">
       <main>
        <v-container fluid>
         <router-view></router-view>
        </v-container>
       </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input-group--text-field input {
  border-bottom: 1px solid black;
}
</style>
