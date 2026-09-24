# ppw-2026-week2-12S24049
# ✿ Portofolio Web Modern & Responsive — Week 3 (Bootstrap 5 Integration)

Selamat datang di repositori proyek web portofolio profesional milik **Rimanda Santa Risa Panjaitan**. Repositori ini berisi hasil pembaruan (*refactoring*) dari proyek Week 2 dengan mengintegrasikan *framework* **Bootstrap 5.3**, **Bootstrap Icons**, serta *Custom CSS Variables* untuk menciptakan antarmuka web yang estetik, responsif, interaktif, dan *accessible*.

---

## 📌 Informasi Mahasiswa & Matakuliah

* **Nama**: Rimanda Santa Risa Panjaitan
* **NIM**: 12S24049
* **Program Studi**: S1 Sistem Informasi
* **Mata Kuliah**: Pemrograman & Pengujian Aplikasi Web (PPW)
* **Instansi**: Institut Teknologi Del
* **Tugas**: Praktikum Minggu 03 — CSS Framework (Bootstrap 5) & Advanced UI Interactions

---

## 🚀 Fitur Utama & Spesifikasi Teknis

1. **Responsive Bootstrap Navbar (`sticky-top`)**:
   * Dilengkapi dengan tombol *hamburger toggler* yang otomatis melipat di layar *mobile* (*breakpoint* `lg`).
   * Menampilkan fitur jam digital *real-time* dan indikator status *live*.

2. **Hero Section & Typing Effect**:
   * Tampilan perkenalan interaktif dengan animasi teks mengetik (*typewriter effect*) berbasis JavaScript native.
   * Disertai kartu statistik ringkas (*mini stats*) dan *profile badge*.

3. **Responsive Portfolio Grid System**:
   * Menggunakan **Bootstrap 12-Column Grid** (`row-cols-1 row-cols-md-2 row-cols-lg-3`) yang otomatis menyesuaikan jumlah kolom berdasarkan ukuran layar HP, tablet, maupun desktop.
   * Terdiri dari 4 kartu proyek (*Web Development, UI/UX, Data Project,* dan *Object-Oriented Programming*).

4. **Modal Dialogs (Pop-up Detail Proyek)**:
   * Mengintegrasikan komponen **Bootstrap Modal Dialog** yang dapat dipicu melalui tombol *"Detail Proyek ✦"*.
   * Menampilkan rincian deskripsi proyek dan daftar *tech stack* tanpa perlu berpindah halaman (*Single Page Showcase*).

5. **Aksesibilitas & Data Tabular Semantik**:
   * Menyajikan rekapitulasi riwayat akademik menggunakan tabel semantik HTML5 (`caption`, `thead`, `tbody`, `tfoot`, dan `scope`).
   * Menampilkan *progress bar* persentase keahlian dan *ordered list* target capaian.

6. **Formulir Konsultasi Interaktif**:
   * Dikelompokkan rapi menggunakan elemen `<fieldset>` dan `<legend>`.
   * Memuat minimal 6 tipe kontrol input (`text`, `email`, `tel`, `number`, `select`, `radio`, `checkbox`, `textarea`) lengkap dengan atribut validasi native HTML5 dan pasangan label eksplisit.

7. **Custom CSS Overrides & Variables**:
   * Menimpa (*override*) gaya *default* Bootstrap menggunakan variabel CSS `:root` pada `style.css` tanpa menggunakan `!important`.
   * Mengusung tema visual *Pink Cute Aesthetic* dengan gradien lembut, bayangan halus (*soft drop shadow*), dan sudut membulat (*border-radius*).

---

## 🛠️ Teknologi & Pustaka yang Digunakan

* **HTML5**: Semantik dokumen (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`).
* **CSS3**: Custom Flexbox, CSS Grid, Media Queries, dan CSS Variables.
* **Bootstrap 5.3.3**: Framework CSS untuk Navbar, Grid System, Cards, Badges, dan Modals.
* **Bootstrap Icons 1.11.3**: Pustaka ikon vektor.
* **JavaScript (ES6)**: Logika *live clock* jam/tanggal serta animasi *typing effect*.

---

## 📂 Struktur Berkas Repositori

```text
PPW-2026-Week2-12S24049/
├── index.html       # Berkas utama dokumen HTML5
├── style.css        # Berkas CSS eksternal (Custom Overrides & Variables)
├── profile.jpg      # Foto profil mahasiswa
└── README.md        # Dokumentasi resmi proyek
