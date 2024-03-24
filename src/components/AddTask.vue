<template>
    <div>
      <h2>Add Task</h2>
      <div class="add-task-container">
        <label for="newTask">Add Task:</label>
        <!-- For getting the value of the input for task-->
        <input type="text" id="newTask" v-model="newTask" placeholder="Enter task description">
        <button @click="addTask">Add</button>
       <!-- for displaying error messages -->
        <span v-if="error" class="error-message">{{ error }}</span>
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
      // if the user dont put a value 
      addTask: function() {
        if (this.newTask.trim() === '') {
          this.error = 'Please enter a task description.';
          return;
        }
        this.$tasks.push({name:this.newTask })
        this.error = '';
        this.newTask = '';
      }
    }
  };
  </script>
  
  <style>
  
  </style>
  