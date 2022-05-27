import Link from 'next/link'

const Button = ({ type, href, text, onSubmit, target, disabled }) => {
	const classes =
		'bg-primary hover:bg-primary-dark text-white font-bold uppercase rounded-lg py-3 px-6 inline-block disabled:cursor-not-allowed'

	console.log(disabled)

	if (type !== 'button' && type !== 'submit') {
		return (
			<Link href={href}>
				<a className={classes} target={target}>
					{text}
				</a>
			</Link>
		)
	} else {
		return (
			<button
				className={`${classes} w-full`}
				onSubmit={onSubmit}
				disabled={disabled}
			>
				{text}
			</button>
		)
	}
}

export default Button
