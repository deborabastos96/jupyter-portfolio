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

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
