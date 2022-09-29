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
import { pinnedRepositories, readMeData } from './model/Repository';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Tabs />
      <main className='main'>
        <UserInfo user={userData} />
        <Overview readMeRepo={readMeData} pinnedRepos={pinnedRepositories} />
      </main>

      <Footer />
    </Fragment>
  );
}
