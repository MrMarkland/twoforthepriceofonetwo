
# TwoForThePriceOfOne – Dynamic FFT Web Testbed

This repo hosts:

- A **Next.js** frontend (visualizes FFT results with Chart.js).
- A **FastAPI** backend (`fft-analyzer-api`) that serves FFT data.
- A **Cloud Build → Cloud Run** pipeline for automatic deployment
  from GitHub to Google Cloud.

## Local development

### Frontend

```bash
npm install
npm run dev
# visit http://localhost:3000
