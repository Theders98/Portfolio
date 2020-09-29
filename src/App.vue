<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
    </div>
        <router-view />
       <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {

  components:{
    Header,
    Footer
  }
}
</script>

