import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitToAirBnb } from '../store/airbnb'
import SearchForm from '../components/SearchForm'

class SearchFormContainer extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <SearchForm onSubmit={handleSubmit} {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    searchLocationPlaceholder: 'San Francisco, CA'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (values) => {
      dispatch(submitToAirBnb(values.location, values.checkin, values.checkout, values.guests))
    }
  }
}

SearchFormContainer.propTypes = {
  searchLocationPlaceholder: React.PropTypes.string,
  handleSubmit: React.PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFormContainer)
