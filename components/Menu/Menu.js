import MenuItem from '@/components/Menu/MenuItem'

const Menu = () => {
	return (
		<nav className="flex justify-between items-center pt-16">
			<MenuItem href="/" text="<Liam.Winterton/>" />
			<ul className="flex space-x-16">
				<li>
					<MenuItem href="/" text="My Work" />
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
