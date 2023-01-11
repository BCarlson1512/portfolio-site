export default function Navbar(){
    return (
        <>
            <div class="flex bg-gray-200 h-20 items-center justify-evenly px-8 font-sans font-medium text-lg antialiased">
                    <div class="flex space-x-4 justify-evenly divide-x-1 divide-gray-500">
                        <a class="flex justify-center w-20 pl-4 hover:text-indigo-600 transition" href="/">Home</a>
                        <a class="flex justify-center w-20 pl-4 hover:text-indigo-600 transition" href="/about">About</a>
                        <a class="flex justify-center w-20 pl-4 hover:text-indigo-600 transition" href="/projects">Projects</a>
                    </div>
                    <div class="ml-auto w-25 px-4 py-1 border rounded-lg border-2 border-gray-300 text-white bg-indigo-600 hover:bg-indigo-500 transition">
                        <a class="flex justify-center transition" href="/contact">Lets Connect</a>
                    </div>
            </div>
        </>
    )
}
