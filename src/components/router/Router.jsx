import { Routes, Route } from 'react-router-dom';

import {HomePage} from '../homepage/home';
import {GridCreation} from '../gridcreation/gridcreation';

export const MyRouter = () => {
  return (
    <Routes> 
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Home/' element={<HomePage/>}/>
        <Route path='/GridCreation/' element={<GridCreation/>}/>
    </Routes>
  );
}

export default MyRouter;