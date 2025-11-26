export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Two For The Price Of One</h1>
      <p>
        Dynamic web testbed for FFT / 6G signal experiments. This site is
        powered by Next.js on Google Cloud Run, with a FastAPI backend exposing
        FFT data.
      </p>

      <ul>
        <li>
          <a href="/method">Methodology</a>
        </li>
        <li>
          <a href="/results">Live FFT Results</a>
        </li>
      </ul>
    </main>
  );
}
