import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import "./Service_request.css"; // Import the CSS file

const Service_requests = () => {
  const [serviceData, setServiceData] = useState([]); // Initialize serviceData as an empty array
  const [filterStatus, setFilterStatus] = useState("All");

  const fetchData = () => {
    axios
      .get("http://localhost:3500/service_requests") // Assuming 'service_requests' is your endpoint
      .then((response) => {
        setServiceData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:3500/service_requests/${id}`)
      .then((response) => {
        fetchData(); // Refresh data after deletion
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const updateData = (id, updatedData) => {
    axios
      .put(`http://localhost:3500/service_requests/${id}`, updatedData)
      .then((response) => {
        fetchData(); // Refresh data after update
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const filteredServiceData = serviceData.filter((service) => {
    if (filterStatus === "All") {
      return true;
    } else {
      return service.status === filterStatus;
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="tablecontainer">
      <div className="filter-dropdown">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={filterStatus}
          onChange={handleFilterChange}
          className="dropdown-select"
        >
          <option value="All">All</option>
          <option value="Assigned">Assigned</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <table className="service-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Employee Name</th>
            <th>Service ID</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredServiceData.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.customer_name}</td>
              <td>{service.employee_name}</td>
              <td>{service.service_id}</td>
              <td>{service.start_time}</td>
              <td>{service.end_time}</td>
              <td>{service.status}</td>
              <td>
                <button onClick={() => deleteData(service.id)}>Delete</button>
                <button onClick={() => updateData(service.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Service_requests;
