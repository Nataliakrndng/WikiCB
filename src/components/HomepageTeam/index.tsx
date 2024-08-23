import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type TeamItem = {
  title: string;
  imgSrc: string;
  initials: string;  
  description: JSX.Element;
};

const TeamList: TeamItem[] = [
  {
    title: 'Kevin Tan',
    imgSrc: require('@site/static/img/kevin.png').default,
    initials: 'KEV', 
    description: (
      <>
        Open Shift Container
      </>
    ),
  },
  {
    title: 'John Hendrick Halim',
    imgSrc: require('@site/static/img/john.png').default,
    initials: 'JHA', 
    description: (
      <>
         Database
      </>
    ),
  },
  {
    title: 'Natalia Margareth Karundeng',
    imgSrc: require('@site/static/img/tata.png').default,
    initials: 'TAK', 
    description: (
      <>
         Open Shift Container
      </>
    ),
  },
  {
    title: 'Ardo Damarjati',
    imgSrc: require('@site/static/img/ardo.png').default,
    initials: 'ADO', 
    description: (
      <>
        Database
      </>
    ),
  },
];

function Team({title, imgSrc, initials, description}: TeamItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={imgSrc} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <div className={styles.headingContainer}>
          <Heading as="h3">{title}</Heading>
        </div>
          <code>{initials}</code>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageTeam(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {TeamList.map((props, idx) => (
            <Team key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
