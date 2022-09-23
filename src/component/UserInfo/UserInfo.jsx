import './UserInfo.css';

// Components
import DeveloperProgram from './DeveloperProgram';
import Divider from './Divider';

// Icons
import { UserIcon } from './icons';
import Labels from './Labels';
import Organizations from './Organizations';
import SocialInfo from './SocialInfo';
import Avatar from './Avatar';
import GeneralInfo from './GeneralInfo';

export default function UserInfo(props) {
  const user = props.user;

  return (
    <section className='user-info'>
      <Avatar avatar={user.avatar} />
      <article>
        <GeneralInfo name={user.name} username={user.username} bio={user.bio} />
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
