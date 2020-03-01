import React from 'react';
import ReactDOM from 'react-dom';

//* Page Import
import HomePage from './pages/home-page/homa.page';

//* mdbreact
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(<HomePage />, document.getElementById('root'));
