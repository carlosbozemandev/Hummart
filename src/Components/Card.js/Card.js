import React from "react";
import { Card } from "antd";
import style from "./Card.module.scss";
import { addCart } from "../../store/Reducers/cartReducer";
import { useDispatch } from "react-redux";

const { Meta } = Card;

const MainCard = ({ data, openNotification }) => {
  const dispatch = useDispatch();
  const firstLatter = data?.title?.charAt(0)?.toUpperCase();
  return (
    <div>
      <Card
        cover={<img alt="example" src={data?.thumbnail} style={{ height: 280 }} />}
      >
        <Meta title={firstLatter + data?.title?.substring(1)} />
        <div className={style.priceAndButton}>
          <p>RS: {data?.price}</p>
          <button onClick={() => dispatch(addCart({ data, openNotification }))}>
            Add To Cart
          </button>
        </div>
      </Card>
    </div>
  );
};

export default MainCard;
