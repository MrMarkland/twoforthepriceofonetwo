export default function Method() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Methodology</h1>
      <p>
        This demo approximates the FFT data pipeline used for a 6G testbed:
      </p>
      <ol>
        <li>Capture waveform data (real or simulated).</li>
        <li>Perform FFT and extract spectral features.</li>
        <li>Serve the results via a FastAPI backend.</li>
        <li>Visualize in this Next.js frontend using Chart.js.</li>
      </ol>
      <p>
        In the future, this can be extended to connect directly to an
        oscilloscope over SCPI and to classify modes for 6G links.
      </p>
    </main>
  );
}
