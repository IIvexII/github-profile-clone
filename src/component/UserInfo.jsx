import './UserInfo.css';
import { ReactComponent as LocationIcon } from '../images/location.svg';
import { ReactComponent as UserIcon } from '../images/userIcon.svg';

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
          <a href='/'>
            <UserIcon className='icon' />
            <span className='bold'>6</span> followers
          </a>
          <a href='/'>
            <span className='bold'>2</span> following
          </a>
        </div>
        {/* Addesss and social media links */}
        <address>
          <LocationIcon className='icon' />
          127.0.0.1
        </address>
      </article>
    </section>
  );
}
