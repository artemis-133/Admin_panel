import React from "react";
import "./Branchalytics.css";

// Component for displaying a table of services
const ServiceTable = ({ title, services }) => {
  return (
    <div className="tableContainer">
      <span className="featuredTitle">{title}</span>
      <table>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.demand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Component for displaying the average rating box
const AverageRating = ({ averageRating }) => {
  return (
    <div className="averageRatingBox">
      <span className="averageRatingTitle">Average Rating</span>
      <div className="featuredData">
        <span className="averageRatingValue">{averageRating}</span>
      </div>
    </div>
  );
};

const Branchalytics = () => {
  // Mock data for services and their demand
  const mostDemandingServices = [
    { name: "Service A", demand: "High" },
    { name: "Service B", demand: "High" },
    // Add more services as needed
  ];

  const leastDemandingServices = [
    { name: "Service X", demand: "Low" },
    { name: "Service Y", demand: "Low" },
    // Add more services as needed
  ];

  const averageRating = 4.5; // Replace with actual average rating

  return (
    <div className="Branchalytics">
      <h2>Branch-analytics</h2>
      <div className="featured">
        <ServiceTable
          title="Most Demanding Services"
          services={mostDemandingServices}
        />
        <ServiceTable
          title="Least Demanding Services"
          services={leastDemandingServices}
        />
        <AverageRating averageRating={averageRating} />
      </div>
    </div>
  );
};

export default Branchalytics;
