import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../../firebase";

const CreateEvent = (props) => {
  const [evTit, setEvTit] = useState({
    eventTitle: "",
    eventDate: "",
    venu: "",
    attendees: 0,
  });
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const [sMes, setSMes] = useState(false);
  const [fMes, setfMes] = useState(false);
  const [vaas, setVar] = useState("");

  const formChange = (evt) => {
    const value = evt.target.value;
    const temp = { ...evTit };
    temp[evt.target.name] = value;
    setEvTit(temp);
  };

  const createEvent = (e) => {
    e.preventDefault();
    console.log(evTit);
    setEvent(evTit);
  };

  async function setEvent(event) {
    try {
      await db.collection("events").doc().set(event);
      setSMes(true);
      setfMes(false);
    } catch (e) {
      console.log(e);
      setfMes(true);
      setSMes(false);
    }
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <h2 className="text-center mb-4 w-100">Create Event</h2>
          {fMes && <Alert variant="danger">Failed To Add Event</Alert>}
          {sMes && <Alert variant="success">Event Created</Alert>}
          <Form onSubmit={createEvent}>
            <Form.Group id="EventName">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                required
                name="eventTitle"
                type="text"
                onChange={formChange}
              />
            </Form.Group>
            <Form.Group id="Event">
              <Form.Label>Place</Form.Label>
              <Form.Control name="venu" type="text" onChange={formChange} />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Time and Date</Form.Label>
              <Form.Control
                name="eventDate"
                type="text"
                onChange={formChange}
              />
            </Form.Group>
            <Button type="submit" className="w-100" disabled={loading}>
              Create
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CreateEvent;
