import StatisticsMap from "./StatisticsItem";
const RenderStatictics = ({percentage,label}) => {
  // console.log(percentage,label);
    return (<section className="statistics">
    <h2 className="title">{label}</h2>
    <ul className="stat-list">
   <StatisticsMap
   data={percentage}
   />
    </ul>
  </section>  );
}
 
export default RenderStatictics;