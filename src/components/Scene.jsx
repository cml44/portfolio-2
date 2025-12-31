import { contentRegistry } from "../content";

function TreeNode({ node, openIds, toggleOpen, depth = 0 }) {
  const isOpen = openIds.has(node.id);

  return (
    <div style={{ marginLeft: depth * 16 }}>
      {/* Folder label */}
      <div
        onClick={() => toggleOpen(node.id)}
        style={{ cursor: "pointer", userSelect: "none" }}
      >
        {node.label}
      </div>

      {/* Folder content (inline) */}
      {isOpen && node.content && (() => {
        const Content = contentRegistry[node.content.component];
        return Content ? <Content /> : null;
      })()}

      {/* Children */}
      {isOpen &&
        node.children.map(child => (
          <TreeNode
            key={child.id}
            node={child}
            openIds={openIds}
            toggleOpen={toggleOpen}
            depth={depth + 1}
          />
        ))}
    </div>
  );
}

export default function Scene({ root, openIds, toggleOpen }) {
  return (
    <div>
      <TreeNode
        node={root}
        openIds={openIds}
        toggleOpen={toggleOpen}
      />
    </div>
  );
}
