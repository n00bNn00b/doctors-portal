import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  //   console.log(description);
  return (
    <div className={`card lg:card-side bg-base-100 shadow-2xl ${bgClass} `}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p></p>
      </div>
    </div>
  );
};

export default InfoCard;
