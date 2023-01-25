export default function Projects() {
	return (
		<div className='flex flex-wrap w-[auto] md:w-[90%] m-auto justify-center gap-4 mt-10'>
			<div class='group flex flex-col items-center gap-y-4 max-w-sm w-[500px] min-w-[450px] h-auto bg-white border border-gray-200 rounded-lg shadow py-4 px-[10px]'>
				<h4 className='text-center font-bold text-2xl'>Donut.com</h4>
				<p className='text-center'>
					This is my first website using three.js following official
					documentation
				</p>
				<video
					src='https://user-images.githubusercontent.com/57721146/211682632-3d93afd8-888e-4e66-b1ba-d82bd9f844cb.mp4'
					controls
					loop
					preload='auto'
				>
					Tu navegador no admite el elemento <code>video</code>.
				</video>

				<span className='flex h-full justify-evenly items-center mx-5 gap-2 max-w-sm flex-wrap'>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg'
					/>
				</span>

				<button
					type='button'
					class='inline-flex md:hidden group-hover:inline-flex text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-2 mb-2 w-2/3'
				>
					<svg
						class='w-4 h-4 mr-2 -ml-1'
						aria-hidden='true'
						focusable='false'
						data-prefix='fab'
						data-icon='github'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 496 512'
					>
						<path
							fill='currentColor'
							d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
						></path>
					</svg>
					<a href='https://github.com/maat-mind/donut-com' target='_blank'>
						Watch Github repository
					</a>
				</button>
			</div>

			<div class='group flex items-center flex-col gap-y-4 max-w-sm w-[500px] min-w-[450px] h-auto bg-white border border-gray-200 rounded-lg shadow py-4 px-[10px]'>
				<h4 className='text-center font-bold text-2xl'>Henry Dogs</h4>
				<p className='text-center'>
					The objective of this project was to reinforce and connect the
					concepts learned in the bootcamp
				</p>
				<video
					src='https://user-images.githubusercontent.com/57721146/204037737-bb346711-1dd8-4847-a832-b9a350d388f2.mp4'
					controls
					loop
					preload='auto'
				>
					Tu navegador no admite el elemento <code>video</code>.
				</video>

				<span className='flex justify-evenly h-full items-center mx-5 gap-2 max-w-sm flex-wrap'>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
					/>

					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
					/>

					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
					/>

					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
					/>
				</span>

				<button
					type='button'
					class='inline-flex md:hidden group-hover:inline-flex text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-2 mb-2 w-2/3'
				>
					<svg
						class='w-4 h-4 mr-2 -ml-1'
						aria-hidden='true'
						focusable='false'
						data-prefix='fab'
						data-icon='github'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 496 512'
					>
						<path
							fill='currentColor'
							d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
						></path>
					</svg>

					<a href='https://github.com/maat-mind/PI-Dogs-main' target='_blank'>
						Watch Github repository
					</a>
				</button>
			</div>

			<div class='group flex items-center flex-col gap-y-4 max-w-sm w-[500px] min-w-[450px] h-auto bg-white border border-gray-200 rounded-lg shadow py-4 px-[10px]'>
				<h4 className='text-center font-bold text-2xl'>Crud Rest Api</h4>
				<p className='text-center'>App built with Java Spring Boot Framework</p>

				<img
					className='object-contain max-h-[300px]'
					src='https://user-images.githubusercontent.com/57721146/212571358-597a9b0d-eca7-4ddb-bfb1-7adf7170e728.png'
					alt=''
				/>

				<span className='flex justify-evenly h-full items-center mx-5 gap-2 max-w-sm flex-wrap'>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
					/>
				</span>

				<button
					type='button'
					class='inline-flex md:hidden group-hover:inline-flex text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-2 mb-2 w-2/3'
				>
					<svg
						class='w-4 h-4 mr-2 -ml-1'
						aria-hidden='true'
						focusable='false'
						data-prefix='fab'
						data-icon='github'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 496 512'
					>
						<path
							fill='currentColor'
							d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
						></path>
					</svg>
					<a
						href='https://github.com/maat-mind/spring-rest-api'
						target='_blank'
					>
						Watch Github repository
					</a>
				</button>
			</div>

			<div class='group flex items-center flex-col gap-y-4 max-w-sm w-[500px] min-w-[450px] h-auto bg-white border border-gray-200 rounded-lg shadow py-4 px-[10px]'>
				<h4 className='text-center font-bold text-2xl'>Reply</h4>
				<p className='text-center'>
					This social network is the final group project to graduate from
					bootcamp, where I learned the tools and technologies needed to develop
					a complete and functional web application.
				</p>

				<img
					className='object-contain max-h-[300px]'
					src='https://user-images.githubusercontent.com/57721146/214458490-998c0d27-1b92-4bb2-8904-722baeb66754.png'
					alt=''
				/>

				<span className='flex justify-evenly h-full items-center mx-5 gap-2 max-w-sm flex-wrap'>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
					/>

					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
					/>

					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
					/>
				</span>

				<button
					type='button'
					class='inline-flex md:hidden group-hover:inline-flex text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-2 mb-2 w-2/3'
				>
					<svg
						class='w-4 h-4 mr-2 -ml-1'
						aria-hidden='true'
						focusable='false'
						data-prefix='fab'
						data-icon='github'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 496 512'
					>
						<path
							fill='currentColor'
							d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
						></path>
					</svg>
					<a
						href='https://github.com/maat-mind/Social-Network-PF-FRONT'
						target='_blank'
					>
						Watch Github repository
					</a>
				</button>
			</div>

			<div class='group flex items-center flex-col gap-y-4 max-w-sm w-[500px] min-w-[450px] h-auto bg-white border border-gray-200 rounded-lg shadow py-4 px-[10px]'>
				<h4 className='text-center font-bold text-2xl'>React calculator</h4>
				<p className='text-center'>
					Interactive calculator that allows you to perform basic operations
					with natural numbers
				</p>

				<img
					className='object-contain max-h-[300px]'
					src='https://user-images.githubusercontent.com/57721146/177380891-25e00068-216b-4feb-bc41-d1e71ad0f2db.gif'
					alt=''
				/>

				<span className='flex justify-evenly h-full items-center mx-5 gap-2 max-w-sm flex-wrap'>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
					/>
				</span>

				<button
					type='button'
					class='inline-flex md:hidden group-hover:inline-flex text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-2 mb-2 w-2/3'
				>
					<svg
						class='w-4 h-4 mr-2 -ml-1'
						aria-hidden='true'
						focusable='false'
						data-prefix='fab'
						data-icon='github'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 496 512'
					>
						<path
							fill='currentColor'
							d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
						></path>
					</svg>
					<a
						href='https://github.com/maat-mind/react-calculator'
						target='_blank'
					>
						Watch Github repository
					</a>
				</button>
			</div>

			<div class='group flex items-center flex-col gap-y-4 max-w-sm w-[500px] min-w-[450px] h-auto bg-white border border-gray-200 rounded-lg shadow py-4 px-[10px]'>
				<h4 className='text-center font-bold text-2xl w-[80%] m-auto'>
					Redux toolkit & Tailwind counter
				</h4>
				<p className='text-center'>
					Practice app using redux toolkit and tailwind css, simple counter app
					that add, subtract and reset global state
				</p>

				<video
					src='https://user-images.githubusercontent.com/57721146/205314772-57ba508c-22c7-4460-a021-e07e4852d20e.mp4'
					controls
					loop
					preload='auto'
				>
					Tu navegador no admite el elemento <code>video</code>.
				</video>

				<span className='flex justify-evenly h-full items-center mx-5 gap-2 max-w-sm flex-wrap'>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
					/>
					<img
						className='w-12'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
					/>
				</span>

				<button
					type='button'
					class='inline-flex md:hidden group-hover:inline-flex text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-2 mb-2 w-2/3'
				>
					<svg
						class='w-4 h-4 mr-2 -ml-1'
						aria-hidden='true'
						focusable='false'
						data-prefix='fab'
						data-icon='github'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 496 512'
					>
						<path
							fill='currentColor'
							d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
						></path>
					</svg>
					<a href='https://github.com/maat-mind/rtk-tw-counter' target='_blank'>
						Watch Github repository
					</a>
				</button>
			</div>
		</div>
	)
}
