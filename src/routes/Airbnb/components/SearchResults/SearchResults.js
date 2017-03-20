import styles from './styles.css'

import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

import SearchResultsRow from '../SearchResultsRow'

export class SearchResults extends Component {
  render () {
    const { results } = this.props
    let searchResults
    if (results.length > 0) {
      searchResults = results.map((item, index) =>
        <SearchResultsRow key={item.id} data={item} index={index + 1} />
      )
    } else {
      searchResults = (
        <div className={styles.noResults}>There are no results.</div>
      )
    }

    return (
      <div>
        <Col md={12} className={styles.numOfResults}>
          <div>{results.length} results</div>
        </Col>
        <div>
          {searchResults}
        </div>
      </div>
    )
  }
}

SearchResults.propTypes = {
  results: React.PropTypes.array
}

export default SearchResults

