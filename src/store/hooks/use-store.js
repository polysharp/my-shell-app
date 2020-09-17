import { useContext } from 'react';

import { StoreContext } from '../components';

/**
 * Return a React Context to access mobx store properties and methods.
 * @returns {{
 *  user: {
 *    authenticated: boolean
 *  }
 *}} Root store hook
 */
const useStore = () => useContext(StoreContext) || null;

export default useStore;
