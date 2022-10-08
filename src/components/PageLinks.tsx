import { Routes, Route } from 'react-router-dom';

import { Main1 } from './pages/top/Main1';
import { Main2 } from './pages/top/Main2';
import { About }  from './pages/About';
import { Recruit } from './pages/Recruit';
import { News } from './pages/News';
import { Corporate } from './pages/Corporate';
import { Contact } from './pages/Contact';


import NotFound from "./pages/NotFound";



const PageLinks = () => {
  return (
    <>
      <Routes>
        {/* ホーム */}
        <Route path="/" element={<><Main1 /><Main2 /></>} />
        {/* 会社概要 */}
        <Route path="/about/" element={<About />} />
        {/* 採用 */}
        <Route path="/recruit/" element={<Recruit />} />
        {/* ニュース */}
        <Route path="news/" element={<News />} />
        {/* 協業 */}
        <Route path="/corporate" element={<Corporate />} />
        {/* お問い合わせ */}
        <Route path="/contact" element={<Contact />} />
        {/* 404Page */}
        <Route path={`/*/`} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default PageLinks;