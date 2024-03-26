<template>
  <div class="container">
    <div class="card">
      <nav class="navbar">
        <!-- Home Link -->
        <router-link to="/" class="nav-link">Home</router-link>
        <!-- Add Task Link -->
        <router-link to="/AddTask" class="nav-link">Add Task</router-link>
        <!-- Delete Task Link -->
        <router-link to="/Delete" class="nav-link">Delete Task</router-link>
        <!-- Update Task Link -->
        <router-link to="/Update" class="nav-link">Update Task</router-link>
      </nav>
    </div>
  </div>
  <router-view/>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.navbar {
  padding: 10px 0;
}

.nav-link {
  font-weight: bold;
  color: #343a40;
  text-decoration: none;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #f0f0f0;
}

.nav-link.router-link-exact-active {
  background-color: #007bff;
  color: #fff;
}
</style>
