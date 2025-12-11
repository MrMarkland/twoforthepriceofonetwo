import Link from "next/link";
import Head from "next/head";

export default function MethodPage() {
  return (
    <>
      <Head>
        <title>Methodology – Two For The Price Of One</title>
      </Head>

      <main className="page">
        <header className="top">
          <Link href="/" className="crumb">
            ← Back to dashboard
          </Link>
          <h1>Methodology: Optical &amp; RF Signal Chain</h1>
          <p className="lede">
            This section documents how the 6G optical testbed is assembled, from
            RF tone generation through petal-beam modulation and photodetection
            to digitization and FFT processing in the <code>fft-api</code>{" "}
            backend.
          </p>
        </header>

        <section className="layout">
          <article className="main">
            <h2>1. RF signal generation</h2>
            <p>
              A single-tone RF signal representative of a down-converted
              28&nbsp;GHz 6G carrier is synthesized. For most runs the
              intermediate frequency is set to <strong>15 kHz</strong>, with
              amplitude chosen so that the received waveform remains within the
              linear range of the photodetector and ADC.
            </p>

            <h2>2. Optical modulation using petal beams</h2>
            <p>
              The RF tone is used to intensity-modulate a{" "}
              <strong>1550 nm</strong> continuous-wave laser. The beam is passed
              through a mode-shaping stage to generate a pair of{" "}
              <strong>petal beams with topological charge ℓ = +1 and ℓ = −1</strong>.
              These orthogonal modes share the same optical carrier but carry
              different portions of the RF information, enabling{" "}
              <em>mode-division multiplexing</em>.
            </p>

            <h2>3. Free-space channel</h2>
            <p>
              The combined beam propagates across an approximately{" "}
              <strong>1 m free-space link</strong>. Adjustable apertures and
              lenses allow insertion of turbulence elements, misalignment, or
              defocus to emulate different channel conditions encountered in
              6G-class wireless-optical links.
            </p>

            <h2>4. Detection and digitization</h2>
            <p>
              At the receiver, the optical field is projected back into its
              constituent modes and detected using an InGaAs photodiode with a
              transimpedance amplifier. The resulting analog waveform is
              digitized using an ADC at{" "}
              <strong>200 kS/s with 16-bit resolution</strong>.
            </p>

            <h2>5. FFT computation in the backend</h2>
            <p>
              Time-domain samples are transmitted to the{" "}
              <code>fft-api</code> service running on Google Cloud Run. The
              backend executes a <strong>4096-point FFT</strong> with a Hann
              window and 50% overlap, and extracts:
            </p>
            <ul>
              <li>Dominant tone frequency (expected ≈ 15 kHz)</li>
              <li>Peak magnitude (dBFS)</li>
              <li>Noise floor estimate</li>
              <li>Signal-to-noise ratio (SNR)</li>
            </ul>

            <h2>6. Returning results to the web dashboard</h2>
            <p>
              The processed spectrum and metrics are returned as JSON and
              rendered on the <Link href="/results">Results</Link> page. Because
              the frontend is fully static, all interaction occurs through
              client-side fetch calls to the Cloud Run endpoint.
            </p>
          </article>

          <aside className="side">
            <div className="card">
              <h3>Default experiment settings</h3>
              <ul>
                <li>Laser: 1550 nm CW</li>
                <li>Mode pair: ℓ = +1 / −1</li>
                <li>Link length: 1 m free-space</li>
                <li>RF IF tone: 15 kHz</li>
                <li>Sample rate: 200 kS/s</li>
                <li>FFT size: 4096</li>
              </ul>
            </div>

            <div className="card">
              <h3>Related pages</h3>
              <ul>
                <li>
                  <Link href="/">Dashboard overview</Link>
                </li>
                <li>
                  <Link href="/results">Live FFT results</Link>
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </main>

      <style jsx>{`
        .page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 1.5rem 3rem;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          color: #111827;
        }

        .crumb {
          font-size: 0.85rem;
          color: #4b5563;
        }

        .crumb:hover {
          text-decoration: underline;
        }

        .top h1 {
          margin-top: 0.75rem;
          margin-bottom: 0.25rem;
          font-size: 2rem;
        }

        .lede {
          max-width: 46rem;
          color: #4b5563;
        }

        .layout {
          display: grid;
          grid-template-columns: minmax(0, 2.3fr) minmax(260px, 1fr);
          gap: 1.75rem;
          margin-top: 2rem;
        }

        .main h2 {
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .main p {
          margin: 0.35rem 0;
          color: #374151;
        }

        .main ul {
          padding-left: 1.2rem;
          color: #374151;
        }

        .side {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .card {
          background: #f9fafb;
          border-radius: 0.85rem;
          padding: 1rem 1.1rem;
          border: 1px solid #e5e7eb;
          font-size: 0.9rem;
        }

        .card h3 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        .card ul {
          padding-left: 1.1rem;
          margin: 0;
        }

        @media (max-width: 900px) {
          .layout {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </>
  );
}
