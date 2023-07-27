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
        }
    }

    componentWillMount = () => {
        let { renderProduct, renderActionName } = this.props
        if (renderActionName === "Close" || renderActionName === "Update") {
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
        let { renderProduct, renderActionName } = this.nextProps
        if (renderActionName === "Close" || renderActionName === "Update") {
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
            [name]:value
        })
    }

    //hàm xử lý sự kiện submit form
    handleSubmit = (event) => {
        event.preventDefault();
        //chuyển thông tin lên App thông qua props
        this.props.onSubmit(this.state)
    }

    render() {
        let { actionName, renderProduct } = this.props; //lấy tên nút để hiển thị
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
                                        value={renderProduct.productId}
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
                                        value={renderProduct.productName}
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
                                        value={renderProduct.descriptions}
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
                                        value={renderProduct.price}
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
                                        value={renderProduct.quantity}
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
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary me-2"
                                onClick={this.handleSubmit}
                            > {actionName}
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
