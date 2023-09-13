import IconStar from '../components/Icon/Star';

export default function Header() {
  return (
    <header className='relative top-0 z-50 w-full'>
      <div className='relative flex h-[84px] w-full items-center border-b border-white 2xl:h-[121px]'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='w-full max-w-[100px] md:max-w-[180px] 2xl:max-w-[312px]'>
              <img
                src='/images/logo.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>

            <div className='hidden md:block'>
              <ul className='title-2 flex items-center space-x-[20px] font-semibold uppercase text-white xl:space-x-[40px] 2xl:space-x-[55px]'>
                <li>Work</li>
                <li>Our Services</li>
                <li>About</li>
                <li>Our Ecosystem</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[-25px] left-1/2 -translate-x-1/2'>
        <IconStar />
      </div>
    </header>
  );
}
