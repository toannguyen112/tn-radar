export default function SectionNetwork() {
  return (
    <section className='relative h-[430px] max-h-[1080px] overflow-hidden lg:h-[500px] xl:h-screen'>
      <video
        autoPlay
        muted
        loop
        className='absolute inset-0 min-h-full  min-w-full'
      >
        <source src='/video/network.mp4' type='video/mp4' />
      </video>
      <div className='h-full px-[40px] md:px-[56px] xl:px-[80px]'>
        <div className='relative h-full'>
          <div className='h3 absolute left-0 top-[73px]	font-extrabold uppercase tracking-[1.1px] text-white md:top-[70px] 2xl:top-[145px]'>
            <p>A network </p> <p>designed for the</p> <p>crypto world</p>
          </div>
          <div className='h3 absolute right-0 text-right font-extrabold uppercase tracking-[1.1px] text-white md:bottom-[56px] 2xl:bottom-[100px]'>
            <p>crypto users today </p> <p>and</p> <p>tomorrow</p>
          </div>
        </div>
      </div>
    </section>
  );
}
