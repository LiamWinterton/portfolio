import Link from 'next/link'

const Button = ({ href, text }) => {
	return (
		<Link href={href}>
			<a className="bg-primary hover:bg-primary-dark text-white font-bold uppercase rounded-lg py-3 px-6 inline-block">
				{text}
			</a>
		</Link>
	)
}

export default Button
