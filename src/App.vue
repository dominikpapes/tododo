<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';

const title = 'ToDoDo';
</script>

<template>
  <header>
    <NavBar :title="title" />
  </header>

  <RouterView />
</template>

<style></style>
