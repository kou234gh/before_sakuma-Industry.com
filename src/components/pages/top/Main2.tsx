import ig_qr from '../../../img/hsk_kougyou_qr.png';
import imgHyouga from '../../../img/member/hyouga.jpg';
import imgTomoyoshi from '../../../img/member/tomoyoshi.png';
import imgRyuuga from '../../../img/member/ryuuga.png';
import Main2w1 from './Main2w1';
import Main2w2 from './Main2w2';
import Main2w3 from './Main2w3';


export function Main2() {
  return (
    <>
      {/* インスタグラムの投稿 */}
      <div className="main2 bg-azure md:h-[43vw] w-[100%] p-[7vw] mt-14 mb-14 grid h-[135vw] md:grid-cols-2 grid-cols-1 gap-14">

        {/* posts list */}
        <div className='md:w-[100%] md:h-[100%] w-[100%] h-[60vw] mr-auto ml-auto '>
          <script src="https://snapwidget.com/js/snapwidget.js"></script>
          <iframe
            title='instagram posts'
            src="https://snapwidget.com/embed/1010374"
            className="w-[100%] h-[100%] mr-[auto] ml-[auto]"
            allowTransparency={true}
            frameBorder="0"
            scrolling="no"
          >
          </iframe>
        </div>

        {/* instagram QR code */}
        <div className="h-[100%] w-[100%]">
          <div className='grid grid-cols-2 gap-3'>
            <a href='https://www.instagram.com/hsk_kougyou/' className="relative flex flex-col items-center  p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 hover:bg-sb-800 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 border border-1 border-[#1f85d5]">
              <img src={ig_qr} className="w-[80%] h-[auto] mt-[10%] mb-[10%] " alt='instagram qrcode' />
              <span className="relative pb-[10px] px-5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                フォローする
              </span>
            </a>
            <div>
              <h4><span>「明るく楽しく真面目」をモットーに</span>
              <span>佐久間工業所はあなたの生活を応援します。</span></h4>
            </div>
          </div >
          
        </div >

      </div >

      {/* 仕事紹介 */}
      <div className='m-[7vw] mt-14 mb-14 lg:min-h-[100vh] grid lg:grid-flow-col grid--flow-row grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='h-[115vw] lg:w-[100%] lg:h-[40vw]'>
          <h3>外壁、外構、リフォーム工事</h3>
          <p className='h-[3rem]'>『入居者視点』を考え抜き、お客さまに寄り添いながら提案・お悩みを解消しております。</p>
          <Main2w1 />
        </div>
        <div className='h-[115vw] lg:w-[100%] lg:h-[40vw]'>
          <h3>水道工事</h3>
          <p className='h-[3rem]'>公共インフラの水道整備から地域の皆様の水回りまで幅広く業務を承っております。</p>
          <Main2w2 />
        </div>
        <div className='h-[115vw] lg:w-[100%] lg:h-[40vw]'>
          <h3>土木工事</h3>
          <p className='h-[3rem]'>私たちの生活の基盤となる道路などの工事を行っています。</p>
          <Main2w3 />
        </div>
      </div >

      {/* <div className='h-[7vw]'></div> */}

      {/* 顔写真 */}
      
      <div className='grid grid-cols-1 gap-6 justify-items-start md:grid-cols-3 md:justify-items-center  m-[7vw]'>
        
        <div className='grid grid-cols-2 gap-6 md:grid-cols-1 md:justify-items-center'>
          <img src={imgTomoyoshi} className="w-[20vw] h-[auto] rounded-full border-double border-4 border-sb-300" alt='tomoyoshi' />
          <div className=''>
            <h4>佐久間 友義</h4>
            {/* <p></p> */}
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-1 md:justify-items-center'>
          <img src={imgHyouga} className="w-[20vw] h-[auto] rounded-full border-double border-4 border-sb-300 " alt='hyouga' />
          <div>
            <h4>佐久間 彪河</h4>
            {/* <p>aaaaaaaaaa</p> */}
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-1 md:justify-items-center'>
          <img src={imgRyuuga} 
               className="w-[20vw] h-[auto] rounded-full border-double border-4 border-sb-300"
               alt='ryuga' />
          <div>
            <h4>佐久間 龍河</h4>
            {/* <p className='text-sm'>aaaaaaaaaaa</p> */}
          </div>

        </div>
      </div>

    </>
  );
}