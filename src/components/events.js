import React from 'react';

const Events = () => (
  <div className="text-text-inverted text-center">
    <h1 className="text-4xl">Tapahtumat</h1>
    <Event name="Tapahtuma" time="perjantai 13.8." location="Paikka X" />
    <Event name="Tapahtuma" time="perjantai 20.8." location="Paikka X" />
    <Event name="Tapahtuma" time="maanantai 23.8." location="Paikka X" />
  </div>
);

const Event = ({ name, time, location }) => (
  <div className="py-4 px-8 m-2 w-72 text-left">
    <h2 className="text-2xl font-bold">{name}</h2>
    <p className="text-xl">{time}</p>
    <p className="text-xl">{location}</p>
  </div>
);

export default Events;
