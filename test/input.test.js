import {describe, it, afterEach} from "mocha"

const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.exist
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接受value', () => {
            vm = new Constructor({
                propsData: {
                    value: 'hello'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('hello')
        })
        it('接受disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接受readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接受error', () => {
            vm = new Constructor({
                propsData: {
                    error: '你错了'
                }
            }).$mount()
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持change/input/focus/blur事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                let event = new Event(eventName);
                Object.defineProperty(event, 'target', {value: {value: 'hi'}, enumerable: true})
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })
        })

    })
})