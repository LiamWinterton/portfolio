import Link from 'next/link'

const MenuItem = props => {
	const { classes } = props

	let classList = 'text-2xl font-bold uppercase'

	if (classes) {
		classList = `${classList} ${classes.join(' ')}`
	}

	return (
		<Link href={props.href}>
			<a className={classList}>{props.text}</a>
		</Link>
	)
}

export default MenuItem
