

export default async function handler(req, res) {
  const data = await fetch("https://your-minio-endpoint/fft/results/L1.json")
    .then(r => r.json())
    .catch(() => ({ error: "Unable to fetch live data." }));
  res.status(200).json(data);
}