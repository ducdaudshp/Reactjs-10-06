import React, { Component } from 'react'
import Control from './component/Control';
import ListProduct from './component/ListProduct';
import FormProduct from './component/FormProduct';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          productId: "P001",
          productName: "aplusautomation",
          descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 12,
          quantity: 10,
          image: "aplusautomation.jpg"
        },
        {
          productId: "P002",
          productName: "aplus media",
          descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 11,
          quantity: 0,
          image: "aplus-media.jpg"
        },
        {
          productId: "P003",
          productName: "robo fig combo",
          descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 15,
          quantity: 5,
          image: "robo_fig_combo.jpg"
        },
        {
          productId: "P004",
          productName: "target leap frog",
          descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 8,
          quantity: 8,
          image: "target-leap-frog.jpg"
        }
      ]
    }
  }
  render() {
    let { products } = this.state;
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                {/* Control */}
                <Control />
                {/* Control */}
                {/* ListStudent */}
                <ListProduct renderProducts={products} />
                {/* ListStudent */}
              </div>
            </div>
            <div className="col-5 grid-margin">
              {/* form */}
              <FormProduct />
              {/* form */}
            </div>
          </div>
        </div>
      </>
    )
  }
}
