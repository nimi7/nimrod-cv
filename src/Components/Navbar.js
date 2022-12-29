import react from 'react'
import Nimi from '../Pics/Nimi2.png'
import MyCV from '../Pics/Neriya-CV.docx'

export default function Navbar() {
   
   
    return (
        <div id='About' >
           

            <div class="relative bg-white overflow-hidden">
                <div class="max-w-7xl mx-auto">
                    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg class="lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <div>
                            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                                <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                    <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                           
                                    </div>
                                   
                                </nav>
                            </div>


                    
                        </div>

                        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-10">
                            <div class="sm:text-center lg:text-left">
                                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                                    <span class="block xl:inline">Hi,  <br /> I`m Neriya Wandam</span><br/>
                                    <span class="block text-indigo-600 xl:inline"> a Front-End developer</span>
                                </h1>
                                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    I enjoy working on branding, product design, and strategy with passionate people. , whether it's a website or an interface.
                                </p>
                                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center ">
                                    <div class="rounded-md shadow">
                                        <a href="https://github.com/nimi7" class="w-full mt-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                            Github

                                        </a>

                                    </div>


                                    <div class="mt-3 sm:mt-0 sm:ml-3">

                                        <a href={MyCV} class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10" download>
                                            Download my Resume 😎
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-4/5" src={Nimi} alt="" />
                </div>
            </div>
        </div>
    )
}

