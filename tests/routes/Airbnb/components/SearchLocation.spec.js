import React from 'react'
import SearchLocation from 'routes/Airbnb/components/SearchLocation'
import { mount } from 'enzyme'

describe('(View) SearchLocation', () => {
  let _placeholder_text, _error, _props, _wrapper

  beforeEach(() => {
    _placeholder_text = 'Test Placeholder'
    _error = 'Location is required'
    _props = {
        input: {},
        meta: {
            touched: false,
            error: ''
        },
        placeholder: _placeholder_text
    }
    _wrapper = mount(<SearchLocation {..._props} />)
  })

  it('Has input text with placeholder text', () => {
    expect(_wrapper.find('input')).exists
    expect(_wrapper.find('input').props().placeholder).to.equal(_placeholder_text)
  })

  it('Has submit button', () => {
    expect(_wrapper.find('button')).exists
    expect(_wrapper.find('button').props().type).to.equal('submit')
  })

  it('Shows error when input text is touched', () => {
    _wrapper.setProps({
        meta: {
            touched: true,
            error: _error
        }
    })
    expect(_wrapper.find('label').text()).to.equal(_error)
  })
})
