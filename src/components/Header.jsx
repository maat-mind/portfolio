import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'

export default function Header() {
	return (
		<header className='flex items-center justify-end my-8  md:w-full'>
			<div className='w-1/3'>
				<h1 className='text-5xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
					maatmind
				</h1>
			</div>
			<div className='flex w-2/3'>
				<section className='w-5/6'>
					<ul className='flex justify-evenly text-2xl mx-4'>
						<li className='mx-2'>Home</li>
						<li className='mx-2'>About</li>
						<li className='mx-2'>Tech Stack</li>
						<li className='mx-2'>Projects</li>
						<li className='mx-2'>Contact</li>
					</ul>
				</section>
				<section className='w-1/6'>
					<ul className='flex justify-center'>
						<li className='mx-4'>
							<a href='https://github.com/maat-mind' target='_blank'>
								<img src={githubIcon} alt='github logo icon' />
							</a>
						</li>
						<li className='mx-4'>
							<a href='https://linkedin.com/in/maat-mind' target='_blank'>
								<img src={linkedinIcon} alt='github logo icon' />
							</a>
						</li>
					</ul>
				</section>
			</div>
		</header>
	)
}
