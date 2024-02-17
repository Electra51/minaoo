import React from "react";
import "./discountSection.css";
import { data } from "../../../Components/Common/data";

const Discountsection = () => {
  return (
    <div className="discountSection_wrapper">
      {data?.map((e, i) => {
        const cardClassName = `card ${e.color}`;
        return (
          <div className={cardClassName} key={i}>
            <div>
              <p className="discountSection-tag">{e?.name}</p>
              <p className="discountSection-discount">{e?.discount}</p>
              <button className="tag-tag">{e?.tag}</button>
            </div>
            <div>
              <img src={e.img} alt="" width={60} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Discountsection;
