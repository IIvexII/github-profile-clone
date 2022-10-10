import { Component, Fragment } from 'react';
import './style.css';

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.tabs = props.tabs;
    this.activeTabIndex = props.activeTabIndex;
  }

  // Generat list of tabs
  generateTabsList() {
    return this.tabs.map((tab, index) => {
      return (
        <li key={tab}>
          <a
            href='/'
            className={index === this.activeTabIndex ? 'active-tab' : ''}>
            {tab}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <section className='tabs'>
          <ul>{this.generateTabsList()}</ul>
        </section>
        <div className='divider'></div>
      </Fragment>
    );
  }
}
