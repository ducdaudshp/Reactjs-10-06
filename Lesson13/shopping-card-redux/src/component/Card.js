import React, { Component } from 'react'
import CardInfo from './CardInfo'
import CardItem from './CardItem'
import Notify from './Notify'

export default class Card extends Component {
  render() {
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="4%">#</th>
                  <th>Pokemon</th>
                  <th width="15%">Price</th>
                  <th width="4%">Quantity</th>
                  <th width="20%">Subtotal</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {/* CART BODY */}
                <CardItem />
              </tbody>
              <tfoot id="my-cart-footer">
                {/* CART FOOTER */}
                <CardInfo />
              </tfoot>
            </table>
          </div>
        </div>
        <Notify />
      </div>
    )
  }
}
