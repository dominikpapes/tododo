<script setup>
import { useTasksStore } from '@/stores/store';

const store = useTasksStore();

</script>

<template>
  <div class="counter-container">
    <div class="card">
      <div class="card-text px-3 py-2">Tasks completed this session: {{ store.count }}</div>
    </div>
  </div>
</template>

<style scoped>
.counter-container {
    position: fixed;
    right: 4rem;
    bottom: 4rem;
}
</style>
