<template>

  <div class="home">

    <Navbar></Navbar> 
    <Hero/>
    <Products/>

  </div>


</template>

<script>
// @ is an alias to /src

import Hero from "@/components/Hero.vue";
import Products from "@/section/Products.vue";


export default {
  name: 'Home',
  
  components: {
    Hero,
    Products
    
  }
}
</script>
