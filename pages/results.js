import { useEffect, useState } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

export default function Results() {
  const [fftData, setFftData] = useState(null);
  const [error, setError] = useState("");
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/results");
        const data = await res.json();
        if (data.error) {
          setError(data.error);
        } else {
          setFftData(data);
        }
      } catch (e) {
        setError("Failed to load FFT data.");
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    if (!fftData) return;

    const ctx = document.getElementById("fftChart")?.getContext("2d");
    if (!ctx) return;

    if (chartInstance) {
      chartInstance.destroy();
    }

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: fftData.frequencies,
        datasets: [
          {
            label: "Amplitude",
            data: fftData.amplitude
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "FFT Amplitude vs Frequency"
          }
        },
        scales: {
          x: { title: { display: true, text: "Frequency (a.u.)" } },
          y: { title: { display: true, text: "Amplitude (a.u.)" } }
        }
      }
    });

    setChartInstance(chart);
  }, [fftData]);

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>FFT Results</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!fftData && !error && <p>Loading FFT data…</p>}

      <canvas id="fftChart" width="600" height="300" />
    </main>
  );
}
