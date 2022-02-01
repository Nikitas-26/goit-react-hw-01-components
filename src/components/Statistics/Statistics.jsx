import StatisticsMap from "./StatisticsItem";
import PropTypes from "prop-types";
import s from './Statistics.module.css';
const RenderStatictics = ({percentage,label}) => {
    return (<section className={s.statistics}>
    <h2 className="title">{label}</h2>
    <ul className={s.statList}>
   <StatisticsMap
   data={percentage}
   />
    </ul>
  </section>  );
}
 RenderStatictics.propTypes = { 
   percentage: PropTypes.arrayOf(
     PropTypes.shape({
      id:  PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
     })
   ),
   label: PropTypes.string
 }
export default RenderStatictics;