const INDENT_PX = 20;

export default function TreeIndent({ depth, children }) {
  return (
    <div style={{ paddingLeft: depth * INDENT_PX }}>
      {children}
    </div>
  );
}