import React from 'react';

const Header = (props) => {
      const {count,setCount} = props 

      return (
            <div>
                  <h1><u>Child:</u> This is Header Component - Count {count}</h1>
                  <button onClick={()=>setCount(count+1)}>Increase</button>
            </div>
      );
};

export default Header;