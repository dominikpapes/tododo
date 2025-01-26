<script setup>
import { ref, onUnmounted, onMounted, onBeforeUnmount, computed } from 'vue';
import { useTasksStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import AddTask from '@/components/AddTask.vue';
import TaskList from '@/components/TaskList.vue';
import TaskCounter from '@/components/TaskCounter.vue';

const store = useTasksStore();
const router = useRouter();

const pendingTodo = ref([]);
const doneTodo = ref([]);

function addPendingTask(taskText) {
  pendingTodo.value.push({ id: Date.now(), text: taskText, done: false });
}

function checkTask(taskId) {
  let task = pendingTodo.value.filter((t) => t.id === taskId)[0];
  task.done = true;
  pendingTodo.value = pendingTodo.value.filter((t) => t.id !== task.id);
  doneTodo.value.push({ ...task });
  store.count++;
}

function removePendingTask(taskId) {
  pendingTodo.value = pendingTodo.value.filter((t) => t.id !== taskId);
}

function removeDoneTask(taskId) {
  doneTodo.value = doneTodo.value.filter((t) => t.id !== taskId);
}

// mock function for asynchronous data retrieval
async function mockDataFetch() {
  return {
    pending: localStorage.getItem('pending'),
    done: localStorage.getItem('done'),
  };
}

async function setData() {
  const response = await mockDataFetch();
  pendingTodo.value = response.pending ? JSON.parse(response.pending) : [];
  doneTodo.value = response.done ? JSON.parse(response.done) : [];
}

async function sendData() {
  localStorage.setItem('pending', JSON.stringify(pendingTodo.value));
  localStorage.setItem('done', JSON.stringify(doneTodo.value));
}

router.beforeEach((to, from, next) => {
  sendData();
  next();
});

onMounted(() => {
  setData();
  window.addEventListener('beforeunload', handleBeforeUnload);
});

function handleBeforeUnload(event) {
  // event.preventDefault();
  sendData();
}

onUnmounted(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload);
});
</script>

<template>
  <AddTask :onAddTask="addPendingTask" />

  <div class="d-flex flex-wrap justify-content-center">
    <TaskList
      title="Pending"
      :todo="pendingTodo"
      @check-task="checkTask"
      @remove-task="removePendingTask"
    />
    <TaskList title="Done" :todo="doneTodo" @remove-task="removeDoneTask" />
  </div>

  <TaskCounter />
</template>

<style></style>
