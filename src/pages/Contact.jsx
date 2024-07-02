const Contact = () => {
    return (
      <main className='h-screen flex justify-center items-center p-4'>
          <div className='bg-slate-200 p-8 rounded-lg shadow-lg'>
              <h1 className='text-3xl font-bold text-gray-900 mb-4'>Kelompok Nebula</h1>
              <div className='grid grid-cols-2 gap-4'>
                  <div>
                      <p className='text-gray-700 font-semibold'>Nama</p>
                      <p className='text-lg text-gray-900'>Salim Hidayat</p>
                  </div>
                  <div>
                      <p className='text-gray-700 font-semibold'>TTL</p>
                      <p className='text-lg text-gray-900'>Ciamis, 22 Februari 2002</p>
                  </div>
                  <div>
                      <p className='text-gray-700 font-semibold'>Pelatihan</p>
                      <p className='text-lg text-gray-900'>React Dasar</p>
                  </div>
                  <div>
                      <p className='text-gray-700 font-semibold'>Nama Instruktur</p>
                      <p className='text-lg text-gray-900'>Riri Triana</p>
                  </div>
              </div>
          </div>
      </main>
    );
  };
  
  export default Contact;
  