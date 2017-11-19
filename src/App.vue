<template>
  <div id="">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
