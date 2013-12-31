import React, { useEffect, useState } from "react";
import MainNavbar from "../../Components/Navbar/Navbar";
import MainCarousel from "../../Components/Carousel/Carousel";
import style from "./Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import bestPriceImg from "../../assets/images/bestPrice.jpg";
import prayerMatImg from "../../assets/images/prayerMat.jpg";
import MainCard from "../../Components/Card.js/Card";
import CategoriesCard from "../../Components/Card.js/CategoriesCard";

import { cardData, categoriesCardData } from "../../Helper/dummyData";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

import MainDrawer from "../../Components/Drawer/Drawer";
import { notification } from "antd";
import {
  getAllProducts,
  getProducts,
} from "../../store/Reducers/productReducer";

const Home = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);

  const [visible, setVisible] = useState(false);

  const openNotification = (item, behaviour) => {
    if (behaviour === "success") {
      console.log(item);
      notification.success({
        message: "HUM MART",
        description: `${item}`,
        className: "custom-class",
        placement: "bottomLeft",
        duration: 2.5,
      });
    } else if (behaviour === "warning") {
      console.log(item);
      notification.warning({
        message: "HUM MART",
        description: `${item}`,
        className: "custom-class",
        placement: "bottomLeft",
        duration: 2.5,
      });
    } else if (behaviour === "error") {
      console.log(item);
      notification.error({
        message: "HUM MART",
        description: `${item}`,
        className: "custom-class",
        placement: "bottomLeft",
        duration: 2.5,
      });
    }
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  // console.log(count);

  return (
    <>
      <section>
        <Container fluid className="p-0">
          <Row>
            <div>
              <MainNavbar setVisible={setVisible} />
            </div>
            <div>
              <Container className={style.carouselContainer}>
                <Row className={style.carouselContainerRow}>
                  <Col xl={3} md={12} sm={12}>
                    <div className={style.leftImages}>
                      <div>
                        <img src={bestPriceImg} alt="best price" />
                      </div>
                      <div>
                        <img src={prayerMatImg} alt="prayer mat" />
                      </div>
                    </div>
                  </Col>
                  <Col xl={8} md={12} sm={12}>
                    <div>
                      <MainCarousel />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className={style.thirdContainer}>
              <Container>
                <div className={style.thirdContainerHeading}>
                  <h3>Mobile Phone</h3>
                </div>
                <Row>
                  {products &&
                    products?.map((item, index) => {
                      return (
                        <Col
                          key={index}
                          xl={3}
                          md={4}
                          sm={12}
                          className={style.cardCol}
                        >
                          <MainCard
                            data={item}
                            openNotification={openNotification}
                          />
                        </Col>
                      );
                    })}
                  {/* {cardData?.map((item, index) => {
                    return (
                      <Col
                        key={index}
                        xl={3}
                        md={4}
                        sm={12}
                        className={style.cardCol}
                      >
                        <MainCard
                          data={item}
                          openNotification={openNotification}
                        />
                      </Col>
                    );
                  })} */}
                </Row>
              </Container>
            </div>
            <div className={style.fourthContainer}>
              <Container>
                <div className={style.fourthContainerHeading}>
                  <h3>Categories</h3>
                </div>
                <Row className={style.categoriesCardContainer}>
                  {categoriesCardData?.map((item, index) => {
                    return (
                      <Col md={6} key={index}>
                        <CategoriesCard data={item} />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
            <div className={style.fifthContainer}>
              <Container>
                <h3>Online Supermarket, Delivery in Karachi, Pakistan</h3>
                <p>
                  Ever wondered of entering a grocery store and getting an
                  overview of products sections and get to grab the required
                  product from there? The alternate is our search bar of HumMart
                  where you can search from a wide range of categories including
                  grocery and staples, home furnishing, breakfast and dairy,
                  instant foods, biscuits and snacks, beverages, household
                  needs, personal care, home and kitchen, baby products, fruits
                  and vegetables, ice creams and a lot more. Now with online
                  phones and accessories purchase and with easy and timely home
                  delivery all over Pakistan. The online shopping of grocery is
                  a blessing to get the required products over a few clicks. We
                  at HumMart provides our customers with the best deals to get
                  value addition on the purchase of products available online as
                  a bundle offer. If you are in a mood to mingle with friends
                  but you got a grocery list in your pocket, just visit HumMart
                  and order the grocery to get it delivered right at your home
                  while you get yourself entertained with friends. Want to cook
                  your favorite dish, no need to worry for the items to prepare
                  a mouthwatering dish. HumMart offers you ample products to get
                  the ingredients for the dish. We will provide you the products
                  through express delivery within 2 hours. You have the
                  independence to opt out from numerous products as HumMart
                  focuses to bring utmost facilities through its online grocery
                  store and adding value in life of our valued customers. You
                  need to stay at your home, visit hummart.com through your
                  laptop, smartphone or even from phone application.
                </p>
              </Container>
            </div>

            <div className={style.footerDiv}>
              <Footer />
            </div>
          </Row>
        </Container>
        <MainDrawer visible={visible} setVisible={setVisible} />
      </section>
    </>
  );
};

export default Home;
