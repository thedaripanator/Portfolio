export default function PageHead({ kicker, title, lead }) {
  return (
    <div className="page-head">
      <div className="wrap reveal">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="lead" style={{ marginTop: 12 }}>{lead}</p>
      </div>
    </div>
  );
}
