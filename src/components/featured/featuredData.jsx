import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import FeaturedInfo from "./FeaturedInfo";

const BasicInfo = () => {
    const [employees, setEmployees] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [sales, setSales] = useState([]);

    const { token, branchId, role } = useSelector((state) => state);

    useEffect(() => {
        axios.get("backend url to get employees using branch id", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setEmployees(response.data))
        .catch((error) => console.error("Error fetching employees", error));

        axios.get(`backend url to get customers using branch id`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setCustomers(response.data))
        .catch((error) => console.error("Error fetching customers", error));

        axios.get(`backend url to get sales using branch id`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setSales(response.data))
        .catch((error) => console.error("Error fetching sales", error));
    }, [token, branchId, role]);

    return (
        <div>
           <FeaturedInfo employees={employees} customers={customers} sales={sales} />
        </div>
    );
};

export default BasicInfo;
