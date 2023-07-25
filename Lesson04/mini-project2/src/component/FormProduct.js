import React, { Component } from 'react'

export default class FormProduct extends Component {
    //hàm xử lý sự kiện submit form
    handleSubmit = (event, actionName) => {
        event.preventDefault();
        //chuyển thông tin lên App thông qua props
        this.props.onSubmit(false, actionName)
    }

    render() {
        let {actionName, renderProduct} = this.props; //lấy tên nút để hiển thị
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
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Ảnh</label>
                                <div className="col-sm-9">
                                    <input
                                        type="file"
                                        className="form-control"
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
