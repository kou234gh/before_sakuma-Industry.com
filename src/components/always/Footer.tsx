import IconLine from "../../img/sns/IconLine.svg";
import IconInstagram from "../../img/sns/IconInstagram.svg"
import IconContact from "../../img/sns/IconContact.svg"
import Pages from "./Pages";


export function Footer() {
  return (
    <div className="flex flex-col">
      <div className="mt-[5%] mb-[5%] p-[7vw]">
        <h1 className="mb-[3%] text-2xl ">有限会社 佐久間工業所</h1>
        <Pages />
        <ul className="mt-[3%] flex flex-row">
          <li className="mr-[5px]">
            <a href="https://lin.ee/0JdpTI9" rel="noreferrer noopener" target={"_blank"}  ><img src={IconLine} alt="IconLine" /></a>
          </li>
          <li className="mr-[5px]">
            <a href="https://www.instagram.com/hsk_kougyou/" rel="noreferrer noopener" target={"_blank"}><img src={IconInstagram} alt="IconInstagram" /></a>
          </li>
          <li className="mr-[5px]">
            <a href="tel:048-975-6329"><img src={IconContact} alt="IconContact" /></a>
          </li>
        </ul>
      </div>
      <p className="text-xs mb-[5px] mr-[auto] ml-[auto]">© 佐久間工業所 Co., Ltd. All rights reserved</p>
    </div>
  );
}