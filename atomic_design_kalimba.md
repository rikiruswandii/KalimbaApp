# Desain Struktur Atomic untuk Aplikasi Kalimba

Dokumen ini menjelaskan struktur atomik yang akan digunakan dalam pengembangan aplikasi Kalimba App menggunakan React Native dan TypeScript.

## 1. Atoms (Atom)

Atom adalah blok bangunan dasar dari antarmuka pengguna. Mereka adalah komponen terkecil dan tidak dapat dipecah lebih lanjut tanpa kehilangan fungsinya.

- **`Tine.tsx`**: Merepresentasikan satu bilah (tine) Kalimba. Komponen ini akan menangani tampilan visual bilah (misalnya, saat ditekan atau dilepas) dan mungkin juga menjadi pemicu suara individual.
    - Props: `isPressed` (boolean), `onPress` (function), `note` (string)
    - Style: Bentuk bilah, warna, bayangan saat ditekan.

- **`KeyLabel.tsx`**: Label teks untuk setiap bilah Kalimba, menunjukkan not musik (misalnya, C, D, E, F#, dll.).
    - Props: `noteName` (string)
    - Style: Font, ukuran teks, warna teks.

- **`Button.tsx`**: Komponen tombol generik yang dapat digunakan untuk berbagai aksi dalam aplikasi (misalnya, tombol pengaturan, tombol rekam, dll.).
    - Props: `onPress` (function), `title` (string, optional), `icon` (ReactNode, optional), `variant` ('primary', 'secondary', 'transparent', optional)
    - Style: Latar belakang, border, padding, teks tombol.

- **`Icon.tsx`**: Komponen untuk menampilkan ikon SVG atau font ikon yang digunakan dalam tombol atau elemen UI lainnya.
    - Props: `name` (string, merujuk ke nama ikon), `size` (number), `color` (string)

- **`Text.tsx`**: Komponen teks generik untuk menampilkan berbagai label atau pesan dalam aplikasi dengan gaya yang konsisten.
    - Props: `children` (ReactNode), `fontSize` (number), `fontWeight` ('normal', 'bold'), `color` (string), `textAlign` ('left', 'center', 'right')

- **`SoundWave.tsx`** (Opsional): Representasi visual dari gelombang suara sebagai umpan balik visual saat nada dimainkan.
    - Props: `isPlaying` (boolean), `amplitude` (number)

## 2. Molecules (Molekul)

Molekul adalah kombinasi dari beberapa atom yang membentuk komponen UI yang relatif sederhana dan fungsional.

- **`KalimbaKey.tsx`**: Menggabungkan atom `Tine` dan `KeyLabel`. Ini adalah unit interaktif yang dapat diklik/disentuh pengguna untuk memainkan nada.
    - Komposisi: `Tine`, `KeyLabel`
    - Props: `note` (string), `onPlayNote` (function)

- **`ControlBarButton.tsx`**: Menggabungkan atom `Icon` dan `Button` (atau hanya `Button` dengan teks) untuk aksi spesifik pada panel kontrol, seperti putar, jeda, atau rekam.
    - Komposisi: `Button`, `Icon` (opsional), `Text` (untuk label jika tidak ada ikon)
    - Props: `actionType` ('play', 'record', 'settings'), `onPress` (function)

- **`InfoDisplay.tsx`**: Menggabungkan beberapa atom `Text` untuk menampilkan informasi seperti oktaf saat ini, lagu yang dipilih, atau status rekaman.
    - Komposisi: `Text` (untuk judul), `Text` (untuk nilai)
    - Props: `label` (string), `value` (string)

## 3. Organisms (Organisme)

Organisme adalah bagian UI yang lebih kompleks, terdiri dari kombinasi molekul dan/atau atom, membentuk bagian antarmuka yang lebih berbeda.

- **`KalimbaBoard.tsx`**: Antarmuka utama instrumen Kalimba. Terdiri dari beberapa molekul `KalimbaKey` yang disusun secara benar sesuai dengan tata letak Kalimba (misalnya, 17 tuts).
    - Komposisi: Array dari `KalimbaKey`
    - State: Mungkin mengelola nada mana yang sedang aktif.
    - Props: `tuning` (object/array), `onNotePlayed` (function)

- **`ControlsPanel.tsx`**: Panel yang berisi berbagai molekul `ControlBarButton` untuk fungsi-fungsi aplikasi seperti merekam, memutar ulang rekaman, mengakses pengaturan, dll.
    - Komposisi: Array dari `ControlBarButton`
    - Props: `onRecord` (function), `onPlay` (function), `onOpenSettings` (function)

- **`TuningPanel.tsx`** (Opsional): Organisme yang memungkinkan pengguna untuk mengubah tuning (setelan nada) Kalimba jika fitur ini diimplementasikan.
    - Komposisi: `InfoDisplay` (untuk nada saat ini), `Button` (untuk mengubah nada)

## 4. Templates (Templat)

Templat adalah struktur tingkat halaman yang menyusun organisme dan molekul menjadi tata letak. Templat fokus pada struktur konten daripada konten itu sendiri.

- **`MainAppLayout.tsx`**: Mendefinisikan tata letak keseluruhan aplikasi. Ini akan menempatkan `KalimbaBoard` di area utama dan `ControlsPanel` di area yang sesuai (misalnya, di bagian bawah atau atas layar).
    - Placeholder untuk: `KalimbaBoardSection`, `ControlsPanelSection`
    - Struktur: Bagaimana organisme-organisme tersebut disusun di layar (misalnya, menggunakan Flexbox atau Grid).

## 5. Pages (Halaman)

Halaman adalah instance konkret dari templat, yang diisi dengan konten aktual, mewakili layar spesifik dalam aplikasi.

- **`KalimbaScreen.tsx`**: Layar utama aplikasi tempat pengguna berinteraksi dengan Kalimba. Menggunakan `MainAppLayout` untuk menampilkan `KalimbaBoard` dan `ControlsPanel`.
    - Menggunakan: `MainAppLayout`
    - Menginstansiasi: `KalimbaBoard`, `ControlsPanel` dengan data dan logika yang relevan.

- **`SettingsScreen.tsx`** (Opsional): Layar untuk pengaturan aplikasi. Mungkin menggunakan templat tata letak yang berbeda atau `MainAppLayout` dengan organisme yang berbeda (misalnya, `SettingsFormOrganism`).

Struktur folder yang sesuai akan dibuat di dalam `KalimbaApp/src/components/` (untuk atoms, molecules, organisms) dan `KalimbaApp/src/screens/` (untuk pages), serta `KalimbaApp/src/templates/` (untuk templates jika dipisahkan).
