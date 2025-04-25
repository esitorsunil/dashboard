import React from "react";
import { Card, Row, Col, Table, Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteReport } from "../../Redux/slices/reportSlice"; // Import your delete action

const Report = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.report.reports);

  const handleDelete = (id) => {
    dispatch(deleteReport(id));
    localStorage.setItem("reports", JSON.stringify(reports.filter(report => report.id !== id)));
  };

  return (
    <div>
      <h3 className="mb-4 fw-semibold text-dark d-flex justify-content-between">
        Reports
        <Button variant="primary" onClick={() => navigate("add")}>
          Add Report
        </Button>
      </h3>

      <Row className="mb-4 g-4"></Row>

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="mb-3 fs-5">Recent Reports</Card.Title>
          <Table responsive hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.name}</td>
                  <td>{report.type}</td>
                  <td>
                    <Badge
                      bg={
                        report.status === "Completed"
                          ? "success"
                          : report.status === "Pending"
                          ? "warning"
                          : "info"
                      }
                    >
                      {report.status}
                    </Badge>
                  </td>
                  <td>{report.date}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="outline-primary"
                      onClick={() => navigate(`${report.id}`)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      className="ms-2"
                      onClick={() => handleDelete(report.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Report;
