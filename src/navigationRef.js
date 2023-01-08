// let navigator;
// export const setNavigator = (nav) => {
//     navigator = nav;
// };


// RootNavigation.js

import { createNavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';
export const navigationRef = createNavigationContainerRef()
//navigationRef is the thing which allow us to navigate it has direct access to navigation from app
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// add other navigation functions that you need and export them