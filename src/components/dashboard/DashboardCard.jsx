import "./DashboardCard.css";

export default function DashboardCard({
  title,
  iconBig,
  className,
  name,
  iconSmall,
  status,
}) {
  return (
    <div className="card">
      <div className="top">
        <h4 className="title">{title}</h4>
        <span className={`iconBig ${className}`}>{iconBig}</span>
      </div>
      <div className="bottom">
        <h2 className="name">{name}</h2>
        <div className="status">
          {iconSmall}
          <p className="status-text">{status}</p>
        </div>
      </div>
    </div>
  );
}
