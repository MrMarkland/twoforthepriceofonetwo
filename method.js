export default function Method() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Technique & Apparatus</h1>
      <p>
        The experiment integrates optical vortex beam mode multiplexing with
        Docker-based signal processing. Two vortex modes (L = 1, 2, 4) are
        generated and analyzed using containerized FFT pipelines.
      </p>
      <ol>
        <li>Align laser through mode multiplexer.</li>
        <li>Capture signals and run FFT within Docker.</li>
        <li>Upload results to MinIO and visualize here.</li>
      </ol>
    </main>
  );
}
