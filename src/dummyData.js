// dummy.jsx

import { format, parse, startOfMonth } from "date-fns";

// Function to count data by month
export const countDataByMonth = (data) => {
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return {};
  }

  const counts = {};

  data.forEach((item) => {
    const startDateString = item["starttime"];
    const startDate = parse(startDateString, "dd-MM-yy", new Date());
    const startMonth = format(startDate, "MMMM"); // Format date to get month name

    if (!counts[startMonth]) {
      counts[startMonth] = 1;
    } else {
      counts[startMonth]++;
    }
  });

  return counts;
};

// export const userData = [
//   { month: "January", sales: 1000 },
//   { month: "February", sales: 1500 },
//   { month: "March", sales: 2000 },
//   { month: "April", sales: 1800 },
//   { month: "May", sales: 2400 },
//   { month: "June", sales: 2100 },
//   { month: "July", sales: 1400 },
//   // Add more months and corresponding sales data as needed
// ];
