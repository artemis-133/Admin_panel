import React, { useEffect, useState } from "react";
import "./Branchalytics.css";
import { useSelector } from "react-redux";
import axios from "axios";

// Component for displaying a table of services
const ServiceTable = ({ title, services }) => {

  return (
    <div className="tableContainer">
      <span className="featuredTitle">{title}</span>
      <table>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Component for displaying the average rating box
const AverageRating = ({ averageRating }) => {


  const token = useSelector((state) => state.branch.token);
  const branchId = useSelector((state) => state.branch.branchId);


  axios.interceptors.request.use(
    config=>{
      config.headers.authorization="Bearer "+token;
      return config;
    },
    error=>{
      return Promise.reject(error)
    }
  );


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


  const [mostDemandingServices,setMostDemandingServices] = useState([]);
  const [leastDemandingServices,setLeastDemandingServices] = useState([]);
  const [mostDemandingServicesRating,setMostDemandingServicesRating] = useState(0.0);
  const [leastDemandingServicesRating,setLeastDemandingServicesRating] = useState(0.0);
  
  const token = useSelector((state) => state.branch.token);
  const branchId = useSelector((state) => state.branch.branchId);
  console.log(branchId)

  axios.interceptors.request.use(
    config=>{
      config.headers.authorization="Bearer "+token;
      return config;
    },
    error=>{
      return Promise.reject(error)
    }
  );

  const loadServices = ()=>{
//mostdemandingserviceperbranch/{id}
//mostdemandingserviceratingperbranch/{id}
    //most
    axios.get(`http://localhost:8000/mostdemandingserviceperbranch/${branchId}`)
    .then((response)=>{
      setMostDemandingServices(response.data)
    })
    .catch((error)=>{
      alert("Error occured "+error)
    })

    //most rating
    axios.get(`http://localhost:8000/mostdemandingserviceratingperbranch/${branchId}`)
    .then((response)=>{
      setMostDemandingServicesRating(response.data)
    })
    .catch((error)=>{
      alert("Error occured "+error)
    })

    //least
    axios.get(`http://localhost:8000/leastdemandingserviceperbranch/${branchId}`)
    .then((response)=>{
      setLeastDemandingServices(response.data)
    })
    .catch((error)=>{
      alert("Error occured "+error)
     })

     //least rating
    axios.get(`http://localhost:8000/leastdemandingserviceratingperbranch/${branchId}`)
    .then((response)=>{
      setLeastDemandingServicesRating(response.data)
    })
    .catch((error)=>{
      alert("Error occured "+error)
     })
  }

useEffect(()=>{
  loadServices();
},[])

  //Mock data for services and their demand
  // const mostDemandingServices = [
  //   { name: "Service A", demand: "High" },
  //   { name: "Service B", demand: "High" },
  //   // Add more services as needed
  // ];

  // const leastDemandingServices = [
  //   { name: "Service X", demand: "Low" },
  //   { name: "Service Y", demand: "Low" },
  //   // Add more services as needed
  // ];

  const averageRating = 4.5; // Replace with actual average rating
  console.log(mostDemandingServices)
  console.log(leastDemandingServices)

  return (
    <>
    <h2 className="title">Branch-analytics</h2>
    <div className="Bcss">

      <div className="ftd">
        <ServiceTable
          title="Most Demanding Services"
          services={mostDemandingServices}
        />
        <div className="fdd"><AverageRating averageRating={mostDemandingServicesRating} /></div>
      </div>

      <div className="ftd">
        <ServiceTable
          title="Least Demanding Services"
          services={leastDemandingServices}
        />
        <div className="fdd"><AverageRating averageRating={leastDemandingServicesRating} /></div>
      </div>

    </div>
    </>
  );
};

export default Branchalytics;
