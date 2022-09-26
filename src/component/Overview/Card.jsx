// Icons
import { Component } from 'react';
import { DragIcon, EditIcon } from './icons';

/*
  props:  {
    editable: bool (optional),
    dragable: bool (optional),
    breadcrumbs: Array <{ 
      type: 'link' | 'text',
      content: string,
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
    this.description = this.props.data.description;
  }
  /*
   * This Function will generate the breadcrumbs for the Card
   *
   * @params: none
   * @return: listItems <JSX containing ul with list of content>
   */
  generateBreadCrumbs() {
    let listItems = this.breadcrumbs.map((val) => {
      // Security check
      if (!['text', 'link', 'semi-link'].includes(val.type)) return null;

      if (val.type === 'text') {
        return (
          <li>
            {val.content}.
            <span className='text-gray'>
              {val.extension ? val.extension : ''}
            </span>
          </li>
        );
      } else {
        return (
          <li>
            <a className={val.type} href={val.url}>
              {val.content}
            </a>
          </li>
        );
      }
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
      <div className={`card ${this.props.className}`}>
        <div className='card-head'>
          {/* Breadcrumb */}
          {this.generateBreadCrumbs()}
          {this.renderActionButton()}
        </div>
        {/* Description */}
        {this.description ? (
          <p className='text-gray text-sm mt-5'>{this.description}</p>
        ) : (
          ''
        )}
        <div className='content'>{this.props.children}</div>
      </div>
    );
  }
}
