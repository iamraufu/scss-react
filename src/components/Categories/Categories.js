import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import './Categories.css'

const allProducts = [
      { name: 'Lenovo', category: 'laptop' },
      { name: 'Dell', category: 'laptop' },
      { name: 'Asus', category: 'laptop' },
      { name: 'Nokia', category: 'Mobile' },
      { name: 'Apple', category: 'Mobile' },
      { name: 'One Plus', category: 'Mobile' },
      { name: 'Samsung', category: 'Camera' },
      { name: 'Nikon', category: 'Camera' },
      { name: 'Canon', category: 'Camera' }
]

const Categories = () => {
      const [category] = useContext(CategoryContext);
      const [products, setProducts] = useState([])
      useEffect(() => {
            const matchedProducts = allProducts.filter(pd => pd.category === category && category.toLowerCase())
            setProducts(matchedProducts);
      }, [category])

      return (
            <div className='categories'>
                  {/* <h2><u>Grand-Child:</u> This is Categories Component - Count {count}</h2> */}

                  {
                        products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
                  }
            </div>
      );
};

export default Categories;