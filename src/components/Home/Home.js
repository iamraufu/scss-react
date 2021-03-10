import React from 'react';
import Categories from '../Categories/Categories';
import './Home.css'

const Home = (props) => {
      const {count} = props
      return (
            <div className="home">
                  <h1><u>Child:</u> This is Home Component - Count {count}</h1>
                  <Categories count={count}></Categories>
            </div>
      );
};

export default Home;