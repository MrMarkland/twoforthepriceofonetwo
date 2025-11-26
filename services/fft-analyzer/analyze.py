import json
import numpy as np
import os

# Simulated FFT output for demo
freq = np.linspace(1, 5, 5).tolist()
amp = (np.sin(freq) + 2).tolist()
data = {"frequencies": freq, "amplitude": amp, "delta_f": 0.03}

os.makedirs("/app/data", exist_ok=True)
output_path = "/app/data/L1.json"

with open(output_path, "w") as f:
  json.dump(data, f, indent=2)

print(f"FFT analysis complete → {output_path}")
