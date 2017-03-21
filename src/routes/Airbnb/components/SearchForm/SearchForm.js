import styles from './styles.css'

import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

// Validation
import { searchFormValidate } from '../../libs/airbnb'

// Components
import SearchDatePicker from '../SearchDatePicker'
import SearchLocation from '../SearchLocation'
import SearchNumberOfGuests from '../SearchNumberOfGuests'

class SearchForm extends Component {
  render () {
    const { handleSubmit, searchLocationPlaceholder } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Col md={12} className={styles.form}>
          <Col md={8} className={styles.location}>
            <Field name='location' component={SearchLocation} placeholder={searchLocationPlaceholder} />
          </Col>
          <Col md={4} className={styles.filters}>
            <Col md={4}>
              <Field name='checkin' label='Check in' component={SearchDatePicker} />
            </Col>
            <Col md={4}>
              <Field name='checkout' label='Check out' component={SearchDatePicker} />
            </Col>
            <Col md={4}>
              <Field name='guests' label='Guests' component={SearchNumberOfGuests} />
            </Col>
          </Col>
        </Col>
      </form>
    )
  }
}

SearchForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  searchLocationPlaceholder: React.PropTypes.string
}

export default reduxForm({
  form: 'airbnbSearch',
  validate: searchFormValidate
})(SearchForm)
