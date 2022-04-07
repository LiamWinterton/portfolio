import Image from 'next/image'

import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'

const ContactForm = () => {
	return (
		<div className="bg-white py-16 mt-20 relative">
			<div className="container w-11/12 relative z-50">
				<form className="shadow-2xl rounded-lg max-w-md mx-auto my-16 bg-white p-9">
					<legend className="text-3xl font-bold mb-9 text-center text-primary">
						Want to connect?
					</legend>
					<fieldset className="space-y-6 mb-6">
						<Input
							label="Your Name"
							type="text"
							name="name"
							id="name"
						/>
						<Input
							label="Your Email"
							type="email"
							name="email"
							id="email"
						/>
					</fieldset>
					<Button type="submit" text="Send"></Button>
				</form>
			</div>
			<div className="absolute z-40 top-0 right-0 w-6/12 py-16">
				<Image
					src="/images/lego-background.jpg"
					layout="responsive"
					alt=""
					width={460}
					height={307}
					className="rounded-l-xl"
				/>
			</div>
		</div>
	)
}

export default ContactForm
