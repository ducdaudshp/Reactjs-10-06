import React, { Component } from 'react'

export default class FormProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: "",
            productName: "",
            descriptions: "",
            price: 0,
            quantity: 0,
            image: "",
        }
    }

    componentWillMount = () => {
        let { renderProduct, actionName } = this.props
        if (actionName === "Close" || actionName === "Update") {
            this.setState({
                productId: renderProduct.productId,
                productName: renderProduct.productName,
                descriptions: renderProduct.descriptions,
                price: renderProduct.price,
                quantity: renderProduct.quantity,
            })
        }
    }

    //khi chọn đối tượng khác nhau
    UNSAFE_componentWillReceiveProps = (nextProps) => {
        let { renderProduct, actionName } = nextProps
        if (actionName === "Close" || actionName === "Update") {
            this.setState({
                productId: renderProduct.productId,
                productName: renderProduct.productName,
                descriptions: renderProduct.descriptions,
                price: renderProduct.price,
                quantity: renderProduct.quantity,
            })
        }
        else {
            this.setState = ({
                productId: "",
                productName: "",
                descriptions: "",
                price: 0,
                quantity: 0,
            })
        }
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    //hàm xử lý sự kiện submit form
    handleSubmit = (event, actionName) => {
        event.preventDefault();
        //chuyển thông tin lên App thông qua props
        this.props.onSubmit(false, actionName, this.state)
    }

    render() {
        let { actionName } = this.props; //lấy tên nút để hiển thị
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Thông tin sản phẩm</h3>
                        <form className="form-sample">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Mã sản phẩm</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.productId}
                                        name="productId"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tên sản phẩm</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.productName}
                                        name="productName"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Mô tả</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.descriptions}
                                        name="descriptions"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Giá</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.price}
                                        name="price"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Số lượng</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.quantity}
                                        name="quantity"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Ảnh</label>
                                <div className="col-sm-9">
                                    <input
                                        type="file"
                                        className="form-control"
                                        value={this.state.image}
                                        name="image"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary me-2"
                                onClick={(event) => this.handleSubmit(event, actionName)}
                            > {actionName}
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
