import Vue from 'vue'
import Button from './src/button'
import Icon from './src/icon'
import ButtonGroup from './src/button-group'
import Input from './src/input'
import Row from './src/row'
import Col from './src/col'
import Layout from './src/layout'
import Content from './src/content'
import Footer from './src/footer'
import Header from './src/header'
import Sider from './src/sider'
import Toast from './src/toast'
import plugin from './src/plugin'

Vue.use(plugin)

export default {
    components: {'m-button-group': ButtonGroup,
        'm-button': Button,
        'm-icon': Icon,
        'm-input': Input,
        'm-row': Row,
        'm-col': Col,
        'm-layout': Layout,
        'm-header': Header,
        'm-content': Content,
        'm-sider': Sider,
        'm-footer': Footer,
        'm-toast': Toast,
    }

}

