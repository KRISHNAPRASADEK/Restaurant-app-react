import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const RestReviews = ({ reviews }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        className="ps-0"
        variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click here to view reviews
      </Button>
      <Collapse in={open}>
        <div className="my-2" id="example-collapse-text">
          {reviews.map((item) => (
            <div>
              <h6>
                {item.name} : (<span>{item.date}</span>)
              </h6>
              <p>Rating : {item.rating}</p>
              <p>Comments: {item.comments}</p>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  );
};

export default RestReviews;
