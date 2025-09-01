// src/components/EventCard.tsx
import styles from '@/styles/EventCard.module.css';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';
import { FlatEvent } from '@/types/types';

export type EventCardProps = {
  event: FlatEvent;
};

const PLACEHOLDER = '/ph.svg';

function isDocument(value: unknown): value is Document {
  if (
    value &&
    typeof value === "object" &&
    "nodeType" in value &&
    "content" in value
  ) {
    return true;
  }
  return false;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const {
    title,
    description,
    startDate,
    location,
    image,
    // link,
  } = event;

  const imageUrl = image ?? PLACEHOLDER;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={imageUrl}
          alt={title ?? 'event image'}
          width={300}
          height={180}
          className={styles.image}
          layout='responsive'
        />
      </div>

      <div className={styles.eventDetail}>
        {title && <h3 className="bellota">{title}</h3>}

        <div className="montserrat">
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : isDocument(description) ? (
            <div>{documentToReactComponents(description)}</div>
          ) : (
            <p />
          )}
        </div>
      </div>

      <div className={styles.info}>
        <p className={styles.meta}>
          {startDate ?? ''} {startDate && location ? '•' : ''} {location ?? ''}
        </p>
        {/* <a href={link} target="_blank" rel="noopener noreferrer">Event Homepage</a> */}
      </div>
    </div>
  );
};

export default EventCard;
