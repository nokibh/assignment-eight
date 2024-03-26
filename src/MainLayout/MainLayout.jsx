import { Outlet } from 'react-router-dom';
import NavBer from '../Components/NavBer/NavBer';

const MainLayout = () => {
  return (
    <div>
      <div>
        <NavBer></NavBer>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
