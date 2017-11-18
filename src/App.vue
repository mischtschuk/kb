<template>
  <div id="">
    <header class="mainHeader">
      <div class="mainContainer">
        <div class="wrapper">
          <a href="/" class="logo"></a>
          <ul class="mainMenu">
            <li v-for="item in menu">
              <router-link v-bind:to="item.href" exact>
                {{ item.title }}
                <i v-show="item.children.length > 0" class="fa fa-angle-down" aria-hidden="true"></i>
              </router-link>
              <ul class="innerMenu" v-if="item.children.length > 0">
                <li v-for="innerItem in item.children">
                  <router-link v-bind:to="innerItem.href" exact>{{ innerItem.title }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <div class="footer">
      <div class="copyrightRow">
        <div class="mainContainer">
          <div class="wrapper">
            <p class="copyright">&copy; 2017. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      menu: [
        {
          title: 'Home',
          href: '/',
          children: []
        },
        {
          title: 'About Us',
          href: 'about',
          children: [
            {
              title: 'Tournaments we cover',
              href: 'tournaments'
            },
            {
              title: 'Technical features',
              href: 'features'
            }
          ]
        },
        {
          title: 'Contact Us',
          href: 'contact',
          children: []
        }
      ]
    }
  }
}

</script>

<style lang="scss">
  @import 'assets/scss/style.scss';
</style>
