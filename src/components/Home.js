import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import RestaurentCard from "./RestaurentCard";
import Container from "react-bootstrap/Container";
import { RestaurantsList } from "../actions/homeAction";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // state to hold data from api call
  // const [restaurants, setRestaurants] = useState([]);

  // fn to get data from api
  // const fetchData = async () => {
  //   const result = await fetch("/restaurants.json");
  //   result.json().then((data) => {
  //     setRestaurants(data.restaurants);
  //   });
  // };

  // console.log(restaurants);

  const dispatch = useDispatch();

  useEffect(() => {
    // fetchData();
    dispatch(RestaurantsList());
  }, []);

  const { restaurants } = useSelector((state) => state.restaurantReducer);
  console.log(restaurants);

  return (
    <Container>
      <Row>
        {restaurants.map((item) => (
          <Col className="my-5" sm={6} md={4} lg={3}>
            <RestaurentCard restaurant={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
