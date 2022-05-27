import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import ContactForm from '@/components/ContactForm/ContactForm'
import Head from 'next/head'

export default function Home() {
	return (
		<article>
			<Head>
				<title>{'Liam.winterton | Full Stack Web Developer'}</title>
			</Head>
			<div className="container w-11/12">
				<Hero />
				<Projects />
			</div>

			<ContactForm />
		</article>
	)
}
