import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
      const [count,setCount] = useContext(CategoryContext);
      return (
            <div>
                  <h1><u>Child:</u> This is Header Component - Count {count}</h1>
                  <button onClick={()=>setCount(count+1)}>Increase</button>
            </div>
      );
};

export default Header;