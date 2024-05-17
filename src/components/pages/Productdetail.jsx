import React from "react";
import { useParams } from "react-router-dom";

const Productdetail = () => {
  let { id } = useParams();

  console.log(id);

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
    <div>
      {arr
        .filter((val) => val.id == id)
        .map((val) => {
          return (
            <>
              <h1>{val.id}</h1>
              <h1>{val.name}</h1>
              <h1>{val.mobile}</h1>
            </>
          );
        })}
    </div>
  );
};

export default Productdetail;
