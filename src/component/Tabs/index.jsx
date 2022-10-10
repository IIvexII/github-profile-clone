import { Fragment } from 'react';
import './style.css';
export default function Tabs(props) {
  const tabs = props.tabs;
  const activeTabIndex = props.activeTabIndex;

  // Generat list of tabs
  const tabList = tabs.map((tab, index) => {
    return (
      <li>
        <a href='/' className={index === activeTabIndex ? 'active-tab' : ''}>
          {tab}
        </a>
      </li>
    );
  });
  return (
    <Fragment>
      <section className='tabs'>
        <ul>{tabList}</ul>
      </section>
      <div className='divider'></div>
    </Fragment>
  );
}
