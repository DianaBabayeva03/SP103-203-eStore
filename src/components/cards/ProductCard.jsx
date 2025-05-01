import React, { useEffect } from 'react';
import styles from './ProductCard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getDataThunk, postDataThunk } from '../../redux/reducers/productSlice';

const ProductCard = () => {

    const product = useSelector((state) => state.product.product)
    

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataThunk())
    }, [])

    const addToBasket = (data) => {
        dispatch(postDataThunk(data))
    }

  return (
    <div className={styles.productCard}>
        <h1>Products</h1>
        <div className={styles.cardContainer}>
            {
                product && product.map((item) => {
                   return (
                    <div className={styles.cardBox}>
                        <img src={item.thumbnail} alt="product image" />
                        <p>{item.title}</p>
                        <span>{item.price}</span>
                        <button onClick={() => addToBasket(item)}>Add To Basket</button>
                    </div>
                   )
                })
            }
        </div>
    </div>
  )
}

export default ProductCard