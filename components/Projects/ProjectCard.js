import Button from '@/components/UI/Button'

const ProjectCard = ({ title, technologies, subtitle, content }) => {
	return (
		<div className="bg-white p-9 rounded-xl flex justify-between gap-9 lg:p-16">
			<div className="flex flex-col flex-grow">
				<div className="mb-6">
					<h3 className="text-4xl font-bold mb-3">{title}</h3>
					<p className="text-lg">{technologies.join(' - ')}</p>
				</div>
				<div>
					<p className="subtitle mb-3">{subtitle}</p>
					<p>{content}</p>
				</div>
				<div className="mt-6 lg:mt-auto">
					<Button href="/" text="View Project" />
				</div>
			</div>

			<div className="hidden lg:block w-[600px] h-[350px] bg-gray-300 rounded-lg"></div>
		</div>
	)
}

export default ProjectCard
