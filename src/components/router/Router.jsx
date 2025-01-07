import { Routes, Route } from 'react-router-dom';

import {HomePage} from '../homepage/home';
import {GridCreation} from '../gridcreation/gridcreation';

export const MyRouter = () => {
  return (
    <Routes> 
        <Route path='/RebusGridCreator/' element={<HomePage/>}/>
        <Route path='/RebusGridCreator/Home/' element={<HomePage/>}/>
        <Route path='/RebusGridCreator/GridCreation/' element={<GridCreation/>}/>
    </Routes>
  );
}

export default MyRouter;