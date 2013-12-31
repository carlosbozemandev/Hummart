import React, { useState } from "react";
import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import style from "./Drawer.module.scss";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  submitRequest,
} from "../../store/Reducers/cartReducer";
import { notification } from "antd";

const MainDrawer = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const { cart, total, loading } = useSelector((state) => state.cart);
  const [smallScreen, setSmallScreen] = useState(false);

  const openNotification = () => {
    notification.success({
      message: "HUM MART",
      description: " Item Remove from Cart Successfully",
      className: "custom-class",
      placement: "bottomLeft",
      duration: 2.5,
    });
  };

  const onClose = () => {
    setVisible(false);
  };

  // console.log(window.innerWidth);

  if (window.innerWidth < 600) {
    setSmallScreen(false);
  }

  const removeItemFromCart = (item) => {
    dispatch(removeItem({ item, openNotification }));
    console.log(item);
  };

  const productCountingUp = (item) => {
    dispatch(increaseQuantity(item));
  };

  const productCountingDown = (item) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <>
      <Drawer
        title="Check Out"
        placement="right"
        width={500}
        onClose={onClose}
        visible={visible}
      >
        {Object.values(cart)?.length === 0 ? (
          <>
            <div className={style.emptyCartText}>
              <h3>No Item in your cart</h3>
            </div>
          </>
        ) : (
          Object.values(cart)?.map((item, index) => {
            return (
              <>
                <div key={index} className={style.mainContainer}>
                  <div
                    className={style.crossDiv}
                    onClick={() => removeItemFromCart(item)}
                  >
                    <MdCancel className={style.crossIcon} />
                  </div>
                  <div className={style.imageContainer}>
                    <img
                      className={style.image}
                      src={item?.data?.thumbnail}
                      alt=""
                    />
                  </div>
                  <div className={style.rightContainer}>
                    <p>{item?.data?.title}</p>
                    <p className={style.productPrice}>
                      Rs: {item?.data?.price}
                    </p>
                    <div className={style.countingDiv}>
                      <span
                        className={
                          item?.counting < 2
                            ? style.minusDisable
                            : style.plusMinus
                        }
                        onClick={
                          item?.counting < 2
                            ? undefined
                            : () => productCountingDown(item)
                        }
                      >
                        <AiFillMinusCircle />
                      </span>
                      <p>{item?.counting}</p>
                      <span
                        className={style.plusMinus}
                        onClick={() => productCountingUp(item)}
                      >
                        <AiFillPlusCircle />
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
        <div className={style.subTotalContainer}>
          <p>Sub Total:</p>
          <p>RS: {total}</p>
        </div>

        <button
          className={
            Object.values(cart)?.length === 0
              ? style.submitBtnDisable
              : style.submitBtn
          }
          disabled={Object.values(cart)?.length === 0}
          onClick={() => dispatch(submitRequest())}
        >
          {loading ? "Submit..." : "Submit"}
        </button>
      </Drawer>
    </>
  );
};

export default MainDrawer;
