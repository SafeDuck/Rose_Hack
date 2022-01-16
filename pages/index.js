import '../components/Layout';
import '@fontsource/plus-jakarta-sans';

export default function Home() {
	return (
		<div className="h-screen bg-gradient-to-br from-blue-600 to-pink-600 flex justify-center">
			<div className='mt-10 text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
				Hackathon Idea Generator
			</div>
		</div>
	);
}