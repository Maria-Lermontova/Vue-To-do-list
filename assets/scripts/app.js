const app = Vue.createApp ({
  data() {
    return {
      enteredValue: '',
      activeTasks: [],
      finishedTasks: []
    };
  },
  methods: {
    addTask() {
      this.activeTasks.push(this.enteredValue);
      this.enteredValue = '';
    },
    removeTaskToFinished(index) {
      const removedTask = this.activeTasks.splice(index, 1);
      this.finishedTasks.push(removedTask.join());
    },
    reactivateTask(index) {
      const removedTask = this.finishedTasks.splice(index, 1);
      this.activeTasks.push(removedTask.join());
    },
    clearAllActive() {
      this.activeTasks = [];
    },
    clearAllFinished() {
      this.finishedTasks = [];
    }
  }
});

app.mount('#vueApp');