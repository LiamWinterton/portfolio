import Link from 'next/link'
import Image from 'next/image'

import Button from '@/components/UI/Button'

const ProjectCard = ({
	title,
	technologies,
	subtitle,
	content,
	link,
	thumbnail
}) => {
	return (
		<div className="bg-white p-9 rounded-xl flex justify-between gap-9 lg:p-16">
			<div className="flex flex-col flex-grow">
				<div className="mb-6">
					<h3 className="text-4xl font-bold mb-3">
						<Link href={link}>
							<a target="_blank">{title}</a>
						</Link>
					</h3>
					<p className="text-lg">{technologies.join(' - ')}</p>
				</div>
				<div>
					<p className="subtitle mb-3">{subtitle}</p>
					<p>{content}</p>
				</div>
				<div className="mt-6 lg:mt-auto">
					<Button href={link} text="View Project" target="_blank" />
				</div>
			</div>

			{thumbnail ? (
				<div className="hidden lg:block w-[600px] h-auto">
					<Image
						src={thumbnail}
						layout="responsive"
						width={600}
						height={400}
						alt={title}
						className="rounded-lg transition-all hover:scale-95"
					/>
				</div>
			) : (
				<div className="hidden lg:block w-[600px] h-[350px] bg-gray-300 rounded-lg"></div>
			)}
		</div>
	)
}

export default ProjectCard
