import IconLine from '../../img/sns/IconLine.svg';
import IconInstagram from '../../img/sns/IconInstagram.svg';
import IconContact from '../../img/sns/IconContact.svg';

export function ContactButton() {
  return (
    <div className='flex flex-col fixed bottom-[2vw] right-[1vw] z-50'>
      {/* <a id="btn_menu8" className="btn_menu" href="#"><span id='button_span'>MENU</span></a> */}
      <ul className="mt-[3%] ">
        <li className="mt-[1vw]">
          <a href="https://lin.ee/0JdpTI9" target={"_blank"} rel="noreferrer"><img src={IconLine} alt="IconLine" /></a>
        </li>
        <li className="mt-[1vw]">
          <a href="https://www.instagram.com/hsk_kougyou/" target={"_blank"} rel="noreferrer"><img src={IconInstagram} alt="IconInstagram" /></a>
        </li>
        <li className="mt-[1vw]">
          <a href="tel:048-975-6329" ><img src={IconContact} alt="IconContact" /></a>
        </li>
      </ul>
    </div>
  );
}