import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import './Catergorydetail.css';

const CategoryDetail = () => {
      const count = useContext(CategoryContext)
      return (
            <div className='catergorydetail'>
                  <h3><u>Grand-Grand-Child:</u> This is Category Detail Component - Count {count}</h3>
            </div>
      );
};

export default CategoryDetail;