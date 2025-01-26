import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => {
    return {count: 0}
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  },
});
