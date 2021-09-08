import { ReactComponent as Star } from '../../icons/star.svg';
import style from './index.module.css';

export default function Rate({ value, maxRate }) {

  const emptyStyle = [style['gray'], style['size-2']].join(" ");
  const fullStyle = [style['yellow'], style['size-2']].join(" ");
  let stars = [];

  for (var i = 1; i <= maxRate; i++) {
    stars.push(<Star key={i} className={(i <= value) ? fullStyle : emptyStyle} />);
  }

  return (
    <div>
      {stars}
    </div >
  );
}