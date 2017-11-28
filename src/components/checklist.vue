<template>
  <yd-layout>

    <yd-navbar slot="navbar" title="购物车">
      <router-link to="/index" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <yd-checklist v-model="checklist2" ref="checklistDemo" :label="false" :callback="change">
      <yd-checklist-item val="aaa">
        <yd-flexbox style="padding: 15px 0;">
          <img src="//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg"
               class="demo-checklist-img">
          <yd-flexbox-item align="top">
            [aaa] 类似购物车 / 类似购物车<br/>
            [bbb] 南非进口红西柚 6个 单果重约300-330g 新鲜水果
            <p style="color:#F00;">选中值：{{checklist2}}</p>
            <p style="padding: .2rem ">
              <yd-spinner :longpress="false" v-model="spinner1"></yd-spinner>
            </p>
          </yd-flexbox-item>
          <p>
            <yd-icon name="delete" slot="icon"></yd-icon>
          </p>
        </yd-flexbox>
      </yd-checklist-item>
      <yd-checklist-item val="bbb">
        <yd-flexbox style="padding: 15px 0;">
          <img src="//img10.360buyimg.com/n1/jfs/t6925/75/2382158459/437865/f3931d24/598be5b1N24d949fe.jpg"
               class="demo-checklist-img">
          <yd-flexbox-item align="top">
            [bbb] 南非进口红西柚 6个 单果重约300-330g 新鲜水果
            <p style="padding: .2rem ">
              <yd-spinner v-model="spinner2"></yd-spinner>
            </p>
          </yd-flexbox-item>
          <p>
            <yd-icon name="delete" slot="icon"></yd-icon>
          </p>
        </yd-flexbox>
      </yd-checklist-item>
      <yd-checklist-item val="ccc">
        <yd-flexbox style="padding: 15px 0;">
          <img src="//img14.360buyimg.com/n1/jfs/t3232/69/539717695/176729/cf1ff3d8/57baa5d1N901ffea5.jpg"
               class="demo-checklist-img">
          <yd-flexbox-item align="top">
            [ccc] 展卉 越南进口红心火龙果 3个装中果 单果约300~350g 新鲜水果
            <p style="padding: .2rem ">
              <yd-spinner v-model="spinner3"></yd-spinner>
            </p>
          </yd-flexbox-item>
          <p>
            <yd-icon name="delete" slot="icon"></yd-icon>
          </p>
        </yd-flexbox>
      </yd-checklist-item>
      <yd-checklist-item val="aaa1">
        <yd-flexbox style="padding: 15px 0;">
          <img src="//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg"
               class="demo-checklist-img">
          <yd-flexbox-item align="top">
            [aaa] 类似购物车 / 类似购物车<br/>
            [bbb] 南非进口红西柚 6个 单果重约300-330g 新鲜水果
            <p style="padding: .2rem ">
              <yd-spinner :longpress="false" v-model="spinner4"></yd-spinner>
            </p>
          </yd-flexbox-item>
          <p>
            <yd-icon name="delete" slot="icon"></yd-icon>
          </p>
        </yd-flexbox>
      </yd-checklist-item>
      <yd-checklist-item val="bbb1">
        <yd-flexbox style="padding: 15px 0;">
          <img src="//img10.360buyimg.com/n1/jfs/t6925/75/2382158459/437865/f3931d24/598be5b1N24d949fe.jpg"
               class="demo-checklist-img">
          <yd-flexbox-item align="top">
            [bbb] 南非进口红西柚 6个 单果重约300-330g 新鲜水果
            <p style="padding: .2rem ">
              <yd-spinner v-model="spinner5"></yd-spinner>
            </p>
          </yd-flexbox-item>
          <p>
            <yd-icon name="delete" slot="icon"></yd-icon>
          </p>
        </yd-flexbox>
      </yd-checklist-item>
      <yd-checklist-item val="ccc1">
        <yd-flexbox style="padding: 15px 0;">
          <img src="//img14.360buyimg.com/n1/jfs/t3232/69/539717695/176729/cf1ff3d8/57baa5d1N901ffea5.jpg"
               class="demo-checklist-img">
          <yd-flexbox-item align="top">
            [ccc] 展卉 越南进口红心火龙果 3个装中果 单果约300~350g 新鲜水果
            <p style="padding: .2rem ">
              <yd-spinner  v-model="spinner6"></yd-spinner>
            </p>
          </yd-flexbox-item>
          <p>
            <yd-icon name="delete" slot="icon"></yd-icon>
          </p>
        </yd-flexbox>
      </yd-checklist-item>




    </yd-checklist>

    <yd-backtop></yd-backtop>


    <yd-flexbox class="flexbox-title1" slot="bottom" >
      <div style="padding:12px 0 0 12px;" align="center">
        <yd-checkbox v-model="isCheckAll" shape="circle" @click.native="checkAll" val="" ></yd-checkbox>
      </div>
      <yd-flexbox-item style="flex: 2" align="center">
        <p class="flexbox-text2">实付款:￥111</p>
        <p class="flexbox-text2">优惠前:￥121</p>
      </yd-flexbox-item>
      <yd-flexbox-item>
        <div class="flexbox-text1">
          <router-link to="/checkout">去结算({{checklist2.length}})</router-link></div>
      </yd-flexbox-item>
    </yd-flexbox>

  </yd-layout>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        spinner1: 0,
        spinner2: 0,
        spinner3: 0,
        spinner4: 0,
        spinner5: 0,
        spinner6: 0,
        checklist2: [],
        isCheckAll: false
      }
    },
    methods: {
      change (value, isCheckAll) {
        this.isCheckAll = isCheckAll
      },
      checkAll () {
        this.$refs.checklistDemo.$emit('ydui.checklist.checkall', this.isCheckAll)
        this.isCheckAll = !this.isCheckAll
      }
    }
  }
</script>
