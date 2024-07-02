const Header = () => {
  return (
    <header className='w-full flex justify-between items-center p-4 bg-gray-900 text-white'>
      <h1 className='text-2xl font-bold tracking-wide'>PUB-Flix</h1>
      <nav className='flex space-x-4'>
        <div>
          <a href="/" className='text-lg hover:text-teal-400 transition duration-300'>Beranda</a>
        </div>
        <div>
          <a href="/film" className='text-lg hover:text-teal-400 transition duration-300'>Film</a>
        </div>
        <div>
          <a href="/contact" className='text-lg hover:text-teal-400 transition duration-300'>Kontak</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
