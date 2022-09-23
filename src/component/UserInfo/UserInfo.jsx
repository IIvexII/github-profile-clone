import './UserInfo.css';

// Components
import DeveloperProgram from './DeveloperProgram';
import Divider from './Divider';

// Icons
import { UserIcon } from './icons';
import Labels from './Labels';
import Organizations from './Organizations';
import SocialInfo from './SocialInfo';

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
        <SocialInfo
          email={user.email}
          address={user.address}
          website={user.website}
        />

        <Divider />

        {/* Showcase */}
        <DeveloperProgram show={user.inDeveloperProgram} />
        <Labels labels={user.labels} />

        <Divider />

        <Organizations orgs={user.orgs} />
      </article>
    </section>
  );
}
