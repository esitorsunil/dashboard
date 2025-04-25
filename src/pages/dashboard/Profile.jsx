import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../Redux/slices/profileSlice";
import { Card, Row, Col, Button, Badge, Modal, Form } from "react-bootstrap";

const Profile = () => {
  const user = useSelector((state) => state.profile.user);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [editableUser, setEditableUser] = useState(user);
  const [imagePreview, setImagePreview] = useState(user.avatars);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile && savedProfile.avatars) {
      setImagePreview(savedProfile.avatars);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setEditableUser((prev) => ({
          ...prev,
          avatars: reader.result, // Update editableUser with new image
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    dispatch(updateProfile(editableUser)); // Dispatch full profile including avatar
    localStorage.setItem("profile", JSON.stringify(editableUser)); // Save updated profile to localStorage
    setShowModal(false);
  };

  // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <h3 className="mb-4 fw-semibold text-dark">Profile</h3>
      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <img
                src={imagePreview || user.avatars}
                className="rounded-circle mb-3"
                width={100}
                height={100}
                alt="Profile"
              />
              <h5 className="fw-bold">{user.name}</h5>
              <p className="text-muted mb-2">@{user.username}</p>
              <Badge bg="primary" className="mb-1">{user.role}</Badge>
              <p className="small text-muted mb-0">Joined: {user.joined}</p>
              <p className="small text-muted">Location: {user.location}</p>
              <Button
                variant="outline-primary"
                size="sm"
                className="mt-2"
                onClick={() => {
                  setEditableUser(user); // reset form to latest data
                  setImagePreview(user.avatars);
                  setShowModal(true);
                }}
              >
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title className="mb-3 fs-5">Account Information</Card.Title>
              <p className="mb-2"><strong>Email:</strong> {user.email}</p>
              <p className="mb-2"><strong>Username:</strong> {user.username}</p>
              <p className="mb-0"><strong>Role:</strong> {user.role}</p>
            </Card.Body>
          </Card>

          <Row className="g-3">
            <Col sm={4}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <h6 className="text-muted">Posts</h6>
                  <h4 className="fw-bold">{user.stats.posts}</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <h6 className="text-muted">Tasks</h6>
                  <h4 className="fw-bold">{user.stats.tasks}</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <h6 className="text-muted">Followers</h6>
                  <h4 className="fw-bold">{user.stats.followers}</h4>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editableUser.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={editableUser.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formRole" className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={editableUser.role}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formLocation" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={editableUser.location}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formJoined" className="mb-3">
              <Form.Label>Joined Date</Form.Label>
              <Form.Control
                type="date"
                name="joined"
                value={editableUser.joined}
                max={today} // Restrict the date to today's date or any previous date
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formAvatar" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-3"
                  width={100}
                  height={100}
                />
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
