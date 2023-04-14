<template>
    <NavigationBar />
    <div>
      <h1>Welcome to my app!</h1>
      <p>This is the home page.</p>
    </div>
  </template>

<script>
import NavigationBar from "../components/NavigationBar.vue";

export default {
  name: "AboutUs",
  components: {
    NavigationBar,
  },
};
</script>