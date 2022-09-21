import './UserInfo.css';
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
        <button type='button'>Edit profile</button>
        <div id='follow'>
          <a href='#'>
            <span className='bold'>6</span> followers
          </a>
          <a href='#'>
            <span className='bold'>2</span> following
          </a>
        </div>
      </article>
    </section>
  );
}
