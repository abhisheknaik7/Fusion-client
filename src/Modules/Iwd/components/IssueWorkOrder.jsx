import React, { useState } from "react";
import { Table, Button, Container, Title, Paper } from "@mantine/core";
import { CaretLeft } from "@phosphor-icons/react";
import IssueWorkOrderForm from "./IssueWorkOrderForm";

function IssueWorkOrder() {
  const [selectedWorkOrder, setSelectedWorkOrder] = useState(null);
  const handleWorkOrderSelect = (workOrder) => {
    setSelectedWorkOrder(workOrder);
  };

  const handleBackToList = () => {
    setSelectedWorkOrder(null);
  };
  const workOrderData = [
    {
      id: "1",
      name: "divyansh",
      description: "ahgo",
      area: "lhtc",
      "created-by": "me",
    },
    {
      id: "3",
      name: "dvijay",
      description: "ahgo",
      area: "lhtc",
      "created-by": "me",
    },
    {
      id: "4",
      name: "suniljatt",
      description: "ahgo",
      area: "lhtc",
      "created-by": "me",
    },
  ];

  return (
    <Container style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <br />
      {!selectedWorkOrder ? (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "25px",
            padding: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
            borderLeft: "10px solid #1E90FF",
          }}
        >
          <Title size="h3" align="center" style={{ marginBottom: "10px" }}>
            Work Orders
          </Title>
          <Table highlightOnHover>
            <thead style={{ backgroundColor: "#f5f5f5" }}>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Area</th>
                <th>Created By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {workOrderData.map((request, index) => (
                <tr key={index} id={request.id}>
                  <td>{request.id}</td>
                  <td>{request.name}</td>
                  <td>{request.description}</td>
                  <td>{request.area}</td>
                  <td>{request["created-by"]}</td>
                  <td>
                    <Button
                      size="xs"
                      onClick={() => handleWorkOrderSelect(request)}
                      style={{
                        backgroundColor: "#1E90FF",
                        color: "white",
                        borderRadius: "20px",
                      }}
                    >
                      Issue Work Order
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <Paper shadow="sm" radius="md" p="md" style={{ width: "71vw" }}>
          <Button
            variant="subtle"
            leftIcon={<CaretLeft size={12} />}
            onClick={handleBackToList}
            style={{ marginBottom: "10px" }}
          >
            Back to List
          </Button>
          <IssueWorkOrderForm
            workOrder={selectedWorkOrder}
            onBack={handleBackToList}
          />
        </Paper>
      )}
    </Container>
  );
}

export default IssueWorkOrder;