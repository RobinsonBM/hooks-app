import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage, LoginPage, Navbar } from './components';

export const MainApp = () => {
  return (
    <>
      <Navbar />
      <hr />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />

        {/* <Route path='/*' element={<LoginPage />} /> */}
        <Route path='*' element={<Navigate to='/about' />} />
      </Routes>
    </>
  );
};
