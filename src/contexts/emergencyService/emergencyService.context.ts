import { createContext } from 'react';
import { EmergencyService } from 'types/emergencyService';

interface Context {
  services: EmergencyService[];
}

export const EmergencyServiceContext = createContext<Context>({ services: [] });
