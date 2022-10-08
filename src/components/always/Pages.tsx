import { Link } from "react-router-dom"

export default function Pages() {




  return (
    <ul className="">
      <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/'} >ホーム</Link></li>
      <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/about/'}>会社概要</Link></li>
      <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/recruit/'}>採用</Link></li>
      <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/news/'}>ニュース</Link></li>
      <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/corporate/'}>協業</Link></li>
      <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/contact/'}>お問い合わせ</Link></li>
    </ul>
  )
}