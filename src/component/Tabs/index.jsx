import { Fragment } from 'react';
import './style.css';
export default function Tabs() {
  return (
    <Fragment>
      <section className='tabs'>
        <ul>
          <li>
            <a href='#' className='active-tab'>
              Overview
            </a>
          </li>
          <li>
            <a href='#'>Repositories</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Packages</a>
          </li>
          <li>
            <a href='#'>Stars</a>
          </li>
        </ul>
      </section>
      <div className='divider'></div>
    </Fragment>
  );
}
