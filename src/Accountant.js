import React, { Component } from 'react'

export default class Accountant extends Component {
  render() {
    const price = this.props.items.reduce((prev, curr) => prev + curr.price, 0)
    const total = this.props.items.length

    return (
      <div>
        <p>Total items: {total}</p>
        <p>Total price: {price}</p>
      </div>
    )
  }
}
