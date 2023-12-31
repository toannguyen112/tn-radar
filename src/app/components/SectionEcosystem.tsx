import IconDiscord from '../components/Icon/Discord';
import IconTelegram from '../components/Icon/Telegram';
import IconTwitter from '../components/Icon/Twitter';

export default function SectionEcosystem() {
  return (
    <section className='relative	pb-[53px] md:pb-[74px] xl:pt-[258px] 2xl:pb-[106px]'>
      <div className='absolute left-0 top-1/2 hidden w-[400px] translate-y-[-30%] md:block xl:w-[600px]'>
        <img
          src='/images/green-blur-left.png'
          alt='wrapper hero'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='absolute right-0 top-1/2 hidden w-[400px] translate-y-[-30%] md:block xl:w-[600px]'>
        <img
          src='/images/green-blur-right.png'
          alt='wrapper hero'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='relative overflow-hidden px-[16px] lg:px-[62px] xl:px-[88px]'>
        <div className='h1 text-center font-extrabold uppercase text-white'>
          Our Ecosystem
        </div>
        <div className='relative pb-[76px] pt-[22px] md:pb-[106px] md:pt-[31px] 2xl:pb-[151px] 2xl:pt-[44px]'>
          <div className='title-1 ml-auto w-full max-w-[500px] border border-[#00CC2D] px-[40px] py-[24px] text-center text-white lg:max-w-[600px] xl:max-w-[900px] xl:px-[80px] 2xl:max-w-[1542px] 2xl:translate-x-[465px] 2xl:px-[172px]'>
            <div className='w-full max-w-[900px] 2xl:max-w-[1052px]'>
              We build concepts that are big enough to exist everywhere, brave
              enough to break boundaries in execution, and rich enough to
              connect with millions of people individually in the crypto world.
            </div>
          </div>
          <div className='w-max rounded-full border border-[#00CC2D] px-[50px] py-[24px] text-center text-white max-sm:mx-auto lg:absolute lg:top-[45%] xl:top-[50%] 2xl:top-[40%]'>
            <div className='relative'>
              <div className='fade-in w-full max-w-[120px] lg:max-w-[200px] xl:max-w-[262px] 2xl:max-w-[365px]'>
                <img
                  src='/images/radar.png'
                  alt='wrapper hero'
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='fade-out absolute inset-0 max-w-[120px] lg:max-w-[200px] xl:max-w-[262px] 2xl:max-w-[365px]'>
                <img
                  src='/images/micro.png'
                  alt='wrapper hero'
                  className='h-full w-full'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
          <div className='border-t border-[#00CC2D] py-[22px] md:py-[31px] 2xl:py-[44px]'>
            <div className='grid grid-cols-4 items-center justify-center gap-[32px]	lg:flex	lg:space-x-[32px] 2xl:space-x-[80px]'>
              <div className='items-center space-y-[10px] border-r border-[#00CC2D] pr-[20px] md:pr-[32px] xl:flex xl:space-x-[20px] xl:space-y-0 2xl:pr-[80px]'>
                <div className='w-[120px] lg:w-[150px] 2xl:w-[225px]'>
                  <img
                    src='/images/eco-1.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
              <div className='items-center space-y-[10px] border-r border-[#00CC2D] pr-[20px] md:pr-[32px] xl:flex xl:space-x-[20px] xl:space-y-0 2xl:pr-[80px]'>
                <div className='w-[120px] lg:w-[150px] 2xl:w-[228px]'>
                  <img
                    src='/images/eco-2.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
              <div className='items-center space-y-[10px] border-[#00CC2D] pr-[20px] md:pr-[32px] lg:border-r xl:flex xl:space-x-[20px] xl:space-y-0 2xl:pr-[80px]'>
                <div className='w-[120px] lg:w-[200px] 2xl:w-[251px]'>
                  <img
                    src='/images/eco-3.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
              <div className='items-center space-y-[10px] xl:flex xl:space-x-[20px] xl:space-y-0'>
                <div className='w-[120px] lg:w-[100px] xl:w-[150px] 2xl:w-[198px]'>
                  <img
                    src='/images/eco-4.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className='border-t border-[#00CC2D] py-[22px] md:py-[31px] 2xl:py-[44px]'>
            <div className='grid grid-cols-3 items-center justify-center space-x-[20px] md:space-x-[32px]	lg:flex	2xl:space-x-[80px]'>
              <div className='items-center space-x-[10px] border-r border-[#00CC2D] pr-[83px] md:pr-[80px] xl:flex	xl:space-x-[20px]	2xl:pr-[165px]'>
                <div className='w-[140px] lg:w-[180px] 2xl:w-[254px]'>
                  <img
                    src='/images/eco-5.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
              <div className='items-center space-x-[10px] border-r border-[#00CC2D] pr-[83px] md:pr-[80px] xl:flex	xl:space-x-[20px]	2xl:pr-[165px]'>
                <div className='w-[150px] lg:w-[250px] 2xl:w-[306px]'>
                  <img
                    src='/images/eco-6.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
              <div className='items-center space-x-[10px] xl:flex xl:space-x-[20px]'>
                <div className='w-[150px] lg:w-[240px] 2xl:w-[290px]'>
                  <img
                    src='/images/eco-7.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className='border-b border-t border-[#00CC2D] py-[22px]	md:py-[31px] 2xl:py-[44px]'>
            <div className='flex items-center justify-center space-x-[20px]	md:space-x-[32px]	2xl:space-x-[80px]'>
              <div className='items-center space-x-[10px] border-r border-[#00CC2D] pr-[83px] md:pr-[80px] xl:flex	xl:space-x-[20px]	2xl:pr-[165px]'>
                <div className='w-[150px] lg:w-[250px] 2xl:w-[335px]'>
                  <img
                    src='/images/eco-8.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
              <div className='items-center space-x-[10px] border-r border-[#00CC2D] pr-[83px] md:pr-[80px] xl:flex	xl:space-x-[20px]	2xl:pr-[165px]'>
                <div className='w-[150px] lg:w-[200px] xl:w-[250px] 2xl:w-[312px]'>
                  <img
                    src='/images/eco-9.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
              <div className='items-center space-x-[10px] xl:flex xl:space-x-[20px]'>
                <div className='w-[150px] lg:w-[220px] 2xl:w-[257px]'>
                  <img
                    src='/images/eco-10.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className='border-b border-t border-[#00CC2D] py-[22px]	md:py-[31px] 2xl:py-[44px]'>
            <div className='flex items-center justify-center space-x-[20px]	md:space-x-[32px]	2xl:space-x-[80px]'>
              <div className='items-center space-x-[10px] border-r border-[#00CC2D] pr-[83px] md:pr-[80px] xl:flex	xl:space-x-[20px]	2xl:pr-[165px]'>
                <div className='w-full max-w-[298px]'>
                  <img
                    src='/images/eco-13.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
              <div className='items-center space-x-[10px] border-r border-[#00CC2D] pr-[83px] md:pr-[80px] xl:flex	xl:space-x-[20px]	2xl:pr-[165px]'>
                <div className='w-full max-w-[270px]'>
                  <img
                    src='/images/eco-11.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>

              <div className='items-center space-x-[10px] xl:flex xl:space-x-[20px]'>
                <div className='w-full max-w-[330px]'>
                  <img
                    src='/images/eco-12.png'
                    alt='wrapper hero'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex space-x-[10px] xl:block xl:space-x-0 xl:space-y-[10px] 2xl:space-y-[15px]'>
                  <IconDiscord />
                  <IconTelegram />
                  <IconTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col space-y-12 md:hidden'>
          <div className='flex w-full items-center justify-between space-x-10'>
            <div className='w-[72%]'>
              <img
                src='/images/eco-1.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
          <div className='flex w-full items-center justify-between space-x-10'>
            <div className='w-[72%]'>
              <img
                src='/images/eco-2.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
          <div className='flex w-full items-center justify-between space-x-10'>
            <div className='w-[72%]'>
              <img
                src='/images/eco-3.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
          <div className='flex w-full items-center justify-between space-x-10'>
            <div className='w-[62%]'>
              <img
                src='/images/eco-4.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
          <div className='flex w-full items-center justify-between space-x-10'>
            <div className='w-[72%]'>
              <img
                src='/images/eco-5.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
          <div className='flex w-full items-center justify-between space-x-10'>
            <div className='w-[72%]'>
              <img
                src='/images/eco-6.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
          <div className='flex w-full items-center justify-between space-x-10'>
            <div className='w-[72%]'>
              <img
                src='/images/eco-7.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
          <div className='flex w-full items-center justify-between space-x-10'>
            <div className='w-[72%]'>
              <img
                src='/images/eco-8.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
          <div className='flex w-full items-center justify-between space-x-10'>
            <div className='w-[66%]'>
              <img
                src='/images/eco-9.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
          <div className='flex w-full items-center justify-between space-x-10'>
            <div className='w-[90%]'>
              <img
                src='/images/eco-10.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
          <div className='flex w-full items-center justify-between '>
            <div className='w-[70%]'>
              <img
                src='/images/eco-11.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
          <div className='flex w-full items-center justify-between '>
            <div className='w-[70%]'>
              <img
                src='/images/eco-12.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
          <div className='flex w-full items-center justify-between '>
            <div className='w-[70%]'>
              <img
                src='/images/eco-13.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='space-y-2'>
              <IconDiscord />
              <IconTelegram />
              <IconTwitter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
