<template>
  <div class="about">
    <AddTask></AddTask>
  </div>
</template>

<script>
// @ is an alias to /src
import AddTask from '@/components/AddTask.vue'


export default {
  name: 'HomeView',
  components: {
    AddTask
   
  }
}
</script>
