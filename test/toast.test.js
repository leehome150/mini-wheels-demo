import {describe, it} from "mocha"

const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'


Vue.config.productionTip = false
Vue.config.devtools = false


describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })

})
describe('props', function () {
    it('接受autoClose', (done) => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                autoClose: true,
                autoCloseDelay: 1
            }
        }).$mount(div)
        vm.$on('close', () => {
            expect(document.body.contains(vm.$el)).to.eq(false)
            done()
        })
    })
    it('接受closeButton', () => {
        const callback = sinon.fake()
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                closeButton: {
                    text: '点我',
                    callback,
                }

            }
        }).$mount()
        let closeButton = vm.$el.querySelector('.close')
        expect(closeButton.textContent.trim()).to.eq('点我')
        closeButton.click()
        expect(callback).to.have.been.called
    })
    it('接受enableHtml', () => {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                enableHtml: true
            }
        })
        vm.$slots.default = [`<strong id="test">hello</strong>`]
        vm.$mount()
        let strong = vm.$el.querySelector('#test')
        expect(strong).to.exist

    })
    it('接受position', () => {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                position: 'bottom'
            }
        }).$mount()
        expect(vm.$el.classList.contains('position-bottom')).to.eq(true)

    })
})