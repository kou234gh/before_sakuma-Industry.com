import React from "react";
import { motion } from "framer-motion";
import tomoyoshi2 from '../../img/member/tomoyoshi2.jpg';
import nobuo from '../../img/member/nobuo.jpg'
import stars from '../../img/member/stars.jpg'

export class About extends React.Component {

  render() {
    return (
      <div className="p-[7vw]">
        <div className="grid grid-cols-2 gap-14 mb-[14vw]">
          <motion.img
            src={tomoyoshi2}
            className="w-[100%] h-auto"
            transition={{
              from: -500,
              duration: 2,
              opacity: 0.8
            }}
            animate={{
              x: 0,
              opacity: 0.8
            }}
          />
          <div>
            <h1>代表挨拶</h1>
            <p className="text-lg">初めまして。<br />
              佐久間工業所代表 佐久間友義です。<br />
              私たちはアットホームな会社作りを目指しています。<br />
              若い子が中心になって様々な仕事に取り組んでいます。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-14 mb-[14vw]">
          <div>
            <h1>弊社の歴史</h1>
            <p className="text-lg">
              私たちは、越谷市で50年の歴史を持つ建設業者です。<br />
              現在は創業時から発展させてきた技術と新しい発想で、地域のインフラ維持に携わっています。<br />
              安全性・迅速さ・丁寧さに重きを置いた会社です。現場第一主義であることはもちろん、「お客様・お取引先・従業員」を大切にすることで、長期的に堅固な経営を行います。<br />
              業績が好調のため、事業を拡大中です。今後は既存の関係性を維持しつつ、主軸となる新しい事業を作っていきます。
            </p>
          </div>
          <motion.img
            src={nobuo}
            className="w-[100%] h-auto"
            transition={{
              from: 500,
              duration: 2,
              opacity: 0.8
            }}
            animate={{
              x: 0,
              opacity: 0.8
            }}
          />        </div>

        <div className="grid grid-cols-2 gap-14 mb-[14vw]">
          <motion.img
            src={stars}
            className="w-[100%] h-auto"
            transition={{
              from: -500,
              duration: 2,
              opacity: 0.9
            }}
            animate={{
              x: 0,
              opacity: 0.9
            }}
          />
          <div>
            <h1>私たちの魅力</h1>
            <p className="text-lg">
              個性豊かな若いメンバーが集まるアットホームな職場です。<br />
              働く時は真剣に働き、遊ぶときも本気で楽しむ！<br />
              一人一人がメリハリをつけて充実した生活を送っています！！<br />
            </p>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-sb-200 to-sb-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                連絡してみる
              </span>
            </button>

          </div>
        </div>

        <div>
          <h1>会社概要</h1>
          <h2>会社名</h2>
          <p>有限会社 佐久間工業所</p>

          <h2>事業内容</h2>
          <p>リフォーム工事、外構工事、足場仮設工事、塗装工事</p>

          <h2>代表</h2>
          <p>代表取締役　佐久間 友義</p>

          <h2>所在地</h2>
          <p>〒343-0007 埼玉県越谷市向畑889</p>

          <h2>電話番号</h2>
          <p>048-975-6329</p>

          <h2>定休日</h2>
          <p>毎週　日曜日・祝祭日
            年末年始・夏季休暇・長期休暇は随時確認下さい。
          </p>
        </div>
      </div>
    );
  }
}