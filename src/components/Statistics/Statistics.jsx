import {StatList, StatItem} from './Statistics.stylde';

const Statistics = ({ good, neutral, bad,total,positiveFeedback }) => (
  
  <StatList>
    <StatItem>Good: {good}</StatItem>
    <StatItem>Neutral: {neutral}</StatItem>
    <StatItem>Bad: {bad}</StatItem>
    <StatItem>TOTAL: {total}</StatItem>
    <StatItem>Positive feedback: {positiveFeedback} %</StatItem>
  </StatList>
);

Statistics.propTypes = {
 
};

export default Statistics;
