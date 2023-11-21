import "./featuredInfo.css";
import { Person, ShowChart } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">
          <Person className="icon employeeIcon" />
          Employees
        </span>
        <div className="featuredData">
          <span className="dataValue">2,415</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">
          <Person className="icon customerIcon" />
          Customers
        </span>
        <div className="featuredData">
          <span className="dataValue">172,000</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">
          <ShowChart className="icon salesIcon" />
          Sales
        </span>
        <div className="featuredData">
          <span className="dataValue">2100</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
