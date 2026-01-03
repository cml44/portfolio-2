import TreeNode from './TreeNode';

export default function Scene({ root, openIds, toggleOpen }) {
  return (
    <div className="scene">
      <TreeNode
        node={root}
        openIds={openIds}
        toggleOpen={toggleOpen}
      />
    </div>
  );
}