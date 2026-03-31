import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <nav className='md:max-w-152 md:mx-auto my-5 md:py-3.5 md:px-3 flex justify-between items-center gap-4 backdrop-blur-xl bg-white/20 border border-white/10 shadow-lg rounded-full'>
        <div className='font-bold ml-5'>
          <h1 className="text-xl">EfraimUrelPalodang</h1>
        </div>
        <div className='rounded-full py-3.5 px-1.5 font-medium bg-white/20 backdrop-blur-xl'>
          <ul className='flex justify-between gap-1 text-sm'>
            <li><Link href={'#'} className="flex-4.5 rounded-full py-3 px-6 hover:backdrop-blur-xl hover:bg-white/10 hover:shadow-lg hover:text-gray-900 text-gray-500 transition-all">Beranda</Link></li>
            <li><Link href={'#'} className="flex-4.5 rounded-full py-3 px-6 hover:backdrop-blur-xl hover:bg-white/10 hover:shadow-lg hover:text-gray-900 text-gray-500 transition-all">Layanan</Link></li>
            <li><Link href={'#'} className="flex-4.5 rounded-full py-3 px-6 hover:backdrop-blur-xl hover:bg-white/10 hover:shadow-lg hover:text-gray-900 text-gray-500 transition-all">Kontak</Link></li>
          </ul>
        </div>  
      </nav>
    </div>
  )
}

export default Navbar