// pages/api/results.js

export default async function handler(req, res) {
  const apiBase = process.env.FFT_API_BASE;

  if (!apiBase) {
    return res.status(500).json({
      error: "FFT_API_BASE environment variable is not set."
    });
  }

  try {
    const response = await fetch(`${apiBase}/api/fft`);
    if (!response.ok) {
      throw new Error(`FFT API returned ${response.status}`);
    }
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("[/api/results] FFT fetch error:", err);
    return res.status(500).json({ error: "Unable to fetch FFT data." });
  }
}
