import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const UserDetails = () => {
  const { id } = useParams();
  const reduxUsers = useSelector(state => state.users.list);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = reduxUsers.find(u => u.id === Number(id));
    if (localUser) {
      setUser(localUser);
    } else {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(setUser);
    }
  }, [id, reduxUsers]);

  if (!user) return <div>Loading...</div>;

  return (
    <Card className="p-4 shadow-sm">
      <h5>User Details</h5>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone || 'N/A'}</p>
      <p><strong>Website:</strong> {user.website || 'N/A'}</p>
    </Card>
  );
};

export default UserDetails;
