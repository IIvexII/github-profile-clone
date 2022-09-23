import '../UserInfo.css';

// Components
import DeveloperProgram from './DevProgram';

// Icons
import { UserIcon, EmailIcon, LinkIcon, StarIcon, LocationIcon } from './icons';

export default function UserInfo(props) {
  const user = props.user;

  // Render Labels
  let renderLabels = null;
  if (user.labels && user.labels.length !== 0) {
    renderLabels = (
      <span className='labels pt-10'>
        <StarIcon />
        {user.labels.map((label) => {
          return (
            <p key={label._id} className={`label ${label.type} ml-10`}>
              {label.name}
            </p>
          );
        })}
      </span>
    );
  }

  // Render Orgs
  let renderOrgs = null;
  if (user.orgs && user.orgs.length !== 0) {
    renderOrgs = (
      <div className='orgs'>
        <h3 className='title'>Organizations</h3>
        {user.orgs.map((org) => {
          return (
            <a href='/' key={org._id}>
              <img
                className='org-img mtb-20 mr-10'
                src={require(`../../images/${org.icon}`)}
                alt={user.orgs.description}
              />
            </a>
          );
        })}
      </div>
    );
  }
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
          <DeveloperProgram inDeveloperProgram={user.inDeveloperProgram} />

          {/* Labels */}
          {renderLabels}
        </div>
        <div className='divider mtb-20'></div>
        {/* Organizations */}
        {renderOrgs}
      </article>
    </section>
  );
}
