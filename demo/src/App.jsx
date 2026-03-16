export default function App() {
  return (
    <main className="demo-page">
      <div className="container stack">
        <header className="stack">
          <span className="badge badge-primary">React + Vite Demo</span>
          <h1 className="m-0">FeatherCSS in a React App</h1>
          <p className="m-0 text-left">
            This demo shows project-level SCSS theme overrides and ready-to-use FeatherCSS components.
          </p>
        </header>

        <section className="hero">
          <article className="card shadow-sm">
            <div className="card-header">
              <strong>Buttons</strong>
            </div>
            <div className="card-body stack">
              <div className="input-group">
                <button className="btn btn-primary" type="button">Primary</button>
                <button className="btn btn-secondary" type="button">Secondary</button>
                <button className="btn btn-outline" type="button">Outline</button>
              </div>
              <div className="alert alert-info">Info alert with theme-based color tokens.</div>
              <div className="alert alert-warning">Warning alert for contextual feedback.</div>
            </div>
          </article>

          <aside className="stack">
            <div className="card shadow-sm">
              <div className="card-header"><strong>Badges</strong></div>
              <div className="card-body input-group">
                <span className="badge badge-primary">Primary</span>
                <span className="badge badge-secondary">Secondary</span>
                <span className="badge badge-success">Success</span>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-header"><strong>Form</strong></div>
              <div className="card-body stack">
                <input className="input" type="text" placeholder="Your name" />
                <input className="input" type="email" placeholder="Email" />
                <button className="btn btn-primary" type="button">Submit</button>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
