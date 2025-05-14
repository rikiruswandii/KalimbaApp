# Kalimba App - React Native

Ini adalah aplikasi mobile Kalimba yang dibuat menggunakan React Native, TypeScript, dan struktur Atomic Design.

## Struktur Proyek

- `/src`: Berisi semua kode sumber aplikasi.
  - `/assets`: Untuk menyimpan aset statis seperti gambar dan suara.
    - `/sounds`: (Direkomendasikan) Tempatkan file suara Kalimba Anda di sini (misalnya, `c4.mp3`, `cs4.mp3`, dll.).
  - `/components`: Berisi komponen UI yang dibagi berdasarkan Atomic Design.
    - `/atoms`: Komponen terkecil dan paling dasar.
    - `/molecules`: Kombinasi dari beberapa atom.
    - `/organisms`: Kombinasi dari molekul dan/atau atom, membentuk bagian UI yang lebih kompleks.
    - `/templates`: Struktur tata letak halaman.
  - `/config`: Konfigurasi aplikasi.
  - `/hooks`: Custom React Hooks.
  - `/navigation`: Konfigurasi navigasi (jika menggunakan library navigasi).
  - `/screens`: Komponen halaman/layar aplikasi.
  - `/services`: Layanan aplikasi, seperti `sound.service.ts`.
  - `/store`: Untuk manajemen state global (misalnya, Redux, Zustand).
  - `/types`: Definisi tipe TypeScript global.
  - `/utils`: Fungsi utilitas.
- `App.tsx`: Komponen root aplikasi.
- `index.js`: Titik masuk aplikasi.
- `atomic_design_kalimba.md`: Dokumen penjelasan struktur atomic design yang digunakan.

## Prasyarat

Pastikan Anda telah menginstal Node.js, Watchman (untuk macOS), JDK, dan Android Studio (untuk pengembangan Android) atau Xcode (untuk pengembangan iOS) sesuai dengan [Panduan Setup Lingkungan React Native](https://reactnative.dev/docs/environment-setup).

## Menjalankan Aplikasi

1.  **Ekstrak File**: Ekstrak file `KalimbaApp_SourceCode.zip` ke direktori pilihan Anda.
2.  **Masuk ke Direktori Proyek**:
    ```bash
    cd KalimbaApp
    ```
3.  **Instal Dependencies**:
    ```bash
    npm install
    ```
    atau jika Anda menggunakan Yarn:
    ```bash
    yarn install
    ```
4.  **Menambahkan File Suara (PENTING)**:
    - Aplikasi ini menggunakan `react-native-sound` untuk memutar audio.
    - Anda perlu menyediakan file suara Kalimba dalam format `.mp3` (atau format lain yang didukung).
    - Nama file harus sesuai dengan not musik, misalnya `c4.mp3`, `cs4.mp3` (untuk C#4), `d4.mp3`, `df4.mp3` (untuk Db4/D♭4), dst. Konvensi penamaan yang digunakan dalam kode adalah `note.toLowerCase().replace("#", "s").replace("b", "f") + ".mp3"`.
    - **Untuk Android**: Tempatkan file suara Anda di direktori `KalimbaApp/android/app/src/main/res/raw/`.
    - **Untuk iOS**: Buka proyek di Xcode (`KalimbaApp/ios/KalimbaApp.xcworkspace`), lalu tambahkan file suara ke target proyek Anda (biasanya dengan menyeret file ke Project Navigator dan memastikan mereka ditambahkan ke target yang benar).

5.  **Menjalankan Metro Bundler**:
    Buka terminal baru di direktori proyek dan jalankan:
    ```bash
    npx react-native start
    ```

6.  **Menjalankan di Perangkat/Emulator**:
    - **Untuk Android** (pastikan emulator berjalan atau perangkat terhubung):
      ```bash
      npx react-native run-android
      ```
    - **Untuk iOS** (pastikan emulator berjalan atau perangkat terhubung):
      ```bash
      npx react-native run-ios
      ```
      Jika ada masalah dengan linking library `react-native-sound` di iOS, Anda mungkin perlu melakukan `cd ios && pod install && cd ..`.

## Catatan Tambahan

- **Struktur Atomic Design**: Detail mengenai komponen dan bagaimana mereka disusun dapat dilihat pada file `atomic_design_kalimba.md`.
- **Layanan Suara**: Logika pemutaran suara terdapat di `src/services/sound.service.ts`. Anda dapat memodifikasinya jika diperlukan.
- **Kustomisasi Nada**: Daftar nada dan tinggi bilah Kalimba didefinisikan dalam `src/components/organisms/KalimbaBoard.tsx` pada konstanta `DEFAULT_TUNING_17_C_MAJOR`. Anda dapat mengubah ini untuk tuning yang berbeda.

Terima kasih telah menggunakan aplikasi ini!
# KalimbaApp
# KalimbaApp
