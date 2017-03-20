import { searchFormValidate } from 'libs/airbnb'

describe('(Lib) Validation', () => {
  describe('searchFormValidate', () => {
    it('Should return an error object with the location property if location is not set', () => {
      const values = {
        checkin: '3/12/2017',
        checkout: '3/14/2017',
        guests: 6
      }
      expect(searchFormValidate(values)).to.have.property('location')
    })

    it('Should return an error object with the checkout property if checkin is set but checkit is not', () => {
      const values = {
        checkin: '3/12/2017',
        guests: 6
      }
      expect(searchFormValidate(values)).to.have.property('checkout')
    })

    it('Should return an empty error object when everything is set', () => {
      const values = {
        location: 'Spain',
        checkin: '3/12/2017',
        checkout: '3/14/2017',
        guests: 6
      }
      expect(searchFormValidate(values)).to.eql({})
    })
  })
})
