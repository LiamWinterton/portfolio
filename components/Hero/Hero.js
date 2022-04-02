import HeroContent from '@/components/Hero/HeroContent'
import HeroImage from '@/components/Hero/HeroImage'

const Hero = () => {
	return (
		<div className="grid grid-cols-2 grid-rows-1 gap-8 py-32">
			<HeroContent />
			<HeroImage />
		</div>
	)
}

export default Hero
