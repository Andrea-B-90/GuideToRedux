import {createNavigationContainerRef} from '@react-navigation/native';

export const useNavigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (useNavigationRef.isReady()) {
    useNavigationRef.navigate(name, params);
  }
}
