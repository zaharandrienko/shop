import React from "react";

import "../scss/app.scss";

import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Block from "../components/Block";
import Skeleton from "../components/Block/Skeleton";

function Home(){
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63305185f5fda801f8de993b.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
      window.scrollTo(0, 0);
  }, []);
  

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <Block key={item.id} {...item} />)}
      </div>
    </div>
  );
};


export default Home;