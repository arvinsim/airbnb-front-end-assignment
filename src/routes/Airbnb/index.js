import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'airbnb',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Airbnb = require('./containers/AirbnbContainer').default
      const reducer = require('./store/airbnb').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'airbnb', reducer })

      /*  Return getComponent   */
      cb(null, Airbnb)

    /* Webpack named bundle   */
    }, 'airbnb')
  }
})
