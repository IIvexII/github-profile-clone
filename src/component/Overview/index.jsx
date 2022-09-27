import './style.css';

// Component
import Card from './Card';
import { ProfileCountIcon } from './icons';

// Data for the cards
import { editReadMeData, pinnedCards } from './cardData';

export default function Overview() {
  return (
    <div className='overview'>
      <Card className='mt-20' data={editReadMeData}>
        {/* Profile Count SVG */}
        <ProfileCountIcon className='mt-20' />
      </Card>
      {/* Pinned text and option */}
      <div className='flex jc-sb mt-20'>
        <p>Pinned</p>
        <a className='semi-link text-sm' href='/'>
          Customize your pins
        </a>
      </div>
      {/* Pinned repos */}
      <div className='flex jc-sb wrap gap-10 mt-20'>
        {pinnedCards.map((card, index) => {
          return <Card key={index} className='half-card' data={card} />;
        })}
      </div>
    </div>
  );
}
