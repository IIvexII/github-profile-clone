import { Fragment } from 'react';

import Header from './component/Header';
import './App.css';
import Tabs from './component/Tabs';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Tabs />
      <main>
        <section className='user-info'>
          <img
            src={require('./images/avatar.jpg')}
            alt='My avatar with yellow background and headphones on the ear.'
            className='user-avatar'
          />
        </section>
      </main>
    </Fragment>
  );
}
