<template>
  <nav class="navbar">
    <!-- router to home view -->
    <router-link to="/" class="nav-link">Home</router-link>
    <!-- Router Link To Add Task View -->
    <router-link to="/AddTask" class="nav-link">Add Task</router-link>
    <!-- router to deleting of task -->
    <router-link to="/Delete" class="nav-link">Delete</router-link>
    <!-- router to updating of task -->
    <router-link to="/Update" class="nav-link">Update</router-link>
  </nav>
  <router-view/>
</template>

<style>
.navbar {
  background-color: #343a40;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #495057;
}

.nav-link.router-link-exact-active {
  background-color: #007bff;
}
</style>
