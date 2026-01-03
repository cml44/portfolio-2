import FolderRow from './FolderRow';
import TreeIndent from './TreeIndent';
import FileRow from './FileRow';
import LinkRow from './LinkRow';

export default function TreeNode({ node, openIds, toggleOpen, depth = 0 }) {
  const isOpen = openIds.has(node.id);

  const hasFiles = Boolean(node.files && node.files.length > 0);
  const hasLinks = Boolean(node.links && node.links.length > 0);
  const hasChildren = Boolean(node.children && node.children.length > 0);

  return (
    <div className="tree-node-container">
      {/* Folder row */}
      <TreeIndent depth={depth}>
        <FolderRow
          label={node.label}
          isOpen={isOpen}
          onClick={() => toggleOpen(node.id)}
        />
      </TreeIndent>

      {/* Files */}
      {isOpen && hasFiles && (
        <TreeIndent depth={depth + 1}>
          {node.files.map(file => (
            <FileRow
              key={file.label}
              label={file.label}
              href={file.href}
            />
          ))}
        </TreeIndent>
      )}

      {/* Links */}
      {isOpen && hasLinks && (
        <TreeIndent depth={depth + 1}>
          {node.links.map(link => (
            <LinkRow
              key={link.label}
              label={link.label}
              href={link.href}
            />
          ))}
        </TreeIndent>
      )}

      {/* Child folders */}
      {isOpen && hasChildren && (
        <div className="tree-node-children">
          {node.children.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              openIds={openIds}
              toggleOpen={toggleOpen}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
