import Image from 'next/image'

const HeroImage = () => {
	return (
		<div className="w-full h-full">
			<div className="image-container">
				<Image src="/images/my-room.png" layout="fill" alt="" />
			</div>
		</div>
	)
}

export default HeroImage
