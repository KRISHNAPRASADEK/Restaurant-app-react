import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function RestaurentCard({ restaurant }) {
  console.log(restaurant);
  return (
    <Link
      to={`/view-restaurant/${restaurant.id}`}
      style={{ color: "white", textDecoration: "none" }}
    >
      <Card className="shadow rounded mx-4" style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "300px" }}
          variant="top"
          src={restaurant.photograph}
        />
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>
            <p>{restaurant.cuisine_type}</p>
          </Card.Text>
          <Card.Text>{restaurant.neighborhood}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default RestaurentCard;
