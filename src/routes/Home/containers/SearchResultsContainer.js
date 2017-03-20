import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAirBnbData } from 'store/airbnb'
import SearchResults from '../components/SearchResults'

export class SearchResultsContainer extends Component {
  componentDidMount () {
    this.props.loadData()
  }

  render () {
    return (
      <SearchResults results={this.props.results} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    results: state.airbnb.results
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: () => {
      dispatch(fetchAirBnbData())
    }
  }
}

SearchResultsContainer.propTypes = {
  loadData: React.PropTypes.func,
  results: React.PropTypes.array
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsContainer)
