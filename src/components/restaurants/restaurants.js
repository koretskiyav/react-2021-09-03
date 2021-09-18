import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import restaurant from '../restaurant';

function Restaurants({ restaurants }) {
  const restaurantsIds = Object.keys(restaurants);
  const [activeId, setActiveId] = useState(restaurantsIds[0]);
  const tabs = useMemo(
    () => restaurantsIds.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );
  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant id={activeId} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state, props) => ({
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Restaurants);
