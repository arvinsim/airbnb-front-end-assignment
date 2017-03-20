import styles from './styles.css'

import React, { Component } from 'react'
import moment from 'moment'
import { ControlLabel } from 'react-bootstrap'

// React DatePicker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

class SearchDatePicker extends Component {
  render () {
    const { input, label, meta: { touched, error } } = this.props
    return (
      <div>
        <ControlLabel className={styles.label}>{label}</ControlLabel>
        <DatePicker
          {...input}
          selected={input.value ? moment(input.value) : null}
          className={styles.datepicker + ' ' + 'form-control'}
        />
        {touched && (error && <ControlLabel className={styles.error}>{error}</ControlLabel>)}
      </div>
    )
  }
}

SearchDatePicker.propTypes = {
  input: React.PropTypes.object,
  label: React.PropTypes.string,
  meta: React.PropTypes.object
}

export default SearchDatePicker
