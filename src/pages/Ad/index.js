import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Ad = () => {
  const { id } = useParams();
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/ads/${id}`)
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, []);

  return (
    <>
      <h3>{ads.title}</h3>
      <p>{ads.details}</p>
      <p>Pris: {ads.price} kr/dag</p>
      <p>Postnummer: {ads.zip}</p>
      <p>Annonsnummer: {id}</p>
    </>
  );
};
export default Ad;
