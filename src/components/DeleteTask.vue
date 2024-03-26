<template>
  <div class="center">
    <div class="card">
      <div class="delete-task">
        <h2>Delete Task</h2>
        <ul>
          <li v-for="(task, index) in tasks" :key="index">
            {{ task.name }}
            <button @click="deleteTask(index)">Delete Task</button>
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
    deleteTask(index) {
      let confirmDelete = confirm("Delete This Task?");
      if (confirmDelete) {
        this.tasks.splice(index, 1);
      } else {
        alert("Operation Cancelled");
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

.delete-task {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
}

.delete-task ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.delete-task li {
  margin-bottom: 10px;
}

.delete-task button {
  padding: 8px 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-task button:hover {
  background-color: #c82333;
}
</style>
