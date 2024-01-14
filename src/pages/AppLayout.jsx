import { Outlet, useNavigation } from 'react-router-dom';

import Header from '../components/Header';
import Loader from '../components/Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
      {isLoading && <Loader />}

      <Header />

      <main className="bg-hoverLink grid h-lvh justify-center pt-[125px]">
        <div className="shadow-main w-[1200px] bg-white">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AppLayout;
