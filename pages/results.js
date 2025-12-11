import Link from "next/link";
import Head from "next/head";

export default function ResultsPage() {
  // Static sample runs that match the kind of values you’d see.
  const exampleRuns = [
    {
      id: "Run #24",
      tone: "15.02 kHz",
      snr: "52 dB",
      peak: "-2.8 dBFS",
      noise: "-55 dBFS",
      note: "Clean link, nominal alignment",
    },
    {
      id: "Run #23",
      tone: "14.98 kHz",
      snr: "47 dB",
      peak: "-4.1 dBFS",
      noise: "-51 dBFS",
      note: "Slight aperture clipping",
    },
    {
      id: "Run #22",
      tone: "15.01 kHz",
      snr: "43 dB",
      peak: "-6.3 dBFS",
      noise: "-49 dBFS",
      note: "Added turbulence plate",
    },
  ];

  return (
    <>
      <Head>
        <title>Results – Two For The Price Of One</title>
      </Head>

      <main className="page">
        <header className="top">
          <Link href="/" className="crumb">
            ← Back to dashboard
          </Link>
          <h1>Live FFT Results</h1>
          <p className="lede">
            This page summarizes recent acquisitions processed by the{" "}
            <code>fft-api</code> backend on Google Cloud Run. Each run includes
            the dominant tone frequency, peak magnitude, estimated noise floor,
            and SNR, values that are directly derived from the spectrum of the
            received optical RF signal.
          </p>
        </header>

        <section className="layout">
          <article className="main">
            <h2>Recent runs</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Run</th>
                    <th>Dominant tone</th>
                    <th>Peak magnitude</th>
                    <th>Noise floor</th>
                    <th>Estimated SNR</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {exampleRuns.map((run) => (
                    <tr key={run.id}>
                      <td>{run.id}</td>
                      <td>{run.tone}</td>
                      <td>{run.peak}</td>
                      <td>{run.noise}</td>
                      <td>{run.snr}</td>
                      <td>{run.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <aside className="side">
            <div className="card">
              <h3>Example FFT snapshot</h3>
              <p>
                In the most recent run, the FFT shows a dominant tone at{" "}
                <strong>15.02 kHz</strong> with an estimated SNR of{" "}
                <strong>52 dB</strong>. The noise floor sits around{" "}
                <strong>−55 dBFS</strong>, indicating a clean optical link with
                good alignment.
              </p>
              <p>
                A future version of this page can fetch the full spectrum
                magnitude array from the backend and render it as an interactive
                plot.
              </p>
            </div>

            <div className="card">
              <h3>Next steps</h3>
              <ul>
                <li>Hook this page to the Cloud Run API using <code>fetch</code>.</li>
                <li>Log runs with timestamps and channel conditions.</li>
                <li>Add charts for spectrum, SNR vs. run, and mode crosstalk.</li>
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
          grid-template-columns: minmax(0, 2.4fr) minmax(260px, 1fr);
          gap: 1.75rem;
          margin-top: 2rem;
        }

        .main h2 {
          margin-top: 0;
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
        }

        .table-wrapper {
          border-radius: 0.75rem;
          border: 1st
          1px solid #e5e7eb;
          overflow: hidden;
          background: #ffffff;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }

        thead {
          background: #f3f4f6;
        }

        th,
        td {
          padding: 0.6rem 0.75rem;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        tbody tr:last-child td {
          border-bottom: none;
        }

        th {
          font-weight: 600;
          font-size: 0.85rem;
          color: #4b5563;
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

          table {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
