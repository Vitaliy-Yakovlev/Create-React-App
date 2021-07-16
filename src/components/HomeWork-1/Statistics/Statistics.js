import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <StatisticsList items={stats} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
