<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <span class="home"
        @click="navigateTo({name: 'root'})">
        Data Collection
        </span>
    </v-toolbar-title>

    <!--  TODO: EDIT to determine what this will be
     <v-toolbar-items>
       <v-btn flat dark>
         Menu
       </v-btn>
     </v-toolbar-items> -->

    <v-spacer></v-spacer>
     <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat dark
        @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat dark
        @click="navigateTo({name: 'login'})">
      Log In
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
