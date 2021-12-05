import { IonSearchbar } from '@ionic/react';

type SearchBarProps = {
  query: (e: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ query }) => {
  return (
    <IonSearchbar
      onIonChange={(e) => query(e.detail.value!)}
      color="light"
      placeholder="Cari Kontak..."
      style={{
        '--border-radius': '24px',
        '--box-shadow': '0 0 0 1px var(--ion-color-dark)',
        margin: '12px 0 8px',
        padding: '0 6px',
      }}
    />
  );
};

export default SearchBar;
