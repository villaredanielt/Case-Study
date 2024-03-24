<template>
    <div>
      <!-- Tasks component template content goes here -->
      <h2>Delete Task</h2>
      <ul>
        <!-- container of the task index -->
        <li v-for="(task, index) in this.tasks" :key="index" >{{ task.name }}  
          <button @click="DeleteTask(index)">Delete Task</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: 
          this.$tasks
      }; 
    },
    //confirmation for deleting task
    methods: {
      DeleteTask(index)
      {
        let conf = confirm("Delete This Task?");
        if(conf ){
          this.$tasks = this.tasks.splice(index, 1);
        
        }else
        alert("Operation Cancel");
      }
    }
  };
  
  </script>
  
  <style>
 
  </style>
  