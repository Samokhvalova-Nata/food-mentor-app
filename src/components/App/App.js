import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AppContainer } from './App.styled';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import("../../pages/Home/Home"));
const Goal = lazy(() => import("../../pages/Goal/Goal"));
const Measure = lazy(() => import("../../pages/Measure/Measure"));
const Behavior = lazy(() => import("../../pages/Behavior/Behavior"));
const Exercise = lazy(() => import("../../pages/Exercise/Exercise"));

const App = () => {
  return (
    <AppContainer>
      <Suspense fallback={<Loader/>}>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/goal' element={<Goal />} />
          <Route path='/measure' element={<Measure />} />
          <Route path='/behavior' element={<Behavior />} />
          <Route path='/exercise' element={<Exercise />} />
          <Route path='*' element={<Home />} />
      </Routes>
      </Suspense>
    </AppContainer>
    
  );
}

export default App;