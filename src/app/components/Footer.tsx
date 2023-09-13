import IconDiscord from '../components/Icon/Discord';
import IconTelegram from '../components/Icon/Telegram';
import IconTwitter from '../components/Icon/Twitter';

export default function Footer() {
  return (
    <footer className='relative px-[88px] pb-[54px]'>
      <div className='relative overflow-hidden rounded-[17px]'>
        <div className='absolute inset-0'>
          <img
            src='/images/wrapper-footer.webp'
            alt='wrapper hero'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='relative px-[65px] pb-[39px] pt-[64px]'>
          <div className='grid grid-cols-12 gap-x-20'>
            <div className='col-span-3 flex flex-col justify-between'>
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
                    className='title-2 h-[70px] rounded-xl border-none bg-black px-[14px] py-[10px] placeholder:text-[#4E4E4E]'
                  />
                </div>
              </div>
            </div>
            <div className='col-span-6 space-y-[60px] border-l border-r border-[#00CC2D]'>
              <div className='title-2 text-center text-[#737373]'>
                <p>Copyright Radar Network 2023</p>
                <p>All Rights Resered</p>
              </div>
              <div className='mx-auto w-full max-w-[495px]'>
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
            <div className='col-span-3 flex flex-col justify-between'>
              <div className='space-y-[20px]'>
                <div className='h6 font-bold text-[#00CC2D]'>Contact</div>
                <div className='flex items-center space-x-[19px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
              <div className='title-2 space-y-[30px] text-[#737373]'>
                <div>Report</div>
                <div>Term & Conditions</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
