# ppw-2026-week4-12S24049
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


# PPW Week 4 —  Portfolio

Website tugas mandiri Praktikum Minggu 02 untuk mata kuliah Pemrograman dan Pengujian Aplikasi Web.

## Tema

Praktikum Minggu 04 Mata Kuliah Pemrograman dan Pengujian Web (12S3101) yang diampu oleh Bapak Chandro Pardede, S.Kom., M.Sc. di Institut Teknologi Del berfokus pada transformasi arsitektural dari portofolio statis monolitik milik Rimanda Santa Risa Panjaitan (NIM 12S24049) menjadi aplikasi web modern berarsitektur Decoupled Multi-Tier dan Dynamic Client-Side Rendering (CSR). Proyek ini memisahkan tanggung jawab sistem (Separation of Concerns) secara tegas, di mana berkas index.html hanya berfungsi sebagai kerangka tampilan visual (Presentation Tier), logika pengontrol dikelola oleh modul JavaScript ES6+ (app.js dan api-service.js), serta seluruh data portofolio, katalog layanan, dan profil akademik disimpan terpisah pada berkas data JSON (projects.json, services.json, dan profile.json) di dalam direktori /data/. Pemodelan arsitektur terdistribusi ini disajikan secara komprehensif melalui C4 Container Model Diagram berbasis Mermaid.js.   Dalam implementasinya, berkas index.html kini telah bersih dari elemen kartu proyek yang ditulis secara manual (hardcoded) dan digantikan oleh mekanisme pemuatan data asinkron berbasis async/await Fetch API. Pengelolaan antarmuka pengguna menangani empat UI States secara responsif, yaitu Loading State berbentuk animasi spinner, Success Render State, Empty State, serta Error Alert Fallback. Rincian proyek juga kini disajikan melalui satu elemen Universal Dynamic Modal tunggal yang diinjeksi secara dinamis berdasarkan ID proyek tanpa duplikasi tag HTML, disertai penerapan sanitasi teks masukan (escapeHTML) guna mencegah kerentanan keamanan DOM-based Cross-Site Scripting (XSS). 

Selain itu, formulir pemesanan layanan telah direfaktor menjadi mekanisme pengiriman REST asinkron tanpa memicu pemuatan ulang halaman (full page reload), dengan data pesanan yang tersimpan secara persisten di localStorage browser pengguna.   Sebagai bagian dari evaluasi kinerja web berdasarkan standar HTTP RFC 9111, pengujian Network Profiling telah dilakukan melalui tab Network Browser DevTools. Pengujian ini membandingkan kinerja pemuatan pertama (Cold Load) dengan pemuatan berulang (Warm Load), yang membuktikan efisiensi penggunaan HTTP Caching (status 304 Not Modified / disk cache) serta penghematan bandwidth hingga lebih dari 95%. Pemuatan aset yang disajikan melalui CDN Edge GitHub Pages ini juga menghasilkan Time to First Byte (TTFB) di bawah 15 ms dan First Contentful Paint (FCP) sekitar 80 ms pada kondisi warm load, sehingga memberikan pengalaman pengguna (user experience) yang sangat mulus, responsif, dan reaktif. Seluruh hasil pengerjaan proyek beserta dokumentasi lengkap ini dipublikasikan secara live melalui branch week4-architecture pada platform GitHub Pages
