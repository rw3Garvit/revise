import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let arr = [
    {
      id: "1",
      name: "garvit",
      mobile: "1234",
    },
    {
      id: "2",
      name: "user",
      mobile: "1234",
    },
    {
      id: "3",
      name: "demo",
      mobile: "1234",
    },
  ];

  return (
    <div className="row">
      {arr.map((val, index) => {
        return (
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{val.id}</h5>

              <Link to={`/${val.id}`} href="#" class="card-link">
                view
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
