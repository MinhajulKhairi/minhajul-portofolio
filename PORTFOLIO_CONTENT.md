# Konten Portofolio — Minhajul Yusri Khairi

Dokumen ini adalah sumber tunggal (single source of truth) untuk semua copy/teks yang dipakai
di `app/page.tsx`. Kalau ada perubahan data (proyek baru, pengalaman baru, angka metrik baru),
update di sini dulu, baru sinkronkan ke kode — supaya konten portofolio dan dokumen ini tidak
pernah kontradiktif.

---

## 1. Meta / SEO

| Field | Isi |
|---|---|
| Title | Minhajul Yusri Khairi — AI Evaluator & Data Analyst |
| Description | Portofolio Minhajul Yusri Khairi: NLP & ABSA, AI Evaluation & Metrics, Data Pipeline & EDA. Lulusan Sistem Informasi Universitas Hasanuddin. |

---

## 2. Navbar

- Wordmark: `MYK / portfolio.log`
- Nav link: 02 · Competencies, 03 · Work, 04 · Contact
- CTA sekunder: **Unduh CV** → `/Minhajul_Yusri_Khairi-CV.pdf`
- CTA primer: **GitHub ↗** → `https://github.com/MinhajulKhairi`

---

> **Struktur halaman (v2):** Overview → Work Experience → Projects → Certification → Contact.
> Section "Core Competencies" versi awal sudah dilebur jadi 3 chip singkat di hero
> (`NLP & ABSA`, `AI Evaluation & Metrics`, `Data Pipeline & EDA`) supaya tidak duplikat dengan
> isi Work Experience dan Projects yang sudah menjelaskan skill yang sama secara konkret.

## 3. Hero (§ 01 — Overview)

**Status line:** `STATUS: OPEN_TO_FULL-TIME_OPPORTUNITIES` (indikator hijau berdenyut)

**Headline:**
> Minhajul Yusri Khairi

**Role (typewriter, bergantian):**
1. AI Evaluator & Data Analyst
2. NLP Researcher — ABSA
3. Data Pipeline & EDA

**Paragraf pembuka:**
> Lulusan Sistem Informasi Universitas Hasanuddin dengan fokus pada AI, NLP, dan Data Analytics.
> Terbiasa mengubah data mentah menjadi insight strategis melalui EDA, data pipeline, dan
> evaluasi model berbasis metrik yang terukur.

**CTA:** Unduh CV · GitHub ↗ · LinkedIn ↗

**Metrik strip (4 kolom):**

| Angka | Label |
|---|---|
| 3.90/4.00 | GPA — Information Systems |
| 1,000+ | Synthetic data points (ABSA) |
| 0.8 | Similarity threshold (Al-Bayyan) |
| 2024 | Published — HealthSense Journal |

---

## 4. Work Experience (§ 02)

Eyebrow: `§ 02` — Judul: **Work Experience**

### 01 — AI Evaluation & Annotation (Contractor)
- Org: T-Maxx International — Beijing, China (Remote)
- Periode: Mei 2026 — Sekarang
- Bullet:
  - Menyusun rubrik penilaian objektif (skala 0–1) dan subjektif untuk benchmarking kemampuan
    LLM pada reasoning matematis, tugas open-ended, dan closed-ended.
  - Mengevaluasi output Text-to-Image (T2I) dan Image-to-Image (I2I) menggunakan Discounted
    Cumulative Gain (DCG) scoring dan stability tagging untuk kepatuhan keamanan, integritas
    struktural, dan kualitas estetika.
  - Mengkalibrasi logika error tagging dan metrik evaluasi sesuai SOP, mencakup identifikasi
    intent pengguna, keterbacaan, dan nilai konten.
- Tag: LLM Benchmarking, DCG Scoring, Rubric Design, SOP Calibration

### 02 — IT Support Intern
- Org: PT. Tiran Indonesia — North Konawe, Indonesia
- Periode: Mar 2025 — Apr 2025
- Bullet:
  - Menyusun laporan teknis harian untuk mendokumentasikan performa sistem, status jaringan,
    dan insiden yang telah diselesaikan untuk tinjauan manajemen.
  - Berkolaborasi lintas tim untuk troubleshooting masalah hardware/software, menjaga
    stabilitas operasional dan integritas data.
- Tag: Technical Reporting, Troubleshooting, Cross-functional Collaboration

---

## 5. Projects (§ 03) — layout alternating (zig-zag)

Eyebrow: `§ 03` — Judul: **Projects**

### 01 — Dashboard ABSA — Sentimen Layanan Kampus
- Kind: `Lead Researcher`
- Periode: Okt 2025 — Jan 2026
- Deskripsi: Framework NLP berbasis fine-tuned IndoBERT untuk mengklasifikasikan sentimen pada
  4 aspek layanan pendidikan, dengan fokus pada fasilitas kampus dan sumber daya manusia.
  Strategi synthetic-to-real transfer learning digunakan untuk mengatasi keterbatasan data
  berlabel di domain low-resource, dilengkapi dashboard analitik interaktif untuk pemangku
  kepentingan institusi.
- Metrik: **1,000+** synthetic data points · **4** aspek layanan · **IndoBERT** fine-tuned model
- Stack chip: IndoBERT, Streamlit, Python, Synthetic Data Generation
- Visual: bar chart (representasi performa model)

### 02 — Al-Bayyan — Keselarasan Fatwa & Ajaran Agama
- Kind: `Dataset Curator`
- Periode: Des 2024
- Deskripsi: Sistem berbasis NLP untuk menganalisis keselarasan linguistik lintas teks fatwa,
  Al-Qur'an, dan Hadis menggunakan model IndoBERT dan LSTM. Mendemonstrasikan kapabilitas AI
  untuk membantu institusi memverifikasi konsistensi tekstual melalui semantic relevance
  matching, dengan pipeline preprocessing data yang mencakup tokenisasi dan sequence padding.
- Metrik: **500+** data points dianalisis · **0.8** similarity threshold · **2** model diuji
  (IndoBERT, LSTM)
- Stack chip: IndoBERT, LSTM, Semantic Matching, Data Preprocessing
- Visual: dot grid (representasi semantic matching)

> **Catatan jujur:** hanya ada 2 item di section ini karena hanya ada 2 item yang bisa
> dipertanggungjawabkan dari CV. Jangan tambah item ketiga kecuali memang ada proyek baru
> yang riil.

---

## 6. Certification (§ 04)

Eyebrow: `§ 04` — Judul: **Certification**

### 01 — Certification
- Judul: The Complete Machine Learning Course: From Zero to Expert
- Penyelenggara: Udemy

### 02 — Publication
- Judul: Published Paper — HealthSense: Journal of Public Health Perspective
- Penyelenggara: Universitas Hasanuddin · 2024

**Relevant Coursework** (chip list): Deep Learning, Machine Learning, Business Intelligence,
Big Data, Information Visualization, Software Testing/QA, Software Engineering,
Object-Oriented Programming, Mobile Programming, Web Programming, Entrepreneurship.

---

## 7. Footer / Contact (§ 05)

Eyebrow: `§ 05`

**Headline:**
> Terbuka untuk peran Data Science / Analytics.

**Subteks:**
> Kalau ada peluang yang cocok dengan latar belakang NLP, AI evaluation, atau data analytics —
> silakan hubungi lewat email atau LinkedIn.

**Kontak:**

| Channel | Value |
|---|---|
| Email | minhajulkhairi@gmail.com |
| LinkedIn | linkedin.com/in/minhajulkhairi |
| GitHub | github.com/MinhajulKhairi |

**Baris bawah:** Jakarta, Indonesia · (+62) 822 9696 5023 — © tahun berjalan, Minhajul Yusri
Khairi. Built with Next.js & Tailwind.

---

## 8. Sumber data mentah (dari CV)

Ringkasan fakta yang jadi dasar semua copy di atas — supaya tidak ada klaim yang tidak bisa
ditelusuri balik ke CV:

- **Pendidikan:** Universitas Hasanuddin, Bachelor of Computer in Information Systems,
  Aug 2022 – May 2026, GPA 3.90/4.00. Publikasi di HealthSense: Journal of Public Health
  Perspective (2024).
- **Pengalaman:**
  - T-Maxx International (Beijing, remote) — AI Evaluation & Annotation, Contractor,
    Mei 2026 – sekarang.
  - PT. Tiran Indonesia (North Konawe) — IT Support Intern, Mar–Apr 2025.
- **Proyek:**
  - Aspect-Based Sentiment Analysis System — Lead Researcher, Okt 2025 – Jan 2026.
  - Al-Bayyan: Analisis Keselarasan Fatwa dan Ajaran Agama — Dataset Curator, Des 2024.
- **Skill teknis:** Python, SQL, Regex, EDA, Data Preprocessing, ABSA, Machine Learning, NLP,
  AI Evaluation & Annotation.
- **Tools:** Notion, Power BI, Google Workspace, Streamlit, GitHub, Google Colab, Feishu (Lark).
- **Sertifikasi:** Udemy — The Complete Machine Learning Course: From Zero to Expert.
- **Bahasa:** Inggris (Intermediate), Indonesia (Fluent).

---

## 9. Yang masih perlu kamu putuskan

1. **Al-Bayyan tidak muncul di CV sebagai "aktif diperbarui"** — kalau kamu punya update lebih
   baru soal proyek ini (link demo, repo, publikasi), section ini bisa diperkuat.
2. **T-Maxx = kontrak, bukan full-time.** Portofolio ini memposisikan status sebagai
   "open to full-time" secara eksplisit di hero dan footer supaya tidak ambigu buat recruiter.
   Kalau status ini berubah (misalnya sudah dapat tawaran full-time), update dua tempat itu
   duluan — jangan biarkan portofolio bilang hal yang sudah tidak benar.
3. **Belum ada dashboard/demo publik yang di-link langsung** dari section "Featured Work".
   Kalau dashboard ABSA sudah di-deploy (Streamlit Cloud / HF Spaces), tambahkan tombol "Lihat
   Demo ↗" di item 01 — ini akan jauh lebih kuat daripada visual dekoratif.
