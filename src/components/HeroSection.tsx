import styles from '@/styles/HeroSection.module.css';

type HeroSectionProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

export default function HeroSection({ title, description, backgroundImage }: HeroSectionProps) {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <h1 className='bellota'>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
