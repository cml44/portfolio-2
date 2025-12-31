import { useState } from "react";
import { filesystem } from "./filesystem";
import Scene from "./components/Scene";

export default function App() {
  console.log("App rendered");

  const [openIds, setOpenIds] = useState(new Set(["root"]));

  function toggleOpen(id) {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
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
