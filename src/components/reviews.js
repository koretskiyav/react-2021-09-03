import Rate from "./rate";
import style from "./reviews.module.css";

export default function Reviews({reviews}) {
	return (
		<div className={style.reviews}>
			{reviews.map( ({id, user, text, rating}) => {
				return (
					<div key={id} className={style.review}>
						<h3>{user}</h3>
						<Rate value={rating} />
						<p>{text}</p>
					</div>
				)
		})}
		</div>
	)
}