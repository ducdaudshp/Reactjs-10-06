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
      ],

      isToggle: false, //quản lý trạng thái ẩn hiện form
      actionName: "", // thuộc tính xử lý hiển thị nút submit trên form
      product: {}, //quản lý đối tượn dữ liệu cho Form
    }
  }

  //xử lý sự kiện
  handleAddOrUpdate = (toggle, actionName, product) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
      product: product
    })
  }

  //hàm xử lý sự kiện sunmit Form
  handleSubmit = (toggle, actionName) => {
    this.handleAddOrUpdate(toggle, actionName);
  }

  render() {
    let { products } = this.state;

    // ẩn hiển form theo isToggle
    let elementForm = (this.state.isToggle === true) ?
      <FormProduct
        actionName={this.state.actionName}
        onSubmit={this.handleSubmit}
        renderProduct={this.state.product}
      /> : "";
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                {/* Control */}
                <Control
                  onAdd={this.handleAddOrUpdate}
                />
                {/* Control */}
                {/* ListStudent */}
                <ListProduct
                  renderProducts={products}
                  onView={this.handleAddOrUpdate}
                  onEdit={this.handleAddOrUpdate}
                />
                {/* ListStudent */}
              </div>
            </div>
            <div className="col-5 grid-margin">
              {/* form */}
              {elementForm}
              {/* form */}
            </div>
          </div>
        </div>
      </>
    )
  }
}
