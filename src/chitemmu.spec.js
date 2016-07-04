import { expect } from 'chai'
import { shallow } from 'enzyme'

import React from 'react'

import Chitemmu from './chitemmu'
import * as assets from './assets'


describe('Chitemmu', () => {
  it('renders the component with levels', () => {
    for (let level = 0; level < 6; level++) {
      const wrapper = shallow(<Chitemmu level={level} />)

      expect(wrapper.hasClass('chitemmu'))
      expect(wrapper.find('.chitemmu-level .checked')).to.have.length(level)
      expect(wrapper.find('.chitemmu-level .unchecked')).to.have.length(5 - level)
    }
  })

  it('render level < 0 as 0', () => {
    const wrapper = shallow(<Chitemmu level={-1} />)

    expect(wrapper.find('.chitemmu-level .checked')).to.have.length(0)
    expect(wrapper.find('.chitemmu-level .unchecked')).to.have.length(5)
  })

  it('render level > 5 as 5', () => {
    const wrapper = shallow(<Chitemmu level={6} />)

    expect(wrapper.find('.chitemmu-level .checked')).to.have.length(5)
    expect(wrapper.find('.chitemmu-level .unchecked')).to.have.length(0)
  })

  it('render invalid level as 0', () => {
    const wrapper = shallow(<Chitemmu level={'a'} />)

    expect(wrapper.find('.chitemmu-level .checked')).to.have.length(0)
    expect(wrapper.find('.chitemmu-level .unchecked')).to.have.length(5)
  })
})
