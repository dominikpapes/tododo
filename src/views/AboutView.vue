<script setup>
import TaskCounter from '@/components/TaskCounter.vue';
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="mt-5 w-50">
      <div class="card-body">
        <div class="card-title d-flex flex-column justify-content-center align-items-center">
          <img src="../assets/logo.png" class="logo" />
          <h1 class="text-center">ToDoDo</h1>
        </div>
        <p class="card-text">ToDoDo is an app developed in Vue.js for the puropose of fifth project </p>
      </div>
    </div>
  </div>

  <TaskCounter />

</template>

<style>
.logo {
  width: 15rem;
  height: 15rem;
}
</style>
