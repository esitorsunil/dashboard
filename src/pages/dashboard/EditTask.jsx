import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTask } from "../../Redux/slices/taskSlice";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.tasks);
  const task = tasks.find((t) => t.id === parseInt(id));

  const [formData, setFormData] = useState({
    id: task?.id || "",
    title: task?.title || "",
    status: task?.status || "",
  });

  useEffect(() => {
    if (!task) {
      navigate("/dashboard/tasks");
    }
  }, [task, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask(formData));
    navigate("/dashboard/tasks");
  };

  return (
    <Card className="shadow-sm p-4">
      <h4 className="mb-4 text-dark fw-semibold">Edit Task</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Task Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="status" className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="primary">
          Update Task
        </Button>
      </Form>
    </Card>
  );
};

export default EditTask;
