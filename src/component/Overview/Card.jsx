// Icons
import { Component } from 'react';
import { DragIcon, EditIcon } from './icons';

/*
  props:  {
    editable: bool (optional),
    dragable: bool (optional),
    breadcrumbs: Array <{ 
      type: 'link' | 'text', content: string,
      url: string (when type is link), 
      extension: string (optional)
    }>
  } 
*/
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
  /*
   * This method is used to render the action
   * buttons like drag and edit on card.
   *
   * @params: none
   * @return: link containing the Edit Icon or Drag Icon
   */
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

  /*
   * Default render method for the component.
   *
   * @params: none
   * @return: JSX of whole card.
   */
  render() {
    return (
      <div className='card'>
        <div className='card-head'>
          {/* Breadcrumb */}
          {this.generateBreadCrumbs()}
          {this.renderActionButton()}
        </div>
        <div className='content'>{this.props.children}</div>
      </div>
    );
  }
}
