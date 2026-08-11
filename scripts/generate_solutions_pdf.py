#!/usr/bin/env python3
"""Generate LAPTECH Solutions brochure PDF into public/downloads/."""

from __future__ import annotations

from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "downloads" / "LAPTECH-Solutions.pdf"

# Brand colors (RGB)
NAVY = (22, 45, 83)
TEAL = (0, 144, 165)
GOLD = (254, 190, 59)
SLATE = (71, 85, 105)
DARK = (15, 23, 42)
WHITE = (255, 255, 255)
SOFT = (226, 232, 240)

CONTACT = {
    "phone": "+91 7204906049",
    "whatsapp": "+91 7204906049",
    "address": (
        "No 35, Suprabha Complex, SRI Vasavi Temple Street, "
        "Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004"
    ),
}

SOLUTIONS = [
    {
        "title": "IT Hardware & Laptop Solutions",
        "description": (
            "Hardware, laptops, desktops, servers, barcode systems, "
            "upgrades, repairs and ongoing IT support."
        ),
        "features": [
            "Laptops & Desktops",
            "Servers & Workstations",
            "Barcode Printers",
            "Barcode Scanners",
            "Upgrades & Repairs",
            "IT Support",
        ],
    },
    {
        "title": "CCTV & Surveillance",
        "description": (
            "Intelligent surveillance systems designed to protect people, "
            "property and operations."
        ),
        "features": [
            "IP Network Cameras",
            "HD Cameras",
            "PTZ Cameras",
            "Wi-Fi Cameras",
            "Solar Cameras",
            "4G Surveillance",
            "NVR/DVR",
            "Remote Monitoring",
        ],
    },
    {
        "title": "Biometric & Access Control Solutions",
        "description": (
            "Secure entry and workforce management with biometric attendance, "
            "fingerprint and face recognition, and modern access control systems."
        ),
        "features": [
            "Biometric Attendance Systems",
            "Fingerprint & Face Recognition",
            "Access Control Systems",
            "RFID/Card-Based Systems",
            "Installation & Maintenance",
        ],
    },
    {
        "title": "Video Door Phone (VDP) Solutions",
        "description": (
            "Reliable video door phone systems for homes, apartments and "
            "commercial buildings - from indoor monitors to multi-apartment VDP setups."
        ),
        "features": [
            "Video Door Phones",
            "Indoor Monitors",
            "Multi-Apartment VDP Systems",
            "Installation & Maintenance",
        ],
    },
    {
        "title": "Networking & Infrastructure",
        "description": (
            "Reliable connectivity and structured infrastructure for modern businesses."
        ),
        "features": [
            "Structured LAN",
            "Wi-Fi",
            "Routers",
            "Switches",
            "Fiber Optics",
            "Server Racks",
        ],
    },
    {
        "title": "Power Backup",
        "description": (
            "Keep your business running with dependable backup power solutions."
        ),
        "features": [
            "UPS",
            "Inverters",
            "Tubular Batteries",
            "Lithium Batteries",
            "Commercial Power Backup",
        ],
    },
    {
        "title": "Fire Safety",
        "description": (
            "Early detection and dependable fire alarm systems for safer environments."
        ),
        "features": [
            "Fire Alarm Systems",
            "Smoke Detectors",
            "Heat Detectors",
            "Control Panels",
            "Emergency Sounders",
        ],
    },
    {
        "title": "EPABX & Intercom Solutions",
        "description": (
            "Complete EPABX and intercom communication systems for offices, hotels, "
            "apartments and residential buildings."
        ),
        "features": [
            "EPABX Systems",
            "Office Intercom Systems",
            "Multi-Extension Communication Systems",
            "Hotel & Hospitality Communication Systems",
            "Apartment & Residential Intercom Systems",
            "Door Intercom Systems",
            "System Installation & Configuration",
            "Maintenance & AMC Support",
        ],
    },
    {
        "title": "Commercial Audio & Public Address Solutions",
        "description": (
            "Professional commercial audio and public address systems for hotels, "
            "restaurants, offices and large spaces."
        ),
        "features": [
            "Ceiling-Mounted Speakers",
            "Wall-Mounted Speakers",
            "Ground & Outdoor Speakers",
            "Commercial Audio Systems",
            "Hotel & Restaurant Music Solutions",
            "Public Address (PA) Systems",
            "Amplifiers & Mixers",
            "Audio Installation & Maintenance",
        ],
    },
]


class Brochure(FPDF):
    def header(self) -> None:
        if self.page_no() == 1:
            return
        self.set_fill_color(*NAVY)
        self.rect(0, 0, self.w, 14, "F")
        self.set_fill_color(*TEAL)
        self.rect(0, 14, self.w, 1.2, "F")
        self.set_xy(14, 4)
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(*WHITE)
        self.cell(0, 6, "LAPTECH", align="L")
        self.set_xy(14, 4)
        self.set_font("Helvetica", "", 8)
        self.cell(0, 6, "Solutions Brochure", align="R")
        self.ln(16)

    def footer(self) -> None:
        if self.page_no() == 1:
            return
        self.set_y(-12)
        self.set_draw_color(*TEAL)
        self.set_line_width(0.3)
        self.line(14, self.get_y(), self.w - 14, self.get_y())
        self.set_y(-10)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(*SLATE)
        self.cell(0, 6, f"Page {self.page_no() - 1}", align="C")


def draw_cover(pdf: Brochure) -> None:
    pdf.add_page()
    pdf.set_fill_color(*NAVY)
    pdf.rect(0, 0, pdf.w, pdf.h, "F")

    # Accent bar
    pdf.set_fill_color(*TEAL)
    pdf.rect(0, 0, 8, pdf.h, "F")
    pdf.set_fill_color(*GOLD)
    pdf.rect(8, 0, 2, pdf.h, "F")

    pdf.set_xy(24, 48)
    pdf.set_font("Helvetica", "B", 14)
    pdf.set_text_color(*TEAL)
    pdf.cell(0, 8, "COMPLETE TECHNOLOGY INFRASTRUCTURE")

    pdf.set_xy(24, 62)
    pdf.set_font("Helvetica", "B", 42)
    pdf.set_text_color(*WHITE)
    pdf.cell(0, 18, "LAPTECH")

    pdf.set_xy(24, 84)
    pdf.set_font("Helvetica", "", 16)
    pdf.set_text_color(*SOFT)
    pdf.multi_cell(
        pdf.w - 40,
        8,
        "Solutions Brochure",
    )

    pdf.set_xy(24, 108)
    pdf.set_font("Helvetica", "", 12)
    pdf.set_text_color(*SOFT)
    pdf.multi_cell(
        pdf.w - 48,
        7,
        "IT Infrastructure  |  Security  |  Networking  |  Power  |  Communication",
    )

    pdf.set_xy(24, 130)
    pdf.set_draw_color(*TEAL)
    pdf.set_line_width(0.6)
    pdf.line(24, 130, 90, 130)

    pdf.set_xy(24, 140)
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(*SOFT)
    pdf.multi_cell(
        pdf.w - 48,
        6.5,
        "End-to-end technology solutions for homes, businesses and enterprises - "
        "designed for reliability, security and performance.",
    )

    pdf.set_xy(24, 220)
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(*GOLD)
    pdf.cell(0, 6, "CONTACT")
    pdf.set_xy(24, 228)
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(*SOFT)
    pdf.multi_cell(pdf.w - 48, 5.5, f"Phone / WhatsApp: {CONTACT['phone']}")
    pdf.set_x(24)
    pdf.multi_cell(pdf.w - 48, 5.5, CONTACT["address"])


def draw_solution(pdf: Brochure, index: int, item: dict) -> None:
    # Keep related block together when possible
    needed = 42 + len(item["features"]) * 6
    if pdf.get_y() + needed > pdf.h - 20:
        pdf.add_page()

    # Card-like header bar
    y0 = pdf.get_y()
    pdf.set_fill_color(240, 248, 250)
    pdf.set_draw_color(*TEAL)
    pdf.set_line_width(0.4)

    pdf.set_font("Helvetica", "B", 13)
    title_h = 8
    pdf.set_font("Helvetica", "", 10)
    desc_lines = pdf.multi_cell(
        pdf.w - 40,
        5.2,
        item["description"],
        dry_run=True,
        output="LINES",
    )
    feat_h = 6 + len(item["features"]) * 5.5
    box_h = 10 + title_h + 4 + len(desc_lines) * 5.2 + 4 + feat_h + 6

    if y0 + box_h > pdf.h - 18:
        pdf.add_page()
        y0 = pdf.get_y()

    pdf.set_xy(14, y0)
    pdf.set_fill_color(245, 250, 252)
    pdf.rect(14, y0, pdf.w - 28, box_h, "DF")
    pdf.set_fill_color(*TEAL)
    pdf.rect(14, y0, 3, box_h, "F")

    pdf.set_xy(22, y0 + 6)
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(*TEAL)
    pdf.cell(12, 6, f"{index:02d}")
    pdf.set_font("Helvetica", "B", 13)
    pdf.set_text_color(*NAVY)
    pdf.cell(0, 6, item["title"])

    pdf.set_xy(22, y0 + 16)
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(*SLATE)
    pdf.multi_cell(pdf.w - 44, 5.2, item["description"])

    y = pdf.get_y() + 2
    pdf.set_xy(22, y)
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(*TEAL)
    pdf.cell(0, 5, "KEY CAPABILITIES")
    y = pdf.get_y() + 6

    for feature in item["features"]:
        pdf.set_xy(22, y)
        pdf.set_fill_color(*TEAL)
        pdf.circle(24.2, y + 2.2, 1.1, "F")
        pdf.set_xy(28, y)
        pdf.set_font("Helvetica", "", 10)
        pdf.set_text_color(*DARK)
        pdf.cell(0, 5, feature)
        y += 5.5

    pdf.set_y(y0 + box_h + 6)


def draw_closing(pdf: Brochure) -> None:
    pdf.add_page()
    pdf.set_xy(14, 40)
    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(*NAVY)
    pdf.cell(0, 10, "Ready to get started?")

    pdf.set_xy(14, 56)
    pdf.set_font("Helvetica", "", 12)
    pdf.set_text_color(*SLATE)
    pdf.multi_cell(
        pdf.w - 28,
        6.5,
        "Talk to LAPTECH for a free consultation on IT infrastructure, "
        "security, networking, power and communication solutions tailored "
        "to your space.",
    )

    pdf.set_xy(14, 90)
    pdf.set_fill_color(*NAVY)
    pdf.rect(14, 90, pdf.w - 28, 55, "F")
    pdf.set_fill_color(*TEAL)
    pdf.rect(14, 90, 4, 55, "F")

    pdf.set_xy(26, 100)
    pdf.set_font("Helvetica", "B", 12)
    pdf.set_text_color(*GOLD)
    pdf.cell(0, 6, "GET IN TOUCH")

    pdf.set_xy(26, 112)
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(*WHITE)
    pdf.cell(0, 6, f"Phone / WhatsApp: {CONTACT['phone']}")
    pdf.set_xy(26, 122)
    pdf.multi_cell(pdf.w - 52, 5.5, CONTACT["address"])


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = Brochure(orientation="P", unit="mm", format="A4")
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.set_margins(14, 20, 14)

    draw_cover(pdf)
    pdf.add_page()
    pdf.set_font("Helvetica", "B", 18)
    pdf.set_text_color(*NAVY)
    pdf.cell(0, 10, "Our Solutions")
    pdf.ln(4)
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(*SLATE)
    pdf.multi_cell(
        0,
        6,
        "From individual devices to complete enterprise infrastructure, "
        "LAPTECH delivers integrated technology solutions built for "
        "reliability, security and long-term performance.",
    )
    pdf.ln(6)

    for i, item in enumerate(SOLUTIONS, start=1):
        draw_solution(pdf, i, item)

    draw_closing(pdf)
    pdf.output(str(OUT))
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
