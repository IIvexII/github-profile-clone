import './UserInfo.css';

// Icons
import { ReactComponent as LocationIcon } from '../images/location.svg';
import { ReactComponent as UserIcon } from '../images/userIcon.svg';
import { ReactComponent as EmailIcon } from '../images/email.svg';
import { ReactComponent as LinkIcon } from '../images/link.svg';
import { ReactComponent as DevProgramIcon } from '../images/dev-program.svg';
import { ReactComponent as StarIcon } from '../images/star.svg';

export default function UserInfo() {
  return (
    <section className='user-info'>
      <img
        src={require('../images/avatar.jpg')}
        alt='My avatar with yellow background and headphones on the ear.'
        className='user-avatar'
      />
      <article>
        <h2 className='name'>Zafeer Hafeez</h2>
        <h2 className='username'>IIvexII</h2>
        <p className='bio'>Student of Computer Science.</p>
        {/* Edit button */}
        <button type='button'>Edit profile</button>
        {/* Followers */}
        <div id='follow'>
          <a href='/' className='link'>
            <UserIcon className='icon' />
            <span className='bold'>6</span> followers
          </a>
          <a href='/' className='link'>
            <span className='bold'>2</span> following
          </a>
        </div>
        {/* Addesss and social media links */}
        <div className='social-info'>
          {/* Location */}
          <address>
            <LocationIcon className='icon' />
            127.0.0.1
          </address>
          {/* Email */}
          <a className='link pt-10' href='mailto:iivexii@pm.me'>
            <EmailIcon className='icon' />
            iivexii@pm.me
          </a>
          {/* Website */}
          <a className='link pt-10' href='https://iivexii.me'>
            <LinkIcon className='icon' />
            https://iivexii.me
          </a>
        </div>
        <div className='divider mtb-20'></div>
        {/* Showcase */}
        <div className='showcase'>
          <a className='link pt-10' href='/'>
            <DevProgramIcon className='icon' />
            Developer Program Member
          </a>
          {/* Labels */}
          <span className='labels pt-10'>
            <StarIcon />
            <p className='label premium mlr-10'>pro</p>
            <p className='label gold'>Developer</p>
          </span>
        </div>
        <div className='divider mtb-20'></div>
        {/* Organizations */}
        <div className='orgs'>
          <h3 className='title'>Organizations</h3>
          <a href='/'>
            <img
              className='org-img mtb-20 mr-10'
              src={require('../images/org-img.jpg')}
              alt='Vex organization.'
            />
          </a>
          <a href='/'>
            <img
              className='org-img mtb-20 mr-10'
              src={require('../images/npm-org.png')}
              alt='NPM organization.'
            />
          </a>
        </div>
      </article>
    </section>
  );
}
