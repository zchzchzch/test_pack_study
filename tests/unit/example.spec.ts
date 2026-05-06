import { shallowMount } from '@vue/test-utils'
import LText from '../../src/components/LText'
import { textDefaultProps } from '../../src/defaultProps'

describe('LText.vue testing', () => {
  const { location } = window
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: '' }
    })
  })
  afterEach(() => {
    window.location = location
  })
  it('default LText render', () => {
     const msg = 'testhhh'
     const props = {
       ...textDefaultProps,
       text: msg
     }
     const wrapper = shallowMount(LText, { props })
     //console.log(wrapper.html())
     //should have right text
     expect(wrapper.text()).toBe(msg)
     //should be default div tag
     expect(wrapper.element.tagName).toBe('DIV')
     //should have certian css attr
     const style = wrapper.attributes().style
     expect(style.includes('font-size')).toBeTruthy()
     //should not have style attr
     expect(style.includes('url')).toBeFalsy()
  })
  it('LText with actionType and url should trigger location href change', async() => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'https://www.xyz.com',
      tag: 'h2'
    }
    const wrapper = shallowMount(LText, { props })
    await wrapper.trigger('click')
    expect(window.location.href).toBe(props.url)
  })
  it('LText with isEditing should not trigger click event', async () => {
    const props = {
      ...textDefaultProps,
      isEditing: true,
      tag: 'h2',
      actionType: 'url',
      url: 'https://www.xyz.com'
    }
    const wrapper = shallowMount(LText, { props })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe(props.url)
  })
})
