import './style.css';

// Component
import Card from './Card';
import { ProfileCountIcon } from './icons';

// Data for the cards
import { editReadMeData } from './cardData';

export default function Overview() {
  return (
    <div className='overview'>
      <Card data={editReadMeData}>
        {/* Profile Count SVG */}
        <ProfileCountIcon className='mt-20' />
      </Card>
      <div className='flex jc-sb mt-20'>
        <p>Pinned</p>
        <a className='semi-link text-sm' href='/'>
          Customize your pins
        </a>
      </div>
      <Card data={editReadMeData} />
    </div>
  );
}
