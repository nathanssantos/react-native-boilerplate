import Layout from '../constants/Layout';

const rem = (value) => value * (Layout.window.width / 414);

export default rem;
