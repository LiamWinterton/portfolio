import Link from 'next/link'

const MenuItem = props => {
	return (
		<Link href={props.href}>
			<a className="text-2xl font-bold uppercase">{props.text}</a>
		</Link>
	)
}

export default MenuItem
