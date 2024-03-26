<template>
  <div class="center">
    <div class="card">
      <div class="update-task">
        <h2>Update Task</h2>
        <ul>
          <li v-for="(task, index) in tasks" :key="index">
            {{ task.name }}
            <button @click="updateTask(index)">Update Task</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: this.$tasks
    };
  },
  methods: {
    updateTask(index) {
      let confirmUpdate = confirm("Update Task?");
      if (confirmUpdate) {
        let updatedName = prompt("Update this task", this.tasks[index].name);
        if (updatedName !== null) {
          this.tasks[index].name = updatedName;
        }
      }
    }
  }
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.update-task {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
}

.update-task ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.update-task li {
  margin-bottom: 10px;
}

.update-task button {
  padding: 8px 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.update-task button:hover {
  background-color: #218838;
}
</style>
