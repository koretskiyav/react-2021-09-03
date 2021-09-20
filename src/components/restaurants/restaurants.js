import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { restaurantsSelector } from '../../redux/selectors';

function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(Object.keys(restaurants)[0]);

  const tabs = useMemo(
    () => Object.keys(restaurants).map((id) => ({ id, label: restaurants[id].name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants[activeId],
    [activeId, restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  restaurants: restaurantsSelector(state),
});

export default connect(mapStateToProps)(Restaurants);
