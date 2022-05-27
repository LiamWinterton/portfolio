import ProjectCard from '@/components/Projects/ProjectCard'

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: 'Star Wars: The Archive',
			technologies: ['React', 'Next.js'],
			subtitle: 'Star Wars Wiki',
			content:
				'A collection of Star Wars information, displayed in an easy to read format. Information provided via a public API',
			link: 'https://star-wars-the-archive.vercel.app/',
			thumbnail: '/images/star-wars-the-archive-thumb.png'
		}
	]

	return (
		<div id="projects" className="space-y-9 lg:space-y-16">
			{projects.map(project => {
				const {
					id,
					title,
					technologies,
					subtitle,
					content,
					link,
					thumbnail
				} = project

				return (
					<ProjectCard
						key={id}
						title={title}
						technologies={technologies}
						subtitle={subtitle}
						content={content}
						link={link}
						thumbnail={thumbnail}
					/>
				)
			})}
		</div>
	)
}

export default Projects
