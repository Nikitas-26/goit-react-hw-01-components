import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const StatisticsMap = ({data}) => {
    return ( 
     <>
     {data.map(el=>{
      return  <li className={s.item} key={el.id} style={{backgroundColor:`#${Math.floor(Math.random()*16777215).toString(16)}`}}>
        <span className={s.label}>{el.label}<br/></span>
      <span className={s.persentage}>{el.percentage}%</span>
      </li>
    })}
</>
);
}
StatisticsMap.prototypes = {data: PropTypes.arrayOf(
  PropTypes.shape({
   id:  PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired
  }))}
 
export default StatisticsMap;