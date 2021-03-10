import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import './Categories.css'

const Categories = () => {
      const count = useContext(CategoryContext);
      return (
            <div className='categories'>
                  <h2><u>Grand-Child:</u> This is Categories Component - Count {count}</h2>
                  <CategoryDetail></CategoryDetail>
            </div>
      );
};

export default Categories;