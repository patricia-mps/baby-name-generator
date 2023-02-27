import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage';
import PageNotFound from '../pages/pageNotFound';

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </HashRouter>
);

export default Router;
