import Link from 'next/link'

const Button = ({ type, href, text, onSubmit }) => {
	const classes =
		'bg-primary hover:bg-primary-dark text-white font-bold uppercase rounded-lg py-3 px-6 inline-block'

	if (type !== 'button' && type !== 'submit') {
		return (
			<Link href={href}>
				<a className={classes}>{text}</a>
			</Link>
		)
	} else {
		return (
			<button className={`${classes} w-full`} onSubmit={onSubmit}>
				{text}
			</button>
		)
	}
}

export default Button
