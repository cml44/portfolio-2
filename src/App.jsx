import { useState } from 'react';
import { filesystem } from './data/filesystem';
import { Scene } from './components/Tree';

export default function App() {
  const [openIds, setOpenIds] = useState(new Set(['root']));

  function toggleOpen(id) {
    setOpenIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <Scene
      root={filesystem}
      openIds={openIds}
      toggleOpen={toggleOpen}
    />
  );
}
