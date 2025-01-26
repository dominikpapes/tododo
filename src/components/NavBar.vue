<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-brand">
      <img src="../assets/logo.svg" />
      {{ title }}
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
