"""
Download brand logos for LAPTECH website.

NOTE: logo.clearbit.com currently does not resolve (DNS failure).
This script still tries Clearbit first (as originally written), then falls back to:
  1) Simple Icons CDN
  2) Google Favicons
  3) DuckDuckGo Icons

Usage:
  python3 scripts/download_brand_logos.py
"""

from __future__ import annotations

import os
import urllib.request
from pathlib import Path

brands = {
    "Dell": "dell.com",
    "HP": "hp.com",
    "Lenovo": "lenovo.com",
    "Asus": "asus.com",
    "CP Plus": "cpplusworld.com",
    "Hikvision": "hikvision.com",
    "Dahua": "dahuasecurity.com",
    "TP-Link": "tp-link.com",
    "D-Link": "dlink.com",
    "Cisco": "cisco.com",
    "Ubiquiti": "ui.com",
    "Luminous": "luminousindia.com",
    "Exide": "exideindustries.com",
    "Amaron": "amaron.in",
    "Microtek": "microtekdirect.com",
    "Canon": "canon.com",
    "Epson": "epson.com",
    "Brother": "brother.com",
    "Logitech": "logitech.com",
    "Matrix": "matrixcomsec.com",
    "Panasonic": "panasonic.com",
    "Samsung": "samsung.com",
    "Bosch": "bosch.com",
    "Ahuja": "ahujaradios.com",
    "Intel": "intel.com",
    "AMD": "amd.com",
    "Gigabyte": "gigabyte.com",
    "NVIDIA": "nvidia.com",
    "Zotac": "zotac.com",
    "Crucial": "crucial.com",
    "Kingston": "kingston.com",
    "Seagate": "seagate.com",
    "Western Digital": "westerndigital.com",
    "Zebronics": "zebronics.com",
    "Cooler Master": "coolermaster.com",
    "Antec": "antec.com",
    "MSI": "msi.com",
    "DeepCool": "deepcool.com",
    "TVS Electronics": "tvs-e.in",
    "eSSL": "esslsecurity.com",
    "SecureEye": "secureye.com",
    "OneTouch": "1touch.io",
}

simpleicons = {
    "Dell": "dell",
    "HP": "hp",
    "Lenovo": "lenovo",
    "Asus": "asus",
    "TP-Link": "tplink",
    "Cisco": "cisco",
    "Ubiquiti": "ubiquiti",
    "Epson": "epson",
    "Panasonic": "panasonic",
    "Samsung": "samsung",
    "Bosch": "bosch",
    "Intel": "intel",
    "AMD": "amd",
    "NVIDIA": "nvidia",
    "Kingston": "kingstontechnology",
    "Seagate": "seagate",
    "Cooler Master": "coolermaster",
    "MSI": "msi",
    "DeepCool": "deepcool",
}

output_dir = Path(__file__).resolve().parents[1] / "brand_logos"
output_dir.mkdir(parents=True, exist_ok=True)

UA = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
}


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=25) as response:
        data = response.read()
    if not data or len(data) < 80:
        raise ValueError(f"too small ({0 if not data else len(data)})")
    return data


def main() -> None:
    ok = 0
    for name, domain in brands.items():
        base = output_dir / name.replace(" ", "_")
        sources = [("clearbit", f"https://logo.clearbit.com/{domain}")]
        if name in simpleicons:
            sources.append(("simpleicons", f"https://cdn.simpleicons.org/{simpleicons[name]}"))
        sources.extend(
            [
                ("google", f"https://www.google.com/s2/favicons?domain={domain}&sz=128"),
                ("ddg", f"https://icons.duckduckgo.com/ip3/{domain}.ico"),
            ]
        )

        saved = False
        last_error = None
        for source_name, url in sources:
            try:
                data = fetch(url)
                if source_name == "simpleicons" or data.lstrip().startswith(b"<"):
                    path = base.with_suffix(".svg")
                else:
                    path = base.with_suffix(".png")
                path.write_bytes(data)
                print(f"Downloaded: {name} via {source_name}")
                ok += 1
                saved = True
                break
            except Exception as exc:  # noqa: BLE001
                last_error = exc
        if not saved:
            print(f"Failed to fetch {name}: {last_error}")

    print(f"\nDone. Saved {ok}/{len(brands)} logos to {output_dir}")


if __name__ == "__main__":
    main()
