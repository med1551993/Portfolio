import React, { useEffect, useState } from "react";
import { portfolio } from "../data/dummydata";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];

const Portfolio = () => {
  const [list, setList] = useState(portfolio);

  const filterCategory = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setList(newItems);
    if (category === "all") {
      setList(portfolio);
    }
  };

  return (
    <>
      <div className="Portfolio">
        <div className="container">
          <h2 data-aos="zoom-in-down">Portfolio</h2>
        {/*   <div className="btn">
            {allCategory.map((item) => (
              <button
                key={item.id}
                className="primaryBtn"
                onClick={() => filterCategory(item)}
                data-aos="zoom-out-down"
              >
                {item}
              </button>
            ))}
          </div> */}

          <div className="portfolio_content grid3">
            {list.map((item) => (
              <div className="protfolio_card" key={item.id} data-aos="fade-up">
                <div className="img">
                  <img src={item.cover} alt="card" />
                </div>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <h3>{item.name}</h3>
                  <VisibilityOutlinedIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
