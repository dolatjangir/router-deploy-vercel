<template>
  <div class="buttons">  <button class="pages">
      <router-link to="/login">Login Page</router-link></button>
      <button class="pages">
      <router-link to="/signUp">Sign Up Page</router-link></button>
      <button class="pages">
    <router-link to="/weather">check weather</router-link>
  </button >
   
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
.buttons{
  background-color: bisque;
  display: flex;
  flex-direction: row-reverse;
  justify-content:flex-start;
  align-items: center;
  padding: 10px;
  gap: 5px;
}
.pages{

  width: 200px;
  height: 70px;
  font-size: x-large;
  
}
</style>
