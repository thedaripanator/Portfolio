// `html` is static, hard-coded syntax-highlighted markup (never user input).
export default function CodeWindow({ title, html, children, style }) {
  return (
    <div className="window" style={style}>
      <div className="window-bar">
        <i /><i /><i />
        <span>{title}</span>
      </div>
      <pre>
        <span dangerouslySetInnerHTML={{ __html: html }} />
        {children}
      </pre>
    </div>
  );
}
