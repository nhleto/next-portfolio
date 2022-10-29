export default function Header() {
  return (
    <header>
      <nav class-name="navbar">
        <div class-name="start-nav">
          <div class-name="nav-info">
            <h3 class-name="nav-name">Henry Leto</h3>
            <div class-name="nav-description">Full Stack Developer</div>
          </div>
        </div>
        <div class-name="end-nav">
          {/* <h3 class-name="nav-item" onclick="about()"> */}
          {/* TODO: Add back in ONCLICK functions */}
          <h3 class-name="nav-item">About</h3>
          <h3 class-name="nav-item">Projects</h3>
          <h3 class-name="nav-item">Contact</h3>
          <a
            href="https://github.com/nhleto"
            target="_blank"
            rel="noopener noreferrer"
            class-name="nav-item"
          >
            Github
          </a>
        </div>
      </nav>
    </header>
  );
}
