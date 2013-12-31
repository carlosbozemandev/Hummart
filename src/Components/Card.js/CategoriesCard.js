import React from "react";
import style from "./CategoriesCard.module.scss";
import mobileImg from "../../assets/images/infinix.jpeg";
import { AiOutlineRight } from "react-icons/ai";

const CategoriesCard = ({ data }) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.imageContainer}>
        <img src={data?.image} alt="" />
      </div>
      <div className={style.rightContainer}>
        <p>{data?.title}</p>
        <button>
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default CategoriesCard;
