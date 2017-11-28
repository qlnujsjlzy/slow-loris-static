<template>

  <yd-layout>
    <yd-navbar slot="navbar" title="个人中心">
      <router-link to="/index" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>


    <yd-cell-group title="">

      <yd-cell-item href="#" arrow type="link" style="height: 80px">
        <img slot="icon" style="padding-left: 10px;height: 1rem;"
             src="http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg">
        <span slot="left">明哥</span>

      </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group title="">

      <yd-cell-item href="#" type="link">
        <i slot="icon" class="demo-icons-like"></i>
        <span slot="left">我的收藏</span>

        <span slot="right"><yd-badge type="danger">8</yd-badge></span>
      </yd-cell-item>

      <yd-cell-item arrow href="tel:400-888-8888" type="a">
        <i slot="icon" class="demo-icons-tel"></i>
        <span slot="left">联系客服</span>

        <span slot="right">400-888-8888</span>
      </yd-cell-item>

      <yd-cell-item href="#" arrow>
        <i slot="icon" class="demo-icons-order"></i>
        <span slot="left">我的订单</span>

        <span slot="right">查看全部订单</span>
      </yd-cell-item>

    </yd-cell-group>



    <yd-tabbar slot="tabbar">
      <yd-tabbar-item title="首页" link="/index" active>
        <yd-icon name="home" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="分类" link="/index" >
        <yd-icon name="type" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="/check">
        <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="/my">
        <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="案例" link="/demo">
        <yd-icon name="type" slot="icon"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </yd-layout>
  </yd-layout>

</template>

<script type="text/babel">
  export default {
    data () {
      return {
        checkedNames: ['Han MeiMei'],
        picked: 'Lucy',
        ydswitch: true
      }
    }
  }
</script>
