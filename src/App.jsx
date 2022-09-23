import { Fragment } from 'react';

import Header from './component/Header';
import './App.css';
import Tabs from './component/Tabs';
import UserInfo from './component/UserInfo/UserInfo';
import userData from './model/User';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Tabs />
      <main>
        <UserInfo user={userData} />
      </main>
    </Fragment>
  );
}
