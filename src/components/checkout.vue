<template>
  <yd-layout >
    <yd-navbar slot="navbar" title="结算页">
      <router-link to="/index" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>



    <yd-cell-group title="">

      <yd-cell-item arrow type="link" href="#">
        <span slot="left">收货地址:</span>
        <span slot="right" >李朝阳（187****）山东省济南市天桥区...</span>
      </yd-cell-item>

      <yd-cell-item  type="label">
        <span slot="left" style="padding-right: 10px">支付方式:</span>
        <select slot="right" >
          <option value="2">微信</option>
          <option value="1">支付宝</option>
          <option value="3">财付通</option>
        </select>
      </yd-cell-item>
      <yd-cell-item >
        <span slot="left" style="padding-right: 10px">配送方式:</span>
        <select slot="right" >
          <option value="1">免运费</option>
          <option value="2">到店自提</option>
        </select>
      </yd-cell-item>
      <yd-cell-item>
        <yd-textarea slot="right" placeholder="请输入订单留言（最多50字）" maxlength="50"></yd-textarea>
      </yd-cell-item>
    </yd-cell-group>

    <yd-list theme="4">
      <yd-list-item v-for="item in list">
        <img slot="img" :src=" item.img + '_220x220.jpg' ">
        <span slot="title">{{item.title}}</span>
        <yd-list-other slot="other"  style="padding-top: 20px">
          <div>
            小计:
            <span class="list-price"><em>¥</em>{{item.price}}</span>
          </div>
        </yd-list-other>
        <yd-list-other slot="other">
          <div>
            数量:
            <span class="list-price">12</span>
          </div>
        </yd-list-other>
      </yd-list-item>
      <yd-cell-item >
        <span slot="left">总数量:24</span>
        <span slot="right" style="font-size: .3rem;">总价格:￥678</span>
      </yd-cell-item>
    </yd-list>
    <yd-button size="large" type="primary">立即支付</yd-button>
  </yd-layout>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        checklist1: [1],
        checklist2: [],
        isCheckAll: false
      }
    },
    methods: {
      change (value, isCheckAll) {
        this.isCheckAll = isCheckAll
      },
      checkAll () {
        this.isCheckAll = !this.isCheckAll
        this.$refs.checklistDemo.$emit('ydui.checklist.checkall', this.isCheckAll)
      }
    },
    computed: {
      theme () {
        return this.$route.params.id
      },
      title () {
        return 'Theme' + this.$route.params.id
      },
      list () {
        const arr = [
          {
            img: 'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
            title: '标题标题标题标题标题',
            price: 56.23,
            w_price: 89.36
          },
          {
            img: 'http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg',
            title: '骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫',
            price: 56.23,
            w_price: 89.36
          }
        ]

        return arr
      }
    }
  }
</script>
