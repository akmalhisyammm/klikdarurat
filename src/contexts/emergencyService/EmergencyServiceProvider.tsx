import {
  ambulans,
  basarnas,
  bnpb,
  callCenter,
  damkar,
  jasaMarga,
  pln,
  polisi,
} from 'assets';
import { EmergencyService } from 'types/emergencyService';
import { EmergencyServiceContext } from './emergencyService.context';

export const EmergencyServiceProvider: React.FC = ({ children }) => {
  const services: EmergencyService[] = [
    {
      id: 'ES01',
      name: 'Call Center',
      image: callCenter,
      callNumber: '112',
    },
    {
      id: 'ES02',
      name: 'Ambulans',
      image: ambulans,
      callNumber: '119',
    },
    {
      id: 'ES03',
      name: 'Polisi',
      image: polisi,
      callNumber: '110',
    },
    {
      id: 'ES04',
      name: 'Damkar',
      image: damkar,
      callNumber: '113',
    },
    {
      id: 'ES05',
      name: 'Basarnas',
      image: basarnas,
      callNumber: '115',
    },
    {
      id: 'ES06',
      name: 'BNPB',
      image: bnpb,
      callNumber: '117',
    },
    {
      id: 'ES07',
      name: 'PLN',
      image: pln,
      callNumber: '123',
    },
    {
      id: 'ES08',
      name: 'Jasa Marga',
      image: jasaMarga,
      callNumber: '14080',
    },
  ];

  return (
    <EmergencyServiceContext.Provider value={{ services }}>
      {children}
    </EmergencyServiceContext.Provider>
  );
};
