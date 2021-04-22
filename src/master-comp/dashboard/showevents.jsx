import React, { useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { db } from "../../firebase";
import InfiniteScroll from "react-infinite-scroll-component";
import Event from "./event";
import app from "../../firebase";

const ShowEvents = () => {
  const [data, setData] = useState([]);

  function getEvents() {
    db.collection("events").onSnapshot((query) => {
      const items = [];
      query.forEach((doc) => {
        let temp = {
          id: doc.id,
          ...doc.data(),
        };
        items.push(temp);
      });
      setData(items);
    });
  }

  function adAt(docId, val) {
    console.log("Attend Event : ", docId);
    db.collection("events")
      .doc(docId)
      .update({
        attendees: val + 1,
      });
  }

  const getContet = (props) => {
    if (props.length === 0) {
      return <Alert variant="danger">No Events To display</Alert>;
    } else {
      return props.map((obj) => <Event obj={obj} attend={adAt} />);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Card>
      <InfiniteScroll height="50vh" dataLength={10} hasMore={false}>
        {getContet(data)}
      </InfiniteScroll>
    </Card>
  );
};

export default ShowEvents;
