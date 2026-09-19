# ppw-2026-week2-12S24049
Setiap mahasiswa diwajibkan membangun sebuah halaman web portofolio profil profesional tunggal (Single Page Showcase Webpage) yang menyajikan identitas akademik, tabel rekapitulasi capaian/proyek, galeri keahlian terstruktur, serta formulir pemesanan layanan konsultasi/kontak resmi yang sepenuhnya estetik, rapi, responsif, dan accessible.

1. Struktur Semantik HTML5 (Bobot 20%): Wajib menggunakan tag (logo & navigasi), <nav> ,
<main> , minimal 3 buah <section> (Tentang Saya, Portofolio Karya, Formulir Layanan), <aside> , dan
<footer> . Hindari pembungkus <div> tanpa makna.
2. Penyajian Data Tabular & Lists (Bobot 15%): Wajib memuat satu tabel data semantik lengkap ( ,
, , , , dan atribut scope="col/row" ) yang menyajikan daftar riwayat
matakuliah/proyek, serta minimal dua jenis HTML Lists ( <ul> dan <ol> ).
3. Komponen Formulir Interaktif & Accessible (Bobot 20%): Formulir dikelompokkan dengan minimal 2
blok dan . Memuat minimal 6 tipe kontrol input (text, email, tel, number, radio,
checkbox, select, textarea). Seluruh input wajib memiliki pasangan eksplisit dan atribut
validasi native ( ).
4. Estetika & Tata Letak CSS Modern (Bobot 25%): Wajib menggunakan CSS eksternal ( ) dengan
Universal Box Sizing Reset. Menerapkan palet warna terencana (aturan 60-30-10), tipografi modern, sudut
membulat ( ), bayangan lembut( box-shadow ), tata letak berbasis CSS Flexbox atau CSS Grid,
serta responsif di berbagai resolusi layar via Media Queries ( @media (max-width: 768px) ).
5. Pengelolaan Git & GitHub Pages Deployment (Bobot 20%): Kode dikelola menggunakan repositori
publik GitHub bernama
dipublikasikan secara live di GitHub Pages.


# PPW Week 2 — Pink Cute Portfolio

Website tugas mandiri Praktikum Minggu 02 untuk mata kuliah Pemrograman dan Pengujian Aplikasi Web.

## Tema

**Rimanda Santa Risa Panjaitan Portfolio**: soft, aesthetic, modern, dan tetap rapi serta accessible.

## Struktur

```text
ppw-2026-week2-[NIM]/
├── index.html
├── style.css
├── README.md
└── profile.jpg
```

`profile.jpg` adalah foto pribadi. Simpan foto kamu dengan nama tersebut di folder yang sama dengan `index.html`.

## Fitur Tambahan

- Live clock yang berubah setiap detik
- Live date pada footer
- Typing effect dengan beberapa role
- Background dekorasi hearts/sparkles bergerak
- Status Available dengan indikator animasi
- Skill progress bars
- Project highlight cards
- Smooth scrolling
- Responsive mobile layout
- Focus state untuk keyboard accessibility
- Fallback inisial jika foto belum ada

## Requirement Praktikum

### Semantic HTML5

Menggunakan `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, dan `<footer>`. Terdapat tiga section utama: Tentang Saya, Portofolio Karya, dan Formulir Layanan.

### Table & Lists

Tabel menggunakan `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `scope="col"`, dan `scope="row"`. Tersedia `<ul>` dan `<ol>`.

### Form Accessible

Form menggunakan dua `<fieldset>` dan `<legend>` serta input text, email, tel, number, radio, checkbox, select, textarea. Validasi menggunakan `required`, `min`, `max`, `pattern`, dan `aria-describedby`.

### CSS

External CSS dengan universal box sizing reset, palet pink, typography modern, `border-radius`, `box-shadow`, Flexbox, CSS Grid, hover transition, focus state, dan `@media (max-width: 768px)`.

## Menambahkan Foto

1. Pilih foto kamu.
2. Ubah nama menjadi `profile.jpg`.
3. Taruh dalam folder project yang sama dengan `index.html`.
4. Refresh Live Server.

## Menjalankan

Buka folder di VS Code, lalu klik kanan `index.html` → **Open with Live Server**.

## GitHub

Repository wajib public dan gunakan nama:

```text
ppw-2026-week2-[NIM]
```

Perintah:

```bash
git init
git add .
git commit -m "feat: complete week 2 pink portfolio"
git branch -M main
git remote add origin https://github.com/Rimanda Santa Risa Panjaitan/ppw-2026-week2-12S24049.git
git push -u origin main
```

## GitHub Pages

Masuk **Settings → Pages → Branch: main → Save**.

Live URL:

```text
https://RimandaPanjaitan.github.io/ppw-2026-week2-12S24049/
```

## Sebelum Submit

Ganti `[Nama Lengkap]`, `[NIM]`, `[IN]`, data proyek, dan masukkan `profile.jpg`.

## Author

Rimanda Santa Risa Panjaitan — Sistem Informasi, Institut Teknologi Del
