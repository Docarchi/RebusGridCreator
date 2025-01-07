import { Routes, Route } from 'react-router-dom';

import {HomePage} from '../homepage/home';
{/*import GridCreator from '../pages/GridCreator';*/}

export const MyRouter = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/RebusGridCreator/Home/' element={<HomePage/>}></Route>
      {/*<Route exact path='/gridcreation' component={GridCreator}></Route>*/}
    </Routes>
  );
}

export default MyRouter;