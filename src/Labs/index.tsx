import { Routes, Route } from 'react-router';
import Labs1 from './Lab1';
import Labs2 from './Lab2';
import TOC from './TOC';
import Lab3 from './Lab3';
import Lab4 from './Lab4';
import store from './store';
import { Provider } from 'react-redux';

export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h1>Anusha Mannava</h1>
        <TOC />
        <h1>Labs</h1>
        <Routes>
          <Route path="Lab1" element={<Labs1 />} />
          <Route path="Lab2" element={<Labs2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
        </Routes>
      </div>
    </Provider>
  );
}
