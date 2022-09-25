import './style.css';

// Component
import Card from './Card';

export default function Overview() {
  const editReadMeCard = {
    breadcrumbs: [
      {
        type: 'link',
        url: '/',
        content: 'IIvexII',
      },
      {
        type: 'text',
        content: 'README',
        extension: 'md',
      },
    ],
  };
  return (
    <div className='overview'>
      <Card data={editReadMeCard} />
    </div>
  );
}
