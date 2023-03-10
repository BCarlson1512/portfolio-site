export default function Navbar(){
    return (
        <>
            <div class="flex bg-gray-200 h-20 items-center justify-evenly px-8 font-sans font-medium text-lg drop-shadow-md border-b-2 border-gray-300 antialiased">
                    <div class="flex space-x-4 justify-evenly divide-x-1 divide-gray-500">
                        <a class="flex justify-center w-20 pl-4 hover:text-emerald-600 transition" href="/">Home</a>
                        <a class="flex justify-center w-20 pl-4 hover:text-emerald-600 transition" href="/about">About</a>
                        <a class="flex justify-center w-28 pl-4 hover:text-emerald-600 transition" href="/projects">Experience</a>
                    </div>
                    <div class="ml-auto w-25 px-4 py-1 border rounded-lg border-2 border-green-200 text-white bg-gradient-to-r from-green-300 to-emerald-500 transition hover:border-green-300 hover:from-green-400 hover:to-emerald-600 hover:transition transition">
                        <a class="flex justify-center transition" href="/contact">Lets Connect</a>
                    </div>
            </div>
        </>
    )
}
