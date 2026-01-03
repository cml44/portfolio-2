import folderClosed from '../../assets/folder_closed.png';
import folderOpen from '../../assets/folder_open.png';

export default function FolderRow({ label, isOpen, onClick }) {
  return (
    <div className="folder-row" onClick={onClick}>
      <img
        src={isOpen ? folderOpen : folderClosed}
        alt=""
        className="folder-icon"
        draggable={false}
      />
      <span className="folder-label">{label}</span>
    </div>
  );
}