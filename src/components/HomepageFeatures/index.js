import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
      title: 'RISC-V & Embedded Systems',
      Svg: require('@site/static/img/RISC-V-logo.svg').default,
      description: ( <>Embedded Developer expert in RISC-V firmware, IoT, and motor control; open to firmware and low-level engineering roles.</> ),
    },
    {
      title: 'RHCSA Linux System Admin',
      Svg: require('@site/static/img/Red_Hat_logo.svg').default,
      description: ( <>Experienced in Data Center operations and Network Engineering for Lenovo; seeking Linux SysAdmin and infrastructure roles.</> ),
    },
    {
      title: 'Microsoft Azure and Fabric',
      Svg: require('@site/static/img/Microsoft_Azure.svg').default,
      description: ( <>Proficient in Microsoft Entra, Intune, and Azure Storage management; open to Cloud Operations and IT Admin roles.</> ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
