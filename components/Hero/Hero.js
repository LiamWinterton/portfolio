import HeroContent from '@/components/Hero/HeroContent'
import HeroImage from '@/components/Hero/HeroImage'

const Hero = () => {
	return (
		<div className="flex justify-between items-center space-x-8 py-32">
			<HeroContent />
			<HeroImage />
		</div>
	)
}

export default Hero
