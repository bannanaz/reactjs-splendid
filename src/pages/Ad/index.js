import React from "react";
import { useParams } from "react-router-dom";

const Ad = () => {
  const { id } = useParams();
  return (
    <>
      <p>
        <strong>this is the {id}</strong>
      </p>
    </>
  );
};
export default Ad;
