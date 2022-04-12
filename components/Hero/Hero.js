import HeroContent from '@/components/Hero/HeroContent'
import HeroImage from '@/components/Hero/HeroImage'

const Hero = () => {
	return (
		<div className="py-9 lg:flex lg:justify-between lg:items-center lg:space-x-8 lg:py-32">
			<div>
				<HeroContent />
			</div>
			<div className="hidden">
				<HeroImage />
			</div>
		</div>
	)
}

export default Hero
