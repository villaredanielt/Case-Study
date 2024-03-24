
<template>
    <div>
      <!-- Tasks component template content goes here -->
      <h2>Update Task</h2>
      <ul>
        <!-- container of the task index -->
        <li v-for="(task, index) in this.tasks" :key="index" >{{ task.name }}  
          <button @click="UpdateTask(index)">Update Task</button>
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

        UpdateTask(index){
            let conf = ("Update Task?");
            if(conf){
                this.tasks[index].name = prompt("Update this task",this.tasks[index].name);
                
            }
        }
      
    }
  };
  
  </script>
  
  <style>
 
  </style>
  