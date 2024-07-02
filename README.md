# Movie Management Web App

Projek ini adalah aplikasi web sederhana yang memungkinkan pengguna untuk menelusuri dan mengelola daftar film. Aplikasi ini dibangun menggunakan React dan menggunakan Tailwind CSS untuk styling.

## Deskripsi Projek

Aplikasi ini bertujuan untuk memberikan pengguna kemudahan dalam melihat, menambah, mengedit, dan menghapus data film. Pengguna dapat mengeksplorasi daftar film yang ada serta melihat detail masing-masing film.

## Fitur Utama

- **Halaman Beranda**
  - Tampilan selamat datang dengan tombol untuk mengakses daftar film.
  
- **Halaman Film**
  - Menampilkan daftar film yang tersedia.
  - Fitur penambahan, pengeditan, dan penghapusan film.
  - Detail film termasuk judul, genre, tahun rilis, durasi, sinopsis, dan gambar poster.

- **Halaman Kontak**
  - Informasi kontak mengenai pengembang aplikasi.

## Komponen Utama

### Header Component

Komponen Header menampilkan navigasi utama aplikasi.

```jsx
import React from 'react';

const Header = () => {
  return (
    <header className='w-full flex justify-between p-4 bg-gray-800 text-white'>
      <h1 className='text-xl font-bold'>Movie App</h1>
      <nav className='flex space-x-4'>
        <div>
          <a href="/" className='text-lg hover:text-gray-300 transition duration-300'>Home</a>
        </div>
        <div>
          <a href="/film" className='text-lg hover:text-gray-300 transition duration-300'>Film</a>
        </div>
        <div>
          <a href="/contact" className='text-lg hover:text-gray-300 transition duration-300'>Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
