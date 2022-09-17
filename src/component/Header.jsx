import Logo from '../images/Logo';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <section className='section-1'>
        {/****************************
                    Logo 
        ******************************/}
        <div className='logo'>
          <Logo />
        </div>
        {/****************************
                  Search Bar 
        ******************************/}
        <div className='search-bar'>
          <input placeholder='Search or jump to....' type='text' />
          <i>/</i>
        </div>
        {/****************************
                Navigation Bar 
        ******************************/}
        <nav class='nav-bar'>
          <ul>
            <li>
              <a href='.'>Pull requests</a>
            </li>
            <li>
              <a href='.'>Issues</a>
            </li>
            <li>
              <a href='.'>Marketplace</a>
            </li>
            <li>
              <a href='.'>Explore</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className=''></section>
    </header>
  );
}
