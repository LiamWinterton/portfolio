import Link from 'next/link'

const MenuItem = props => {
	const { classes } = props

	return (
		<Link href={props.href}>
			<a className="font-bold uppercase text-2xl">{props.text}</a>
		</Link>
	)
}

export default MenuItem
