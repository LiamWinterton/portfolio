import MenuItem from '@/components/Menu/MenuItem'

const Menu = () => {
	return (
		<nav className="flex justify-between items-center pt-16">
			<MenuItem href="/" text="Home" classes={['text-4xl']} />
			<ul className="flex space-x-6">
				<li>
					<MenuItem href="/" text="Projects" />
				</li>
				<li>
					<MenuItem href="/" text="About me" />
				</li>
				<li>
					<MenuItem href="/" text="Github" />
				</li>
				<li>
					<MenuItem href="/" text="Contact" />
				</li>
			</ul>
		</nav>
	)
}

export default Menu
