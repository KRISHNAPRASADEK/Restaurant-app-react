import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RestReviews from "./RestReviews";
import { useSelector, useDispatch } from "react-redux";
import { RestaurantsList } from "../actions/homeAction";

function RestaurantView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch the action
    // action to reducer -> reducer update state
    dispatch(RestaurantsList());
  }, []);

  const { restaurants } = useSelector((state) => state.restaurantReducer);
  console.log(restaurants);

  const params = useParams();
  console.log(params);

  const restaurant = restaurants.find((item) => item.id == params.id);
  console.log(restaurant);

  return restaurant ? (
    <Row className="p-5">
      <Col md={3}>
        <Image src={restaurant.photograph} alt="" fluid></Image>
      </Col>
      <Col md={8}>
        <ListGroup>
          <ListGroup.Item>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.neighborhood}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>Cuisine: {restaurant.cuisine_type}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>Address: {restaurant.address}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button className="ps-0" onClick={handleShow} variant="dark">
              click here to see operating hours
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <RestReviews reviews={restaurant.reviews}></RestReviews>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              Monday: {restaurant.operating_hours.Monday}
            </ListGroup.Item>
            <ListGroup.Item>
              Tuesday: {restaurant.operating_hours.Tuesday}
            </ListGroup.Item>
            <ListGroup.Item>
              Wednesday: {restaurant.operating_hours.Wednesday}
            </ListGroup.Item>
            <ListGroup.Item>
              Thursday: {restaurant.operating_hours.Thursday}
            </ListGroup.Item>
            <ListGroup.Item>
              Friday: {restaurant.operating_hours.Friday}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </Row>
  ) : (
    ""
  );
}

export default RestaurantView;
