import React, { Component } from 'react'

export default class FormProduct extends Component {
    render() {
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
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tên sản phẩm</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Mô tả</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Giá</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Số lượng</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
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
                            > Add
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
