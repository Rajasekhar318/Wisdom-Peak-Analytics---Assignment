import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      {user ? (
        <div className="border p-4">
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Company: {user.company.name}</p>
          <p>Website: {user.website}</p>
          <button onClick={() => navigate("/")} className="btn btn-secondary">
            Go Back
          </button>
        </div>
      ) : (
        <div>User not found</div>
      )}
    </div>
  );
};

export default UserDetail;
