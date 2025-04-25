import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../Redux/slices/userSlice.js';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(state => state.users.list);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
      name,
      email,
      phone,
      website,
    };
    dispatch(addUser(newUser));
    navigate('/dashboard/users');
  };

  return (
    <div className="p-4 bg-white shadow-sm rounded">
      <h5 className="mb-3">Add New User</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" required value={phone} onChange={e => setPhone(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formWebsite" className="mb-4">
          <Form.Label>Website</Form.Label>
          <Form.Control type="text" required value={website} onChange={e => setWebsite(e.target.value)} />
        </Form.Group>

        <Button variant="success" type="submit">Add User</Button>
      </Form>
    </div>
  );
};

export default AddUser;
