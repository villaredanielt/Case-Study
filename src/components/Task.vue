<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div>
      <!-- Tasks component template content goes here -->
      <h2>Tasks</h2>
      <p>Total Task: {{ this.totalTask }}</p>
      <ul>
        <!-- container of the task -->
        <li v-for="(task, index) in this.tasks" :key="index" >{{ task.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  //displaying of the tasks
  export default {
    data() {
      return {
        tasks: 
          this.$tasks
      };
    }, 
    computed: {
      totalTask(){
        return this.tasks.length
      }
    }
  };
  </script>
  
  <style>

  </style>
  