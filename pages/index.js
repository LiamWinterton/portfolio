import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import ContactForm from '@/components/ContactForm/ContactForm'

export default function Home() {
	return (
		<article>
			<div className="container w-11/12">
				<Hero />
				<Projects />
			</div>

			<ContactForm />
		</article>
	)
}
