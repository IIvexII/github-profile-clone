import { Fragment } from 'react';

import Header from './component/Header';
import './App.css';
import Tabs from './component/Tabs';
import UserInfo from './component/UserInfo';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Tabs />
      <main>
        <UserInfo />
      </main>
    </Fragment>
  );
}
