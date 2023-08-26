import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    console.log("Product:",this.props.renderProduct);
    let product = this.props.renderProduct;
    //tùy vào số lượng: nếu lớn hơn 0 mthif mới cho mua hàng
    let elementBuy = "";
    if(product.quantity > 0) {
      elementBuy = (
        <>
        <input
            name="quantity-product-1"
            type="number"
            defaultValue={1}
            min={1}
          />
          <button data-product={1} className="btn btn-success">
            Mua hàng
          </button>
          <a data-product={1} href="#" className="price">
            {product.price} USD
          </a>
        </>
      )
    } else {
      elementBuy = <>
      <span class='price'> 12 USD</span>
      </>
    }
    return (
        <div className="media product">
        <div className="media-left">
          <a href="#">
            <img
              className="media-object"
              src={`images/${product.image}`}
              alt="charmander"
            />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{product.productName}</h4>
          <p>
            {product.descriptions}
          </p>
          {/* <input
            name="quantity-product-1"
            type="number"
            defaultValue={1}
            min={1}
          />
          <button data-product={1} className="btn btn-success">
            Mua hàng
          </button>
          <a data-product={1} href="#" className="price">
            {" "}
            {product.price} USD{" "}
          </a> */}
          {elementBuy}
        </div>
      </div>
    )
  }
}
