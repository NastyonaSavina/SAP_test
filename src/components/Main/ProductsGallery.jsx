
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from "redux/selectors";

import { ProductItem } from "./ProductItem";

import { FcGenericSortingAsc } from "react-icons/fc";
import { FcGenericSortingDesc } from "react-icons/fc";
import { AiOutlineStar } from "react-icons/ai";
import { VscListSelection } from "react-icons/vsc";
import { useEffect } from 'react';
import { fetchProductCards } from 'redux/ProductCards/ProductCards.operations';


export const ProductsGallery = () => {
    
    const filteredProducts = useSelector(selectProducts);
    const dispatch = useDispatch();



    useEffect(() => {
      dispatch(fetchProductCards());
    }, [dispatch]);

    return (

        <>
{/*                   
            {filteredProducts.length === 0 ? (<p>Let's add something here!</p>) : (
                 <ul className='d-flex flex-wrap grid gap-3 p-0' style={{marginRight:'auto',marginLeft: 'auto' }}>
                    {filteredProducts.map(product => (
                        <ProductItem key={product.id} product={product} />
                    )               
                    )}
            
                </ul>
                    )
            } */}
           
    </>
   
  
    )
}