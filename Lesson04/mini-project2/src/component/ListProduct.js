import React, { Component } from 'react';
import Product from './Product';

export default class ListProduct extends Component {

    //hàm xử lý cho sự kiện xem
    handleView = (toggle, actionName, product) => {
        this.props.onView(toggle, actionName, product);
    }

    //hàm xử lý sự kiện Edit
    handleEdit = (toggle, actionName) => {
        this.props.onEdit(toggle, actionName);
    }

    render() {
        let { renderProducts } = this.props;
        let elementProduct = renderProducts.map((product, index) => {
            return <Product
                key={index}
                renderProduct={product}
                stt={index + 1}
                onView={this.handleView}
                onEdit={this.handleEdit}
            />
        })
        return (
            <>
                <div className="card-body">
                    <h3 className="card-title">Danh sách sinh viên</h3>
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mã sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Mô tả</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Hình ảnh</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {elementProduct}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
