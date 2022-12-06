import React from "react";

function Categories() {
  const [activeInd, setActiveInd] = React.useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const changeCategory = (ind) => {
    setActiveInd(ind);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, ind) => (
          <li
            key={value}
            onClick={() => {
              changeCategory(ind);
            }}
            className={activeInd === ind ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
