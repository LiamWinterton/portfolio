import MenuItem from '@/components/Menu/MenuItem'

const Menu = () => {
	return (
		<nav className="flex justify-between items-center pt-16">
			<MenuItem href="/" text="Home" classes={['text-4xl']} />
			<ul className="flex space-x-16">
				<li>
					<MenuItem href="/" text="Projects" classes={['text-2xl']} />
				</li>
				<li>
					<MenuItem href="/" text="About me" classes={['text-2xl']} />
				</li>
				<li>
					<MenuItem href="/" text="Github" classes={['text-2xl']} />
				</li>
				<li>
					<MenuItem href="/" text="Contact" classes={['text-2xl']} />
				</li>
			</ul>
		</nav>
	)
}

export default Menu
