import React, { Component } from 'react'
import Product from './Product'
//sử dụng hàm connect của redux
import { connect } from 'react-redux'

class ListProduct extends Component {
  render() {
    //lấy dữ liệu đã được map để hiển thị trong componet
    console.log("Dữ liệu:", this.props.products);
    let elementProduct = this.props.products.map((item, index) => {
      return <Product key={index} renderProduct={item} />
    })
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {/* PRODUCT : START */}
            {/* <Product />
            <Product />
            <Product />
            <Product /> */}
            {elementProduct}
            {/* PRODUCT : END */}
          </div>
        </div>
      </div>
    )
  }
}

//map state to props
const mapStateToProps = (state) => {
  return {
    products: state.listProduct
  }
}

//connect mapStateToProps với component
export default connect(mapStateToProps, null) (ListProduct);
