import React from 'react'
import styles from './Org.css' // eslint-disable-line

class Org extends React.Component {
  render() {
    return (
      <div className='org'>
              <h2>{this.props.id} {this.props.name}</h2>
              <p>{this.props.town} {this.props.county} {this.props.postcode} {this.props.web}</p>
              <p><b>Products:</b> {this.props.products_summary} <b>Types:</b> {this.props.produce_type} <b>Online ordering:</b> {this.props.online_ordering}</p>
              <p><b>Delivery:</b> {this.props.delivery} <b>New customers?:</b> {this.props.new_customers} <b>Access during pandemic:</b> {this.props.access_pandemic}</p>
              <p><b>Workers:</b> {this.props.workers} <b>Supplies:</b> {this.props.supply} <b>Networks:</b> {this.props.network}</p>
      </div>
    )
  }
}

export default Org
