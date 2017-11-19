<template>
  <div id="">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    export default {
      name: 'app',
        components: {
            Header,
            Footer
        }
    }

</script>

<style lang="scss">
  @import 'assets/scss/style.scss';
</style>
