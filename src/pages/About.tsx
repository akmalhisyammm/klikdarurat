import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { ade, akmal, dimas, indra, rezalutfi } from 'assets';

import { AppInfo, AppReference, DeveloperCard } from 'components/pages/About';
import Layout from 'components/layout';

import styles from 'styles/About.module.scss';

const developerData = [
  {
    id: 'D01',
    name: 'Muhammad Akmal Hisyam',
    nim: '00000040027',
    photo: akmal,
    githubLink: 'https://github.com/akmalhisyammm'
  },
  {
    id: 'D02',
    name: 'Ade Kiswara',
    nim: '00000040037',
    photo: ade,
    githubLink: 'https://github.com/adekiswara'
  },
  {
    id: 'D03',
    name: 'Dimas Lesmana',
    nim: '00000041281',
    photo: dimas,
    githubLink: 'https://github.com/dimaslesmana'
  },
  {
    id: 'D04',
    name: 'Indra Prasetya Hadiwana',
    nim: '00000028935',
    photo: indra,
    githubLink: 'https://github.com/indrasb'
  },
  {
    id: 'D05',
    name: 'Muhammad Rezalutfi',
    nim: '00000028098',
    photo: rezalutfi,
    githubLink: 'https://github.com/Rezalutfi22'
  }
];

const About: React.FC = () => {
  return (
    <Layout title="Tentang">
      <IonGrid className="ion-text-center">
        <AppInfo />

        <AppReference />

        <IonRow className="ion-justify-content-center">
          <IonCol size="12">
            <hr className={styles.sectionDivider} />
            <h2>Tim Kami</h2>
          </IonCol>

          {developerData.map((dev) => (
            <IonCol key={dev.id} sizeLg="6" sizeMd="6" sizeSm="6" sizeXs="12">
              <DeveloperCard
                name={dev.name}
                nim={dev.nim}
                photo={dev.photo}
                githubLink={dev.githubLink}
              />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </Layout>
  );
};

export default About;
