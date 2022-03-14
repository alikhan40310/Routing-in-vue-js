<script >
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import InputValue from './views/InputValue.vue';
import TableContent from './views/TableContent.vue';
import Result from './views/Result.vue';
import Jobs from './views/Jobs/Jobs.vue';




export default {
  methods: {
    redirect(){
      this.$router.push('/');
    },
    back(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    },
  }, 
}

</script>

<template>
      <div class="bg-primary py-2 flex">    
        <div class="items">
          <nav>
            <!-- <RouterLink to="/">home</RouterLink> -->
            <RouterLink to="/input">ToDos</RouterLink>
            <RouterLink to="/table">ToDo Retail</RouterLink>
            <RouterLink to="/table/:id">result</RouterLink> 
            <!-- <RouterLink to="/jobs">Jobs</RouterLink> -->
          </nav>
          <!-- <div class="btns">
            <button @click="redirect" class="btn btn-warning">Redirect</button>
            <button @click="back" class="btn btn-warning">Go back</button>
            <button @click="forward" class="btn btn-warning">Forward</button>
          </div> -->
        </div>
      </div>
  <RouterView />
  
</template>

<style>
nav{
  text-transform: capitalize;
}
.flex{
  display: flex;
  align-items: center;
  justify-content: center;
}
nav a{
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  border-radius: 5px;
  padding: 6px 20px;
  display: inline-block;
  margin-left: 10px;
  transition: all 0.5s;

}
nav a.router-link-exact-active {
  color: var(--color-text);
  color: black;
  background-color: #ffc107;
}

nav a:hover {
    background-color: #ffc107;
    color: black;
}
.btns{
  display: flex;
  gap: 20px;
  justify-content: center;
  algin-items: center;
  margin-top: 10px;
}
</style>
