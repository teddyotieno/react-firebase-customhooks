import React, { useState, useEffect } from "react";
import useCollection from "../hooks/useCollection";

function Messages() {
  const messages = useCollection("/channels/random/messages", "createdAt");
  return (
    <div className="Messages">
      <div className="EndOfMessages">That's every message!</div>

      {messages.map((message, index) => {
        return index === 0 ? (
          <div key={message.id}>
            <div className="Day">
              <div className="DayLine" />
              <div className="DayText">12/6/2018</div>
              <div className="DayLine" />
            </div>
            <div className="Message with-avatar">
              <div className="Avatar" />
              <div className="Author">
                <div>
                  <span className="UserName">Ryan Florence </span>
                  <span className="TimeStamp">3:37 PM</span>
                </div>
                <div className="MessageContent">{message.text}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="Message no-avatar" key={message.id}>
            <div className="MessageContent">{message.text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
