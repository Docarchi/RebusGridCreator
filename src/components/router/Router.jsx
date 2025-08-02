import { Routes, Route } from 'react-router-dom';

import {HomePage} from '../homepage/home';
import {GridCreation} from '../gridcreation/gridcreation';
import { About } from '../about/about';

export const MyRouter = () => {
  return (
    <Routes> 
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Home/' element={<HomePage/>}/>
        <Route path='/GridCreation/' element={<GridCreation/>}/>
        <Route path='/About/' element={<About/>}/>
    </Routes>
  );
}

export default MyRouter;