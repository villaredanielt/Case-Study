<template>
  <div class="center">
    <div class="card">
      <div class="add-task">
        <h2>Add Task</h2>
        <div class="add-task-container">
          <label for="newTask">Task Description:</label>
          <input type="text" id="newTask" v-model="newTask" placeholder="Enter task description">
          <button @click="addTask">Add</button>
        </div>
        <span v-if="error" class="error-message">{{ error }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      error: ''
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === '') {
        this.error = 'Please enter a task description.';
        return;
      }
      this.$tasks.push({ name: this.newTask });
      this.error = '';
      this.newTask = '';
      alert('Task added successfully!');
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
  padding: 30px; /* Increased padding */
}

.add-task {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px; /* Adjusted padding */
}

.add-task-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Added margin for spacing */
}

.add-task-container label {
  margin-right: 10px;
}

.add-task-container input[type="text"] {
  flex: 1;
  padding: 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.add-task-container button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-task-container button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
