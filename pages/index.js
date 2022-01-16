import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import '@fontsource/plus-jakarta-sans';

export default function Home() {
	const [idea, setIdea] = React.useState('');
	
	const getIdea = async () => {
		const body = await (await fetch(`https://${window.location.hostname}/api/idea`)).json();
		setIdea(body.idea);
	};
	
	return (
		<div className='h-screen bg-gradient-to-b from-blue-800 to-rose-600 flex flex-col text-center text-slate-200 space-y-4 sm:space-y-6 lg:space-y-8 pt-32'>
			<Image src='/icon.svg' width='150' height='150' className='scale-75 sm:scale-90 lg:scale-100' alt=''></Image>
			<div className='font-extrabold text-3xl sm:text-5xl lg:text-7xl px-10 tracking-tight'>
				Hackathon Idea Generator
			</div>
			<div>
				<motion.button 
					className='text-xl sm:text-3xl lg:text-5xl bg-rosered rounded-lg p-3 lg:p-4 tracking-tight'
					onClick={getIdea}
					initial={{ scale: .8 }}
					whileHover={{ scale: .9 }}
				>Generate</motion.button>
			</div>
			<AnimatePresence exitBeforeEnter={true} initial={false}>{
				idea != '' && <motion.div 
					key={idea}
					initial={{ y: -30, opacity: 0 }} 
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 30, opacity: 0, transition: { duration: .5 } }}
					transition={{ duration: .5 }}
					className='text-xl sm:text-3xl lg:text-5xl tracking-tight'
				>{idea}</motion.div>}
			</AnimatePresence>
		</div>
	);
}