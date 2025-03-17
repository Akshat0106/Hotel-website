function Footer() {
  return (
    <footer className='w-full bg-black text-white py-10'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 text-center md:text-left justify-center'>
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-lg font-semibold mb-4'>Office Contact</h3>
          <p className='text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className='text-gray-400 mt-2'>+91 1111111111</p>
          <p className='text-gray-400'>abc@gmail/com</p>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-lg font-semibold mb-4'>Useful Pages</h3>
          <ul className='text-gray-400 space-y-2'>
            {['About Us', 'Rooms', 'Get In Touch'].map((item, index) => (
              <li key={index} className='hover:text-white cursor-pointer'>{item}</li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-lg font-semibold mb-4'>Useful Pages</h3>
          <ul className='text-gray-400 space-y-2'>
            {['Facilities', 'Tariff', 'Attractions'].map((item, index) => (
              <li key={index} className='hover:text-white cursor-pointer'>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='max-w-7xl mx-auto mt-8 flex flex-col items-center text-center text-gray-400 text-sm'>
        <div className='w-20 h-[3px] bg-gray-600 mb-4'></div>
        <p>© 2025, All Rights Reserved | Powered By: Akshat Gupta</p>
        <div className='flex justify-center space-x-4 mt-4'>
          {['facebook-f', 'twitter', 'instagram'].map((icon, index) => (
            <a key={index} href='#' className='text-gray-400 hover:text-white'>
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
