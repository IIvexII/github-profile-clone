// Icons
import { Component } from 'react';
import { DragIcon, EditIcon, ProfileCountIcon } from './icons';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.breadcrumbs = this.props.data.breadcrumbs;
    this.editable = this.props.data.editable;
    this.dragable = this.props.data.dragable;
  }
  /*
   * This Function will generate the breadcrumbs for the Card
   *
   * @params: none
   * @return: listItems <JSX containing ul with list of content>
   */
  generateBreadCrumbs() {
    let listItems = this.breadcrumbs.map((val) => {
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
  renderActionButton() {
    if (this.editable) {
      // Editable
      return (
        <a id='edit-icon' href='/'>
          <EditIcon />
        </a>
      );
    } else if (this.dragable) {
      // Dragable
      return (
        <a id='drag-icon' href='/'>
          <DragIcon />
        </a>
      );
    }
  }

  // Render the Card
  render() {
    return (
      <div className='card'>
        <div className='card-head'>
          {/* Breadcrumb */}
          {this.generateBreadCrumbs()}
          {this.renderActionButton()}
        </div>
        {/* Profile Count SVG */}
        <ProfileCountIcon className='mt-20' />
      </div>
    );
  }
}
