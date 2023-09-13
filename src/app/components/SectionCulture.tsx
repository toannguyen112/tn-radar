import IconCreatedCulture from '../components/Icon/CreatedCulture';
export default function SectionCulture() {
  return (
    <section className='md:pb-[181px]md:pt-[100px] pb-[129px] pt-[72px] 2xl:pb-[258px] 2xl:pt-[143px]'>
      <div className='px-[16px]	md:px-[62px] xl:px-[88px]'>
        <div className='h5 mb-[83px] font-extrabold	uppercase text-white md:mb-[116px] 2xl:mb-[165px]'>
          The power of <br /> decentralization
        </div>
        <div className='mb-[341px] w-full md:mb-[477px] md:ml-16 xl:max-w-[1230px] 2xl:mb-[682px] 2xl:ml-24'>
          <IconCreatedCulture />
        </div>
        <div className='h1 mb-[265px]	font-extrabold uppercase text-white md:mb-[371px] 2xl:mb-[530px]'>
          Connecting
          <br /> the dots
        </div>
        <div className='h1 text-right text-white'>点と点を結びつける。</div>
      </div>
    </section>
  );
}
