import { useMemo, useState } from 'react';

<<<<<<< HEAD:src/components/restaurants.js
import Restaurant from './Restaurant';
import Tabs from './tabs';
=======
import Restaurant from '../restaurant';
import Tabs from '../tabs';
>>>>>>> ae3b31a9c3ee5bbd747397696a83acc2014a99f9:src/components/restaurants/restaurants.js

export default function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );

  return (
    <div>
<<<<<<< HEAD:src/components/restaurants.js
      <Tabs tabs={tabs} onChange={setActiveId} />
      <Restaurant restaurant={activeRestaurant}/>
=======
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={activeRestaurant} />
>>>>>>> ae3b31a9c3ee5bbd747397696a83acc2014a99f9:src/components/restaurants/restaurants.js
    </div>
  );
}
