import { getRoot } from 'mobx-easy';

/** @returns {import('../stores/containers/rootStore').default} */
const getRootStore = () => getRoot();

export default getRootStore;
