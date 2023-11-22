import Chart from "../../components/Chart/Chart"; 
import "./Home.css";
import { userData } from "../../dummyData";
import BasicInfo from "../../components/featured/featuredData";
// import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <BasicInfo />
      <Chart  title="Sales Analytics" dataKey="sales" />
      {/* <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div> */}
    </div>
  );
}
