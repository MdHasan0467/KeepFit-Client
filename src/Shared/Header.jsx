import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="p-4 bg-gray-800 text-gray-100">
	<div className="container flex justify-between mx-auto">


		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<span className='border-b border-b-orange-500'>Keep</span><span className='bg-orange-500 rounded-full px-1'>Fit</span>
		</a>


		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Classes</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Teachers</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Contact</a>
			</li>
		</ul>


		<div className="items-center flex-shrink-0 hidden lg:flex">
			
			<button className="self-center px-4 py-3 font-semibold bg-orange-600 text-white rounded-full">Become a member</button>
		</div>



		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        </div>
    );
};

export default Header;