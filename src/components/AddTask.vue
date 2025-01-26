<script setup>
import { ref } from 'vue';

const props = defineProps({
  onAddTask: Function,
});

const newTask = ref('');

function submitTask() {
  if (newTask.value.trim() !== '') {
    props.onAddTask(newTask.value);
    newTask.value = '';
  }
}
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="card p-4 mx-2 mt-5 new-task-container">
      <form @submit.prevent="submitTask">
        <div class="input-group">
          <!-- two way binding: v-model="newTask" -->
          <input
            type="text"
            class="form-control"
            placeholder="Enter a new task"
            aria-label="Enter a new task"
            aria-describedby="button-addon2"
            v-model="newTask"
            required
          />
          <button class="btn btn-dark ml-2" type="submit" id="button-addon2">+</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.new-task-container {
  width: 30rem;
}
</style>
