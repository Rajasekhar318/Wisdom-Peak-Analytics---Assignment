import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-6 transition transform hover:scale-105 hover:shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
      <p className="text-sm text-gray-600">Email: {user.email}</p>
      <p className="text-sm text-gray-600">City: {user.address.city}</p>
      <Link
        to={`/user/${user.id}`}
        className="text-blue-500 hover:underline mt-2 block"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
