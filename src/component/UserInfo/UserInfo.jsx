import '../UserInfo.css';

// Components
import DeveloperProgram from './DeveloperProgram';

// Icons
import { UserIcon, EmailIcon, LinkIcon, LocationIcon } from './icons';
import Labels from './Labels';
import Organizations from './Organizations';

export default function UserInfo(props) {
  const user = props.user;

  return (
    <section className='user-info'>
      <img
        src={require(`../../images/${user.avatar.url}`)}
        alt={user.avatar.description}
        className='user-avatar'
      />
      <article>
        <h2 className='name'>{user.name}</h2>
        <h2 className='username'>{user.username}</h2>
        <p className='bio'>{user.bio}</p>
        {/* Edit button */}
        <button type='button'>Edit profile</button>
        {/* Followers */}
        <div id='follow'>
          <a href='/' className='link'>
            <UserIcon className='icon' />
            <span className='bold'>{user.followers}</span> followers
          </a>
          <a href='/' className='link'>
            <span className='bold'>{user.following}</span> following
          </a>
        </div>
        {/* Addesss and social media links */}
        <div className='social-info'>
          {/* Location */}
          <address>
            <LocationIcon className='icon' />
            {user.address}
          </address>
          {/* Email */}
          <a className='link pt-10' href='mailto:iivexii@pm.me'>
            <EmailIcon className='icon' />
            {user.email}
          </a>
          {/* Website */}
          <a
            className='link pt-10'
            href={user.website}
            rel='noreferrer'
            target='_blank'>
            <LinkIcon className='icon' />
            {user.website}
          </a>
        </div>
        <div className='divider mtb-20'></div>
        {/* Showcase */}
        <div className='showcase'>
          {/* Only show if in dev program */}
          <DeveloperProgram show={user.inDeveloperProgram} />

          {/* Labels */}
          <Labels labels={user.labels} />
        </div>
        <div className='divider mtb-20'></div>
        {/* Organizations */}
        <Organizations orgs={user.orgs} />
      </article>
    </section>
  );
}
