import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'

export default function Header() {
	return (
		<header>
			<div className='header-icon'>
				<h1 className='header-icon-text'>&#123; maatmind &#125;</h1>
			</div>
			<div className='header-links'>
				<ul className='header-list'>
					<li>Home</li>
					<li>About</li>
					<li>Tech Stack</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className='header-pages'>
				<ul className='header-pages-list'>
					<li>
						<a
							className='header-pages-image'
							href='https://github.com/maat-mind'
							target='_blank'
						>
							<img src={githubIcon} alt='github logo icon' />
						</a>
					</li>
					<li>
						<a
							className='header-pages-image'
							href='https://linkedin.com/in/maat-mind'
							target='_blank'
						>
							<img src={linkedinIcon} alt='github logo icon' />
						</a>
					</li>
				</ul>
			</div>
		</header>
	)
}
