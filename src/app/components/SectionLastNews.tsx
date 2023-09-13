import IconStar from '../components/Icon/Star';

export default function SectionLastNews() {
  return (
    <section className='relative overflow-hidden pt-[68px] md:pt-[95px]	xl:pt-[136px]'>
      <div className='px-[16px]	md:px-[62px] xl:px-[88px]'>
        <div className='grid grid-cols-12 border-b border-white'>
          <div className='relative col-span-7 border-r border-white md:col-span-9'>
            <div className='h1 pb-[15px] pr-[10px] font-extrabold	uppercase	text-white md:pb-[21px] md:pr-[35px] xl:pb-[30px] xl:pr-[50px]'>
              Last news
            </div>
            <div className='absolute bottom-[-26px] right-[-23px]'>
              <IconStar />
            </div>
          </div>
          <div className='col-span-5 md:col-span-3'>
            <div className='title-1 ml-auto flex h-[40px] w-[120px] items-center justify-center rounded-[30px] bg-[#00CC2D] px-[8px] py-[5px] font-semibold text-white md:px-[11px] md:py-[7px] xl:h-[48px] xl:w-[152px] xl:px-[16px] xl:py-[10px] 2xl:h-[63px]'>
              See All
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12'>
          <div className='col-span-7 border-r border-white md:col-span-9'>
            <div className='title-1 ml-auto max-w-[1172px] pr-[10px] pt-[18px] text-white	md:pr-[35px] md:pt-[25px] md:text-right xl:pr-[50px] xl:pt-[36px]'>
              We build concepts that are big enough to exist everywhere, brave
              enough to break boundaries in execution, and rich enough to
              connect with millions of people individually in the crypto world.
            </div>
          </div>
          <div className='col-span-5 md:col-span-3'>
            <div className='h2 ml-auto mt-4 text-right font-extrabold text-white md:mt-0'>
              2023
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[39px]	md:mt-[55px] xl:mt-[78px]'>
        <div className='flex translate-x-[16px] space-x-[20px] whitespace-nowrap md:translate-x-[48px] lg:translate-x-[81px] xl:space-x-[30px]'>
          <div className='h-[200px]  w-[450px] rounded-xl border border-[#323232] bg-[#18181A] md:h-[400px] lg:h-[500px] xl:h-[600px] xl:w-[688px] 2xl:h-[814px]'></div>
          <div className='h-[200px]  w-[450px] rounded-xl border border-[#323232] bg-[#18181A] md:h-[400px] lg:h-[500px] xl:h-[600px] xl:w-[688px] 2xl:h-[814px]'></div>
          <div className='h-[200px]  w-[450px] rounded-xl border border-[#323232] bg-[#18181A] md:h-[400px] lg:h-[500px] xl:h-[600px] xl:w-[688px] 2xl:h-[814px]'></div>
        </div>
      </div>
    </section>
  );
}
