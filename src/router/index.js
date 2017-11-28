import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import Index from '@/components/index'
import Product from '@/components/product'
import Checklist from '@/components/checklist'
import Checkout from '@/components/checkout'
import MyCenter from '@/components/mycenter'

import IndexDemo from '@/components/routers/index'
import Button from '@/components/routers/button'
import Dialog from '@/components/routers/dialog'
import Cell from '@/components/routers/cell'
import Grids from '@/components/routers/grids'
import Icons from '@/components/routers/icons'
import List from '@/components/routers/list'
import ListTheme from '@/components/routers/list.theme'
import ListInfinitescroll from '@/components/routers/list.infinitescroll'
import ListPullRefresh from '@/components/routers/list.pullrefresh'
import listCombination from '@/components/routers/list.combination'
import Badge from '@/components/routers/badge'
import AsideBar from '@/components/routers/asidebar'
import TabBar from '@/components/routers/tabbar'
import NavBar from '@/components/routers/navbar'
import Tabs from '@/components/routers/tabs'
import Tab from '@/components/routers/tab'
import ScrollTab from '@/components/routers/scrolltab'
import ActionSheet from '@/components/routers/actionsheet'
import SendCode from '@/components/routers/sendcode'
import ProgressBar from '@/components/routers/progressbar'
import KeyBoard from '@/components/routers/keyboard'
import Slider from '@/components/routers/slider'
import Spinner from '@/components/routers/spinner'
import CitySelect from '@/components/routers/cityselect'
import CountDown from '@/components/routers/countdown'
import Rate from '@/components/routers/rate'
import Popup from '@/components/routers/popup'
import CountUp from '@/components/routers/countup'
import RollNotice from '@/components/routers/rollnotice'
import Input from '@/components/routers/input'
import FlexBox from '@/components/routers/flexbox'
import CR from '@/components/routers/cr'
import Switch from '@/components/routers/switch'
import Radio from '@/components/routers/radio'
import CheckBox from '@/components/routers/checkbox'
import BackTop from '@/components/routers/backtop'
import Accordion from '@/components/routers/accordion'
import DateTime from '@/components/routers/datetime'
import LightBox from '@/components/routers/lightbox'
import TimeLine from '@/components/routers/timeline'
import Step from '@/components/routers/step'
import CheckList from '@/components/routers/checklist'
import Search from '@/components/routers/search'

import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/ydui.flexible.js'

Vue.use(VueRouter)
Vue.use(Resource)
Vue.use(YDUI)
Vue.use(Vuex)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/product/:code',
      name: 'product',
      component: Product
    },
    {
      path: '/check',
      name: 'Check',
      component: Checklist
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/my',
      name: 'MyCenter',
      component: MyCenter
    },
    {
      path: '/demo',
      name: 'index',
      component: IndexDemo
    },
    {path: '/', name: 'index', component: Index},
    {path: '/button', name: 'button', component: Button},
    {path: '/dialog', name: 'dialog', component: Dialog},
    {path: '/cell', name: 'cell', component: Cell},
    {path: '/grids', name: 'grids', component: Grids},
    {path: '/icons', name: 'icons', component: Icons},
    {path: '/list', name: 'list', component: List},
    {path: '/list.theme/:id', name: 'list.theme/:id', component: ListTheme},
    {path: '/list.infinitescroll', name: 'list.infinitescroll', component: ListInfinitescroll},
    {path: '/list.pullrefresh', name: 'list.pullrefresh', component: ListPullRefresh},
    {path: '/list.combination', name: 'list.combination', component: listCombination},
    {path: '/badge', name: 'badge', component: Badge},
    {path: '/asidebar', name: 'asidebar', component: AsideBar},
    {path: '/tabbar', name: 'tabbar', component: TabBar},
    {path: '/navbar', name: 'navbar', component: NavBar},
    {path: '/tabs', name: 'tabs', component: Tabs},
    {path: '/tab', name: 'tab', component: Tab},
    {path: '/scrolltab', name: 'scrolltab', component: ScrollTab},
    {path: '/actionsheet', name: 'actionsheet', component: ActionSheet},
    {path: '/sendcode', name: 'sendcode', component: SendCode},
    {path: '/progressbar', name: 'progressbar', component: ProgressBar},
    {path: '/keyboard', name: 'keyboard', component: KeyBoard},
    {path: '/slider', name: 'slider', component: Slider},
    {path: '/spinner', name: 'spinner', component: Spinner},
    {path: '/cityselect', name: 'cityselect', component: CitySelect},
    {path: '/countdown', name: 'countdown', component: CountDown},
    {path: '/rate', name: 'rate', component: Rate},
    {path: '/popup', name: 'popup', component: Popup},
    {path: '/countup', name: 'countup', component: CountUp},
    {path: '/rollnotice', name: 'rollnotice', component: RollNotice},
    {path: '/input', name: 'input', component: Input},
    {path: '/flexbox', name: 'flexbox', component: FlexBox},
    {path: '/cr', name: 'C&R', component: CR},
    {path: '/switch', name: 'switch', component: Switch},
    {path: '/radio', name: 'radio', component: Radio},
    {path: '/checkbox', name: 'checkbox', component: CheckBox},
    {path: '/backtop', name: 'backtop', component: BackTop},
    {path: '/accordion', name: 'accordion', component: Accordion},
    {path: '/datetime', name: 'datetime', component: DateTime},
    {path: '/lightbox', name: 'lightbox', component: LightBox},
    {path: '/timeline', name: 'timeline', component: TimeLine},
    {path: '/step', name: 'step', component: Step},
    {path: '/checklist', name: 'checklist', component: CheckList},
    {path: '/search', name: 'search', component: Search}
  ]
})
