import './style.css';

// Component
import Card from './Card';
import { ProfileCountIcon } from './icons';

export default function Overview() {
  const editReadMeCard = {
    dragable: true,
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
      <Card data={editReadMeCard}>
        {/* Profile Count SVG */}
        <ProfileCountIcon className='mt-20' />
      </Card>
    </div>
  );
}
