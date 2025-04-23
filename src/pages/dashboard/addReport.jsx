import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addReport } from "../../Redux/slices/reportSlice";
import { useNavigate } from "react-router-dom";

const AddReport = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reports = useSelector((state) => state.report.reports);

  const [formData, setFormData] = useState({
    id: reports.length + 1,
    name: "",
    type: "",
    status: "",
    date: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReport(formData));
    navigate("/dashboard/reports");
  };

  return (
    <Card className="p-4 shadow-sm">
      <h4 className="mb-4 text-dark fw-semibold">Add New Report</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Report Name</Form.Label>
          <Form.Control
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Control
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="In Review">In Review</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Add Report
        </Button>
      </Form>
    </Card>
  );
};

export default AddReport;
