import styles from './styles.css'

import React from 'react'
import {
  FormControl,
  Button,
  InputGroup,
  FormGroup,
  ControlLabel
} from 'react-bootstrap'

const SearchLocation = ({ input, placeholder, meta: { touched, error } }) => (
  <div>
    <FormGroup>
      <InputGroup>
        <FormControl {...input} className={styles.textInput} componentClass='input' placeholder={placeholder} />
        <InputGroup.Button>
          <Button type='submit' bsStyle='primary' className={styles.button}>
            Search <div className={styles.icon}>&nbsp;</div>
          </Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
    {touched && (error && <ControlLabel>{error}</ControlLabel>)}
  </div>
)

SearchLocation.propTypes = {
  input: React.PropTypes.object,
  placeholder: React.PropTypes.string,
  meta: React.PropTypes.object
}

export default SearchLocation
