import React from "react";

const Event = (props) => {
  return (
    <div className="Event">
      <div className="title">{props.obj.eventTitle}</div>
      <div
        className="attend"
        onClick={() => props.attend(props.obj.id, props.obj.attendees)}
      >
        Attend
      </div>
      <div className="time">Time : {props.obj.eventDate}</div>
      <div className="place">Place : {props.obj.venu}</div>
      <div className="attendee">Attendeees : {props.obj.attendees}</div>
    </div>
  );
};

export default Event;
