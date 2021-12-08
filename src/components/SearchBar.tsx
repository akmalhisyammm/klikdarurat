import { IonSearchbar } from '@ionic/react';

type SearchBarProps = {
  query: (e: string) => void;
  placeholder?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ query, placeholder }: SearchBarProps) => {
  return (
    <IonSearchbar
      onIonChange={(e) => query(e.detail.value!)}
      color="light"
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
