import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItemToCart } from "redux/Cart/cart.slice";


export const ProductItem = ({ product }) => { 
    const dispatch = useDispatch();
    


    const { id, productTitle, category, productImg, price, rating } = product;
    const handleAddToCart =()=> {

       dispatch(addItemToCart({ id, productTitle, price, productImg }));
    };

    return (
        <div className="card" style={{width: 'calc((100% - 48px) / 4)'}}>
            <img src={productImg} className="card-img-top" alt={productTitle} />
            <div className="card-body">
                <p className="card-text">{price} coins</p>
                <h6 className="card-title">{productTitle}</h6>
                <p className="card-text"> <AiFillStar />  {rating} </p>

                <button type='button' className="btn btn-primary" onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    
)

}
