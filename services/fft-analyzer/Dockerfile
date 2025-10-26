

import json, numpy as np, os

# Simulated FFT output for demo
freq = np.linspace(1, 5, 5).tolist()
amp = (np.sin(freq) + 2).tolist()
data = {"frequencies": freq, "amplitude": amp, "delta_f": 0.03}

os.makedirs("/app/data", exist_ok=True)
with open("/app/data/L1.json", "w") as f:
    json.dump(data, f, indent=2)

print("FFT analysis complete → /app/data/L1.json")