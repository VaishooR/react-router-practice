import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export default function User() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(params);
  return (
    <div>
      <h1>UserId: {params.userid}</h1>
      <h3>Data from navigate hook using location hook:</h3>
      {location.state? <div>
        <p>Name: {location.state.name}</p>
        <p>City: {location.state.city}</p>
      </div>: <div></div>}
      
      <button onClick={() => navigate(-1)}>Go Back</button> &nbsp;&nbsp;
      <button onClick={() => navigate(1)}>Go Forward</button>
    </div>
  );
}
