import styles from '@/styles/EventCard.module.css';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';


export type EventCardProps = {
  title: string;
  description: Document;
  startDate: string;
  endDate?: string;
  location: string;
  image: string;
  link: string;
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  startDate,
  location,
  image,
}) => {
  const imageUrl = image;

  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={180}
        className={styles.image}
      />
      <div className={styles.eventDetail}>
        <h3 className='bellota'>{title}</h3>
        <div className='montserrat'>{typeof description === 'string'
            ? description
            : documentToReactComponents(description)}
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.meta}>{startDate} • {location}</p>
        {/* <a href={link} target="_blank" rel="noopener noreferrer">
          Event Homepage
        </a> */}
      </div>
    </div>
  );
};

export default EventCard;
