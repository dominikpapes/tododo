<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  title: String,
  todo: Array,
});

const computedTitle = computed(() => {
  return props.title === 'Pending' ? '⏳' : '🏆';
});

const emit = defineEmits(['checkTask', 'removeTask']);
</script>

<template>
  <div class="card mx-2 mt-5 list-container">
    <div class="card-body">
      <template v-if="todo.length > 0">
        <div class="card-title h4">{{ computedTitle }} {{ title }} : {{ todo.length }}</div>
        <ul class="list-group">
          <li class="list-group-item" v-for="task in todo" :key="task.id">
            <!-- emitiranje doagadaja -->
            <div class="d-flex justify-content-between align-items-center">
              <span
                v-if="title === 'Pending'"
                class="mx-1 checkbox"
                @click="$emit('checkTask', task.id)"
              >
                ☐
              </span>
              <span v-if="title === 'Done'" class="mx-1 checkbox"> 🗹 </span>
              <span class="h5 text-break mx-2"> {{ task.text }} </span>
              <button class="btn btn-dark" @click="$emit('removeTask', task.id)">X</button>
            </div>
          </li>
        </ul>
      </template>

      <template v-else>
        <template v-if="title === 'Pending'">
          <div class="card-title h4">No pending tasks.</div>
          <div class="card-text h5">Add a new task to get started!</div>
        </template>
        <template v-else>
          <div class="card-title h4">No completed tasks.</div>
          <div class="card-text h5">Add a new task to get started!</div>
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>
.list-container {
  width: 30rem;
}

.checkbox {
  font-size: xx-large;
  cursor: pointer;
  transition: transform 0.2s;
}

.checkbox:hover {
  transform: scale(1.5);
}
</style>
