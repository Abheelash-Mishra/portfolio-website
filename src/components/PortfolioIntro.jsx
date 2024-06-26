import { motion } from 'framer-motion';

const PortfolioIntro = () => {
	const introVariants = {
		offscreen: {
			y: 300,
			opacity: 0,
		},
		onscreen: {
			y: 50,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
				delay: 0.2
			}
		}
	};

	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{once: true}}
			className={ "w-full text-cyberpunkYellow lg:text-8xl md:text-6xl xs:text-4xl text-3xl xs:text-left text-center" }
			variants={ introVariants }
			id={"aboutMe"}
		>
			<h1 className={"lg:mx-20 xs:mx-12 mx-6"}> Welcome To My Portfolio </h1>
		</motion.div>
	);
};

export default PortfolioIntro;