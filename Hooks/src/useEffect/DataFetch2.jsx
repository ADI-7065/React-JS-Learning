import { useEffect, useState } from "react";

export default function DataFetch2() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.log("Failed to fetch user data.");
        console.error(err);
      });
  }, []);

  let getData = () => {
    var d = "";
    for (var x = 0; x < user.length; x++) {
      d += user[x].name + ",";
    }
    return d;
  };
  return (
    <div>
      <p>{user ? getData() : "Loading..."}</p>
      {user
        ? user.map((i) => (
            <div key={i.id}>
              <p>
                <b>Name:</b> {i.name} <b>Email:</b> {i.email}
              </p>
            </div>
          ))
        : "Loading..."}
    </div>
  );
}
