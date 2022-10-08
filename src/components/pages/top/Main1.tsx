import headImg from '../../../img/header.jpeg'

export function Main1() {

  return (
    <div className='main1 w-[100%] h-[auto] flex bg-white relative z-0'>
      <img
        alt='佐久間工業所風景背景'
        src={headImg}
        className='object-cover md:h-[90vh] h-[50vh] w-[100vw] object-center opacity-30 '
      />
      <img
        alt='佐久間工業所風景'
        src={headImg}
        className='object-cover md:h-[88vh] md:w-[37vw] lg:block hidden absolute top-[6vh] right-[10vw] saturate-150'
      />
      <div className='static top-[15vh] left-[10vw] text-left '>
        <h1 className='md:text-[30px] text-[20px] absolute font-semibold left-[8vw] top-[13vh]'>(有) 佐久間工業所</h1>
        <h1 className='md:text-[80px] text-[42px] absolute font-bold leading-relaxed	left-[10vw] top-[18vh]' >
          <span>50年の技術を</span><br/><span>越谷市の皆様へ</span>
        </h1>
      </div>
    </div>
  )
}