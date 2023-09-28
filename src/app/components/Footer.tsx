import IconDiscord from '../components/Icon/DiscordFooter';
import IconTelegram from '../components/Icon/TelegramFooter';
import IconTwitter from '../components/Icon/TwitterFooter';

export default function Footer() {
  return (
    <footer className='relative px-[16px]	pb-[54px]	lg:px-[62px] xl:px-[88px]'>
      <div className='relative overflow-hidden rounded-[17px]'>
        <div className='absolute inset-0'>
          <img
            src='/images/wrapper-footer.webp'
            alt='wrapper hero'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='relative px-[20px] pb-[39px] pt-[48px] md:px-[32px] xl:px-[65px] xl:pt-[64px]'>
          <div className='mx-auto mb-10 w-full max-w-[140px] md:hidden md:max-w-[250px] xl:max-w-[380px] 2xl:max-w-[495px]'>
            <img
              src='/images/logo-footer.png'
              alt='logo footer'
              className='h-full w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-12 gap-y-10 md:gap-x-10 xl:gap-x-20'>
            <div className='col-span-full flex flex-col justify-between space-y-10 md:col-span-3 md:space-y-0'>
              <div className='space-y-[10px]'>
                <div className='h6 font-bold text-[#00CC2D]'>Site Map</div>
                <div className='title-2 font-bold text-[#4E4E4E]'>Site Map</div>
              </div>

              <div className='space-y-[10px]'>
                <div className='h6 font-bold text-[#00CC2D]'>newsletter</div>
                <div>
                  <input
                    type='email'
                    placeholder='Email Address'
                    className='title-2 h-[48px] rounded-xl border-none bg-black px-[14px] py-[10px] text-[#00CC2D] placeholder:text-[#4E4E4E] focus:outline-none focus:ring-0 xl:h-[70px]'
                  />
                </div>
              </div>
            </div>
            <div className='col-span-full hidden space-y-[60px]  border-[#00CC2D] md:col-span-6 md:block  md:border-l md:border-r'>
              <div className='title-2 text-center text-[#737373]'>
                <p>Copyright Radar Network 2023</p>
                <p>All Rights Resered</p>
              </div>
              <div className='mx-auto w-full max-w-[140px] md:max-w-[250px] xl:max-w-[380px] 2xl:max-w-[495px]'>
                <img
                  src='/images/logo-footer.png'
                  alt='logo footer'
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='title-2 text-center text-[#737373]'>
                <p>Copyright Radar Network 2023</p>
                <p>All Rights Resered</p>
              </div>
            </div>
            <div className='col-span-full flex flex-col justify-between md:col-span-3'>
              <div className='space-y-[20px]'>
                <div className='h6 font-bold text-[#00CC2D]'>Contact</div>
                <div className='flex items-center space-x-[19px]'>
                  <div className='flex h-12 w-12 items-center justify-center rounded border-2 border-white duration-300 ease-in-out lg:hover:border-[#00CC2D] lg:hover:bg-[#00CC2D]'>
                    <IconDiscord />
                  </div>
                  <div className='flex h-12 w-12 items-center justify-center rounded border-2 border-white duration-300 ease-in-out lg:hover:border-[#00CC2D] lg:hover:bg-[#00CC2D]'>
                    <IconTelegram />
                  </div>
                  <div className='flex h-12 w-12 items-center justify-center rounded border-2 border-white duration-300 ease-in-out lg:hover:border-[#00CC2D] lg:hover:bg-[#00CC2D]'>
                    <IconTwitter />
                  </div>
                </div>
              </div>
              <div className='title-2 space-y-[20px] text-[#737373] xl:space-y-[30px]'>
                <div>Report</div>
                <div>Term & Conditions</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
          <div className='title-2 mt-10 text-center text-[#737373] md:hidden'>
            <p>Copyright Radar Network 2023</p>
            <p>All Rights Resered</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
