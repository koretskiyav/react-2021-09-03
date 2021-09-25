import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import styles from './tabs.module.css';
import { NavLink } from 'react-router-dom';

function Tabs({ tabs, activeId, onChange }) {
  const {restId} = useParams();
  return (
    <div className={styles.tabs}>
      {tabs.map(({ id, label }) => (
        <NavLink to={`/restaurants/${restId}/${id}`}
          key={id}
          className={styles.tab}
          activeClassName={styles.active}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
    }).isRequired
  ).isRequired,
  activeId: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Tabs;
