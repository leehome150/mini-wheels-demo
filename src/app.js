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


Vue.component('m-button', Button)
Vue.component('m-icon', Icon)
Vue.component('m-button-group', ButtonGroup)
Vue.component('m-input', Input)
Vue.component('m-row', Row)
Vue.component('m-col', Col)
Vue.component('m-layout', Layout)
Vue.component('m-content', Content)
Vue.component('m-footer', Footer)
Vue.component('m-header', Header)
Vue.component('m-sider', Aside)
Vue.component('m-toast', Toast)
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
            this.$toast('弹出内容', {
                closeButton: {
                    text: '关闭',
                    callback: () => {
                    }
                },
                enableHtml: false,
                position: 'top'
            })
        }
    }

})

