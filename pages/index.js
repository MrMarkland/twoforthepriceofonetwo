import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Two for the Price of One</h1>
      <h2>6G Optical LiDAR Network via Dockerized Processing</h2>
      <p>
        This platform demonstrates orbital angular momentum (OAM) multiplexing
        and Docker-based FFT processing as a foundation for 6G optical data
        transmission.
      </p>
      <ul>
        <li><Link href="/method">Methodology</Link></li>
        <li><Link href="/results">Results Dashboard</Link></li>
      </ul>
      <footer style={{ marginTop: "2rem" }}>
        <p>© 2025 Jordan Markland</p>
      </footer>
    </main>
  );
}
