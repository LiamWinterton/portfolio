import MenuItem from '@/components/Menu/MenuItem'

const Menu = () => {
	return (
		<nav className="flex justify-between items-center pt-9 lg:pt-16">
			<MenuItem href="/" text="<Liam.Winterton/>" />

			<div className="space-y-2 lg:hidden">
				<div className="w-8 h-0.5 bg-black-off"></div>
				<div className="w-8 h-0.5 bg-black-off"></div>
				<div className="w-8 h-0.5 bg-black-off"></div>
			</div>

			<ul className="hidden lg:flex lg:space-x-16">
				<li>
					<MenuItem href="/#projects" text="My Work" />
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
