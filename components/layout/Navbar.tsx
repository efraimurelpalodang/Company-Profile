import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <nav className='max-w-3xl mx-auto px-4 my-5 p-5 flex justify-around items-center gap-1'>
        <div className='font-bold'>
          <h1 className="text-3xl">EasyClickService.</h1>
        </div>
        <div className='bg-green-300 flex-4.5 rounded-full py-3.5 px-1.5 font-medium'>
          <ul className='flex justify-between gap-1 text-sm'>
            <li><Link href={'#'} className="hover:bg-gray-800 hover:text-gray-50 transition-all duration-500 py-2 px-4 rounded-full">Beranda</Link></li>
            <li><Link href={'#'} className="hover:bg-gray-800 hover:text-gray-50 transition-all duration-500 py-2 px-4 rounded-full">Tentang Kami</Link></li>
            <li><Link href={'#'} className="hover:bg-gray-800 hover:text-gray-50 transition-all duration-500 py-2 px-4 rounded-full">Kontak Kami</Link></li>
          </ul>
        </div>  
      </nav>
    </div>
  )
}

export default Navbar