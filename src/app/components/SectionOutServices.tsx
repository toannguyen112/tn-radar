import IconEarned from '../components/Icon/Earned';
import IconEntertaiment from '../components/Icon/Entertaiment';
import IconExperience from '../components/Icon/Experience';

export default function SectionOutServices() {
  return (
    <section className='px-[44px]	pt-[93px]	md:px-[62px] md:pt-[130px] xl:px-[88px] xl:pt-[186px]'>
      <div className='justify-between space-y-[25px] lg:flex lg:space-x-[35px] lg:space-y-0	2xl:space-x-[50px]'>
        <div>
          <div className='relative mx-auto h-full w-full max-w-[450px] lg:max-w-[802px]'>
            <div className='absolute inset-0'>
              <img src='/images/bg-out-services.png' alt='wrapper hero' />
            </div>
            <div className='relative '>
              <div className='space-y-[20px] pb-[18px] pl-[48px] pr-[39px] pt-[19px] text-white	md:pb-[25px] lg:pt-[27px]	2xl:space-y-[48px] 2xl:pb-[35px] 2xl:pl-[54px] 2xl:pt-[38px]'>
                <div className='h2 ml-auto w-max font-extrabold uppercase'>
                  Our <br />
                  Services
                </div>
                <div className='title-1 w-full max-w-[709px]'>
                  We build concepts that are big enough to exist everywhere,
                  brave enough to break boundaries in execution, and rich enough
                  to connect with millions of people individually in the crypto
                  world.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between space-y-[23px] md:space-y-[32px] 2xl:space-y-[45px]'>
          <div className='flex items-center space-x-[15px]'>
            <div className='h4 flex h-[60px] w-full flex-1 items-center rounded-md border border-[#323232] bg-[#18181A] px-[33px] py-[14px] font-extrabold uppercase text-[#00CC2D] lg:rounded-xl xl:h-[80px] 2xl:h-[110px]'>
              entertainment
            </div>
            <div className='flex h-[60px] w-[60px] items-center justify-center rounded-md border border-[#323232] bg-[#18181A] lg:rounded-xl xl:h-[80px] xl:w-[80px] 2xl:h-[110px] 2xl:w-[110px]'>
              <div className='w-full max-w-[32px] xl:max-w-[60px]'>
                <IconEntertaiment />
              </div>
            </div>
          </div>
          <div className='flex items-center space-x-[15px]'>
            <div className='h4 flex h-[60px] w-full flex-1 items-center rounded-md border border-[#323232] bg-[#18181A] px-[33px] py-[14px] font-extrabold uppercase text-[#00CC2D] lg:rounded-xl xl:h-[80px] 2xl:h-[110px]'>
              experience
            </div>
            <div className='flex h-[60px] w-[60px] items-center justify-center  rounded-md border border-[#323232] bg-[#18181A] lg:rounded-xl xl:h-[80px] xl:w-[80px] 2xl:h-[110px] 2xl:w-[110px]'>
              <div className='w-full max-w-[32px] xl:max-w-[69px]'>
                <IconExperience />
              </div>
            </div>
          </div>
          <div className='flex items-center space-x-[15px]'>
            <div className='h4 flex h-[60px] w-max flex-1 items-center rounded-md border border-[#323232] bg-[#18181A] px-[33px] py-[14px] font-extrabold uppercase text-[#00CC2D] lg:rounded-xl xl:h-[80px] 2xl:h-[110px]'>
              earned
            </div>
            <div className='flex h-[60px] w-[60px] items-center justify-center rounded-md border border-[#323232] bg-[#18181A] lg:rounded-xl xl:h-[80px] xl:w-[80px] 2xl:h-[110px] 2xl:w-[110px]'>
              <div className='w-full max-w-[32px] xl:max-w-[51px]'>
                <IconEarned />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
