<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import InputValue from './views/InputValue.vue';
import TableContent from './views/TableContent.vue';
import PortfolioView from './views/PortfolioView.vue';
</script>

<template>
      <div class="bg-primary py-2 flex">    
        <div class="items">
          <nav>
            <RouterLink to="/">home</RouterLink>
            <RouterLink to="/input">Input</RouterLink>
            <RouterLink to="/table">Table</RouterLink>
            <RouterLink to="/portfolio">Portfolio</RouterLink>
          </nav>
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

</style>
