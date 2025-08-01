import HeroSection from '@/components/HeroSection';
import EventCard from '@/components/EventCard';
import styles from '@/styles/Home.module.css';
import { getUpcomingEvents } from '@/lib/contentful-queries';
import { FlatEvent } from '@/types/types';
import { LogoCarousel, Logo } from '@/components/LogoCarousel';

const partners: Logo[] = [
  { src: '/images/dhq.png', alt: 'Defense HeadQuarters' },
  { src: '/images/na.png', alt: 'Nigerian Army' },
  { src: '/images/naf.png', alt: 'Nigerian Air-Force' },
  { src: '/images/nn.png', alt: 'Nigerian Navy' },
  { src: '/images/nsa.png', alt: 'Office of the National Security Adviser' },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export default async function HomePage() {
  const events: FlatEvent[] = await getUpcomingEvents();
  // const events = await getUpcomingEvents();

  return (
    <>
      <HeroSection
        title="Where our national security begins..."
        description=""
        backgroundImage="/ph.svg"
      />

      <section className={styles.upcomingEvents}>
        <h2 className="bellota">Upcoming Events</h2>
        <div className={styles.eventsGrid}>
          {events.map((e) => (
            <EventCard
              key={e.id}                   // use e.id, not e.sys.id
              title={e.title}              // use e.title, not e.fields.title
              description={e.description}  // use e.description
              startDate={formatDate(e.startDate)}
              endDate={e.endDate}
              location={e.location}
              image={e.image}
              link={e.link}
            />
          ))}
        </div>
        <div className={styles.viewAll}>
          <button className="bellota">View all events</button>
        </div>
      </section>

      <section className={styles.about}>
        <h2 className='bellota'>What is GEOINT?</h2>
        <p className='montserrat'>
          Geospatial intelligence, or GEOINT, is the exploitation and analysis of imagery and geospatial
          information to describe, assess, and visually depict physical features and geographically referenced
          activities on the Earth.
        </p>
        <p className='montserrat'>– The National Geospatial-Intelligence Agency</p>
      </section>
      <div>
        <LogoCarousel logos={partners}  />
      </div>
      <section className={styles.membership}>
        <div>
          <h3 className='bellota'>Become a GIFON Member</h3>
          <p className='montserrat'>
            Whether your whole organization or just you — make a difference in the geospatial community by joining GIFON.
          </p>
          <button>Learn More</button>
        </div>
      </section>
    </>
  );
}
