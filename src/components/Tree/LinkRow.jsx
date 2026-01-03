import linkIcon from '../../assets/earth.ico';

export default function LinkRow({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="file-row"
    >
      <img
        src={linkIcon}
        alt=""
        className="file-icon"
        draggable={false}
      />
      <span className="file-label">{label}</span>
    </a>
  );
}
