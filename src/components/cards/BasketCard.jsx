import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketDataThunk, getBasketDataThunk } from '../../redux/reducers/basketSlice'

const BasketCard = () => {

    const basket = useSelector((state) => state.basket.basket)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getBasketDataThunk())
    }, [])

    const deleteData = (id) => {
        dispatch(deleteBasketDataThunk(id))
    }

  return (
    <div>
        <h1>Basket</h1>
        <div>
            {
                basket && basket.map((item) => {
                    return (
                        <div>
                            <p>{item.title}</p>
                            <span>{item.price}</span>
                            <button onClick={(_id) => deleteData(item.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default BasketCard