import Image from 'next/image'
import mainBackground from '../../../public/images/main_bg.svg'

export default function Background() {
	return (
		<div style={{ 
			position: 'fixed', 
			top: 0,
			left: 0,
			width: '100vw', 
			height: '100vh', 
			zIndex: -10000 
		}}>
			<Image
				alt="background"
				src={mainBackground}
				fill
				sizes="100vw"
				style={{ 
					objectFit: 'cover',
					position: 'absolute'
				}}
				quality={100}
			/>
		</div>
	);
}
