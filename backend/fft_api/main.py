from fastapi import FastAPI
from fastapi.responses import JSONResponse
import numpy as np

app = FastAPI(
    title="FFT Analyzer API",
    description="Simple API to return FFT-like data for the TwoForThePriceOfOne demo.",
    version="1.0.0",
)


@app.get("/api/fft")
def get_fft():
    """
    Return demo FFT data.
    Later you can replace this with:
    - Real oscilloscope data
    - Data loaded from Google Cloud Storage
    - Calls into your fft-analyzer microservice
    """
    freq = np.linspace(1, 5, 5).tolist()
    amp = (np.sin(freq) + 2).tolist()

    data = {
        "frequencies": freq,
        "amplitude": amp,
        "delta_f": 0.03,
    }

    return JSONResponse(content=data)