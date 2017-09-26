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
      <div class="mainContainer">
        <div class="pageHolder">
          <div class="wrapper">
            <div class="aboutUsHolder">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores assumenda, atque commodi earum exercitationem explicabo illo laboriosam modi praesentium, quaerat quibusdam soluta sunt tenetur veniam. Consequuntur ea laborum recusandae.
              <div class="linkHolder"><a href="#">Read More <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyrightRow">
        <div class="mainContainer">
          <p class="copyright">&copy; 2017. All rights reserved</p>
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
          title: 'XML Feeds',
          href: 'feeds',
          children: [
            {
              title: 'Prematch Feeds',
              href: 'feeds'
            },
            {
              title: 'Consolidated Feeds',
              href: 'feeds/consolidated'
            },
            {
              title: 'Live Feeds',
              href: 'feeds/live'
            },
            {
              title: 'Live Scores & Results',
              href: 'feeds/live-scores'
            },
            {
              title: 'Payouts Feeds',
              href: 'feeds/payouts'
            }
          ]
        },
        {
          title: 'Trading Software',
          href: 'traders',
          children: [
            {
              title: 'Football Trading Software',
              href: 'traders'
            },
            {
              title: 'Tennis Trading Software',
              href: 'traders/tennis'
            }
          ]
        }
      ]
    }
  },
  showMenu: function () {
    console.log('yeah')
  }
}

</script>

<style lang="scss">
  @import 'assets/scss/style.scss';
</style>
