import React, { useState, useRef, useMemo } from 'react';

function DemoUseMemo() {

    //state
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const nameRef = useRef();
    const priceRef = useRef();

    //add
    const handleSubmit = () => {
        setProducts([
            ...products,
            {
                name: name,
                price: price
            }
        ]);
        setName('')
        setPrice(0)
        nameRef.current.focus()
    }

    //tính toán tổng giá
    const total = useMemo(() => {
        let result = products.reduce((result, prod)=> {
            return result + parseFloat(prod.price)
        },0)
        return result
    },[products]);

    return (
        <div>
            <h2>Product management - useMemo</h2>
            <div>
                <label>Name:</label>
                <input type='text' ref={nameRef} value={name} onChange={event => setName(event.target.value)} />
            </div>
            <div>
                <label>Price:</label>
                <input type='text' ref={priceRef} value={price} onChange={event => setPrice(event.target.value)} />
            </div>
            <div>
                <button onClick={handleSubmit}>Add new</button>
            </div>
            <div className='alert alert-danger'>
                Total price: {total}
            </div>
            <div>
                <h3>List product</h3>
                <ul>
                    {
                        products.map((prod, index) => {
                            return <li key={index}>
                                {prod.name} -- {prod.price}
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default DemoUseMemo