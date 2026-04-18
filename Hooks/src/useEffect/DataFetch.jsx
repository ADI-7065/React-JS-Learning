import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [user, setUser] = useState(null);
  const [a, setA] = useState(1);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
      .catch((err) => {
        console.log("Failed to fetch user data.");
        console.error(err);
      });
    // Optional
    return () => {
      console.log("Cleaning..");
    };
  }, [a]);

  return (
    <>
      <div className="p-2 m-2">
        {user ? (
          <img src={user.picture.large} alt="Random User" />
        ) : (
          <p>Loading...</p>
        )}
        <p>
          <b>Name:</b>{" "}
          {user ? `${user.name.first} ${user.name.last}` : "Loading..."}
        </p>
        <p>
          <b>Gender:</b> {user ? user.gender : "Loading..."}
        </p>
      </div>
      <div className="p-2 m-2">
        <h4 className="m3">{a}</h4>
        <button
          className="btn btn-primary btn-sm mt-2 me-2"
          onClick={() => {
            setA(a + 2);
          }}
        >
          Change
        </button>
      </div>
    </>
  );
};

export default DataFetch;
