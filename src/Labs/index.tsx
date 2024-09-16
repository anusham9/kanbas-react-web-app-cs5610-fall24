import { Routes, Route } from 'react-router';
import Labs1 from './Lab1';
import Labs2 from './Labs2';
import TOC from './TOC';

export default function Labs() {
  return (
    <div>
      <h1>Anusha Mannava</h1>
      <TOC />
      <h1>Labs</h1>
      <Routes>
        <Route path="Lab1" element={<Labs1 />} />
        <Route path="Lab2" element={<Labs2 />} />
        <Route path="Lab3" element={<h2>Lab 3</h2>} />
      </Routes>
    </div>
  );
}
