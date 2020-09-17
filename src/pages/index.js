import React from 'react';
import { useStore } from '../store';

const IndexPage = () => {
  const store = useStore();

  return <button type="button">{store.user.authenticated ? 'OUI' : 'NON'}</button>;
};

export default IndexPage;
