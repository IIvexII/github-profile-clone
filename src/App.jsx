import { Fragment } from 'react';

// Css
import './App.css';

// Components
import Header from './component/Header';
import Tabs from './component/Tabs';
import UserInfo from './component/UserInfo';
import Overview from './component/Overview';
import Footer from './component/Footer';

// Model
import userData from './model/User';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Tabs />
      <main className='main'>
        <UserInfo user={userData} />
        <Overview />
      </main>

      <Footer />
    </Fragment>
  );
}
