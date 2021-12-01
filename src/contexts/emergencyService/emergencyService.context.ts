import { createContext } from 'react';
import { EmergencyServiceData } from 'types/emergencyService';

interface Context {
  services: EmergencyServiceData[];
}

export const EmergencyServiceContext = createContext<Context>({ services: [] });
