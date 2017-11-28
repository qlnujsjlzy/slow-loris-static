<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="首页"></yd-navbar>


    <yd-grids-group  hidden :rows="3" title="产品分类" itemHeight="2.6rem">
      <yd-grids-item>
        <div slot="else" style="text-align: center;">
          <img src="http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg_295x295.jpg" style="height: 1rem;">
        </div>
      </yd-grids-item>
      <yd-grids-item>
        <div slot="else" style="text-align: center;">
          <img src="http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg" style="height: 1rem;">
        </div>
      </yd-grids-item>
      <yd-grids-item>
        <div slot="else" style="text-align: center;">
          <img src="http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg_295x295.jpg" style="height: 1rem;">
        </div>
      </yd-grids-item>
      <yd-grids-item>
        <div slot="else" style="text-align: center;">
          <img src="http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg" style="height: 1rem;">
        </div>
      </yd-grids-item>
      <yd-grids-item>
        <div slot="else" style="text-align: center;">
          <img src="http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg_295x295.jpg" style="height: 1rem;">
        </div>
      </yd-grids-item>
      <yd-grids-item>
        <div slot="else" style="text-align: center;">
          <img src="http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg" style="height: 1rem;">
        </div>
      </yd-grids-item>
    </yd-grids-group>


    <div class="index-list">

      <div class="demo-rollnotice">
        <img src="//st.360buyimg.com/m/images/index/jd-news-tit.png">
        <yd-rollnotice autoplay="2000">
          <yd-rollnotice-item><span style="color:#F00;">&nbsp;荐&nbsp;</span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
          <yd-rollnotice-item><span style="color:#F00;">&nbsp;荐&nbsp;</span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
          <yd-rollnotice-item><span style="color:#F00;">&nbsp;荐&nbsp;</span>京东服饰 早春新品低至7折</yd-rollnotice-item>
        </yd-rollnotice>
      </div>

    </div>

    <yd-infinitescroll :callback="loadList" ref="lsdemo">

      <yd-list theme="3" slot="list">
        <yd-list-item v-for="item in list" type="link" href="/product/1">

          <img slot="img" :src="item.img">
          <span slot="title">{{item.title}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
              <span class="list-del-price">¥{{item.productprice}}</span>
            </div>
            <div>content</div>
          </yd-list-other>
        </yd-list-item>
      </yd-list>

      <!-- 数据全部加载完毕显示 -->
      <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

    </yd-infinitescroll>

    <yd-backtop></yd-backtop>

    <yd-tabbar slot="tabbar">
      <yd-tabbar-item title="首页" link="/index" active>
        <yd-icon name="home" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="分类" link="/index" >
        <yd-icon name="type" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="/check" type="link" tag="购物车">
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
</template>


<script type="text/babel">
  export default {
    data () {
      return {
        page: 1,
        pageSize: 10,
        list: [
          {
            img: 'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
            title: '标题标题标题标题标题',
            marketprice: 56.23,
            productprice: 89.36
          },
          {
            img: 'http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg',
            title: '骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫',
            marketprice: 56.23,
            productprice: 89.36
          },
          {
            img: 'http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg',
            title: '条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖',
            marketprice: 56.23,
            productprice: 89.36
          },
          {
            img: 'http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg',
            title: '夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫',
            marketprice: 56.23,
            productprice: 89.36
          },
          {
            img: 'http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg',
            title: '2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服',
            marketprice: 56.23,
            productprice: 89.36
          },
          {
            img: 'http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg',
            title: '男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男',
            marketprice: 56.23,
            productprice: 89.36
          },
          {
            img: 'http://img1.shikee.com/try/2016/06/03/12173920932544716516.jpg',
            title: 'superman短袖t恤日潮牌男士日韩夏装水洗做旧修身个性短袖t恤衣服',
            marketprice: 56.23,
            productprice: 89.36
          },
          {
            img: 'http://img1.shikee.com/try/2016/09/28/14575020926479478831.jpg',
            title: '买一送二新款青少年潮男大码T恤 学生字半袖修身款衣服半截袖青年',
            marketprice: 56.23,
            productprice: 89.36
          }
        ]
      }
    },
    methods: {
      loadList () {
        this.$http.jsonp('http://list.ydui.org/getdata.php?type=backposition', {
          params: {
            page: this.page,
            pagesize: this.pageSize
          }
        }).then(function (response) {
          setTimeout(() => { // 请求太快了，延迟一下方便看效果！
            const _list = response.body

            this.list = [...this.list, ..._list]

            if (_list.length < this.pageSize || this.page >= 4) {
              // 所有数据加载完毕
              this.$refs.lsdemo.$emit('ydui.infinitescroll.loadedDone')
              return
            }

            // 单次请求数据完毕
            this.$refs.lsdemo.$emit('ydui.infinitescroll.finishLoad')

            this.page++
          }, 1000)
        })
      }
    }
  }
</script>
