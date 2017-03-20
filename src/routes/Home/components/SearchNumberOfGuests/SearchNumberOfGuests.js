import styles from './styles.css'

import React from 'react'
import { ControlLabel, FormControl } from 'react-bootstrap'

// Config
import { MAX_NUMBER_OF_GUESTS } from 'config/airbnb'

const SearchNumberOfGuests = ({ input, label, meta: { touched, error } }) => (
  <div>
    <ControlLabel className={styles.label}>{label}</ControlLabel>
    <div>
      <FormControl className={styles.dropdown} componentClass='select' placeholder='select' {...input}>
        {Array.apply(null, Array(MAX_NUMBER_OF_GUESTS)).map(function (item, i) {
          return (
            <option key={i + 1}>{i + 1}</option>
          )
        }, this)}
      </FormControl>
    </div>
  </div>
)

SearchNumberOfGuests.propTypes = {
  input: React.PropTypes.object,
  label: React.PropTypes.string,
  meta: React.PropTypes.object
}

export default SearchNumberOfGuests
