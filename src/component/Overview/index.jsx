import './style.css';

// Icons
import { EditIcon, ProfileCountIcon } from './icons';

export default function Overview() {
  return (
    <div className='overview'>
      <div className='card'>
        <div className='card-head'>
          {/* Breadcrumb */}
          <ul className='breadcrumb'>
            <li>
              <a className='semi-link' href='/'>
                IIvexII
              </a>
            </li>
            <li>
              README<span className='text-gray'>.md</span>
            </li>
          </ul>
          <EditIcon />
        </div>
        {/* Profile Count SVG */}
        <ProfileCountIcon className='mt-20' />
      </div>
    </div>
  );
}
