// Icons
import { Component } from 'react';
import { EditIcon, ProfileCountIcon } from './icons';

export default class Card extends Component {
  /*
   * This Function will generate the breadcrumbs for the Card
   *
   * @params: none
   * @return: listItems <JSX containing ul with list>
   */
  generateBreadCrumbs() {
    const breadcrumbs = this.props.data.breadcrumbs;
    let listItems = breadcrumbs.map((val) => {
      if (val.type === 'link') {
        return (
          <li>
            <a className='semi-link' href={val.url}>
              {val.content}
            </a>
          </li>
        );
      } else if (val.type === 'text') {
        return (
          <li>
            {val.content}.
            <span className='text-gray'>
              {val.extension ? val.extension : ''}
            </span>
          </li>
        );
      }
      return null;
    });
    return <ul className='breadcrumb'>{listItems.map((val) => val)}</ul>;
  }
  render() {
    return (
      <div className='card'>
        <div className='card-head'>
          {/* Breadcrumb */}
          {this.generateBreadCrumbs()}
          {/* Edit icon on right most corner of the card */}
          <EditIcon />
        </div>
        {/* Profile Count SVG */}
        <ProfileCountIcon className='mt-20' />
      </div>
    );
  }
}
