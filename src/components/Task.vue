<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="center">
    <div class="card">
      <div class="tasks">
        <h2>Tasks</h2>
        <p>Total Task: {{ totalTask }}</p>
        <ul>
          <li v-for="(task, index) in tasks" :key="index" :style="{ 'text-decoration': task.completed ? 'line-through' : 'none' }">
            <input type="checkbox" v-model="task.completed"> <!-- Checkbox added -->
            <label>{{ task.name }}</label>
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
  computed: {
    totalTask() {
      return this.tasks.filter(task => !task.completed).length;
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

.tasks {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
}

.tasks ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.tasks li {
  margin-bottom: 10px;
}

/* Style for the checkbox */
.tasks li input[type="checkbox"] {
  margin-right: 10px;
}
</style>
