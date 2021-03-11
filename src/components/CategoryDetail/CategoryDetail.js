import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import './Catergorydetail.css';

const CategoryDetail = (props) => {
      const {name} = props.name
      return (
            <div className='catergorydetail'>
                  {/* <h3><u>Grand-Grand-Child:</u> This is Category Detail Component - Count {count}</h3> */}
                  <p>Selected Product: {name}</p>
            </div>
      );
};

export default CategoryDetail;