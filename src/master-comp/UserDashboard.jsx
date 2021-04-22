import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CreateEvent from "./dashboard/createevent";
import ShowEvents from "./dashboard/showevents";

const Dashboard = (props) => {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch (e) {
      setError("Failed to logout");
    }
  }

  return (
    <div className="MainDash">
      <div className="UserID">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong>
            {currentUser.email}
            {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              CreateEvent
            </Link> */}
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>
      <div className="createEvent">
        <CreateEvent />
      </div>
      <div className="showevents">
        <ShowEvents />
      </div>
    </div>
  );
};

export default Dashboard;
