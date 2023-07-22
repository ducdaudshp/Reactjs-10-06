import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        let {renderProduct, stt} = this.props;
        return (
            <>
                <tr>
                    <td>{stt}</td>
                    <td>{renderProduct.productId}</td>
                    <td>{renderProduct.productName}</td>
                    <td>{renderProduct.descriptions}</td>
                    <td>{renderProduct.price}</td>
                    <td>{renderProduct.quantity}</td>
                    <td>
                        <img src={`images/${renderProduct.image}`} alt={renderProduct.productName} /> </td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}
