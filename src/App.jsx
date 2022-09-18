import { Fragment } from 'react';

import Header from './component/Header';
import './App.css';
import Tabs from './component/Tabs';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Tabs />
    </Fragment>
  );
}
