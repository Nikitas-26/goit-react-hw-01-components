import Statistics from './Statistics'
const StatisticsMap = ({data}) => {
  // console.log(data);
    return ( 
     <>
     {data.map(el=>{
      return  <li className="item" key={el.id}>
        <span>{el.label}</span>
      <span>{el.percentage}</span>
      </li>
    })}
</>
);
}
 
export default StatisticsMap;