import documentIcon from '../../assets/document.png';

export default function FileRow({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="file-row"
    >
      <img
        src={documentIcon}
        alt=""
        className="file-icon"
        draggable={false}
      />
      <span className="file-label">{label}</span>
    </a>
  );
}
