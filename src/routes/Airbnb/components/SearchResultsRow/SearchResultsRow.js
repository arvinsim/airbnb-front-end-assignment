import styles from './styles.css'

import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { AIRBNB_ROOMS_URL } from 'config/airbnb'

class SearchResultsRow extends Component {
  render () {
    const { data, index } = this.props
    return (
      <Col md={12} className={styles.row}>
        <Col md={2} className={styles.mainPicture}>
          <div className={styles.mainPictureContainer}>
            <img src={data.picture_url} />
            <div className={styles.mainPictureText}>{index}</div>
          </div>
        </Col>
        <Col md={8} className={styles.details}>
          <Col md={12} className={styles.description}>
            <div>
              <span className={styles.name}>
                <a href={AIRBNB_ROOMS_URL + data.id}>{data.name}</a>
              </span>
              {data.favorited ? <div className={styles.favorited} /> : <div className={styles.notFavorited} />}
            </div>
            <div className={styles.address}>{data.address}</div>
          </Col>
          <Col md={4} className={styles.badges}>
            <Col md={2} className={styles.userThumbnail}>
              <img src={data.user_thumb} />
            </Col>
            <Col md={3} className={styles.reviews}>
              <div className={styles.reviewsIcon}>{data.reviews_count}</div>
              <div className={styles.reviewsLabel}>Reviews</div>
            </Col>
            <Col md={3}>
              <div className={styles.friendsIcon}>{data.friends}</div>
              <div className={styles.friendsLabel}>Friends</div>
            </Col>
            {data.super_host &&
            <Col md={3}>
              <div className={styles.superhostIcon}>&nbsp;</div>
              <div className={styles.superhostLabel}>Superhost</div>
            </Col>
                        }
          </Col>
        </Col>
        <Col md={2} className={styles.price}>
          <div className={styles.priceValue}>{data.price_formatted}</div>
          <div className={styles.priceLabel}>Per Night</div>
        </Col>
      </Col>

    )
  }
}

SearchResultsRow.propTypes = {
  data: React.PropTypes.shape({
    id: React.PropTypes.number
  }).isRequired,
  index: React.PropTypes.number
}

export default SearchResultsRow
