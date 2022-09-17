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
        </div>
        {/****************************
                Navigation Bar 
        ******************************/}
        <nav class='nav-bar'>
          <ul>
            <li>Pull requests</li>
            <li>Issues</li>
            <li>Marketplace</li>
            <li>Explore</li>
          </ul>
        </nav>
      </section>
      <section></section>
    </header>
  );
}
