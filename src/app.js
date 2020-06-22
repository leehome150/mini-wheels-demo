import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Aside from './sider'
import Toast from './toast'
import plugin from './plugin'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-header', Header)
Vue.component('g-sider', Aside)
Vue.component('g-toast', Toast)
Vue.use(plugin)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'eason'
    },
    created() {

    },
    methods: {
        showToast() {
            this.$toast('我是toast', {
                closeButton: {
                    text: '关闭',
                    callback: () => {
                        console.log('传过去了')
                    }
                },
                enableHtml: false,
                position: 'middle'
            })
        }
    }

})

