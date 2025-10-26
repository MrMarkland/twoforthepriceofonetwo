import { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default function Results() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/two-for-one/data/L1.json")
      .then(r => r.json())
      .then(setData);
  }, []);

  useEffect(() => {
    if (!data) return;
    const ctx = document.getElementById("fftChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: data.frequencies,
        datasets: [
          {
            label: "Amplitude",
            data: data.amplitude,
            borderColor: "red",
            fill: false
          }
        ]
      },
      options: { responsive: true }
    });
  }, [data]);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>FFT Results – OAM L = 1</h1>
      <canvas id="fftChart" width="600" height="400"></canvas>
      <p>
        Δf represents the difference between Vortex 1 and Vortex 2 frequencies.
        Stable OAM modes validate containerized 6G processing.
      </p>
    </main>
  );
}
