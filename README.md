# Grove Next.js Conversion

Konversi dari `grove_v8 (2).html` ke stack:
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Jalankan

```bash
npm install
npm run dev
```

## Struktur modular

- `app/` entry point + layout
- `components/layout/` navigasi global
- `components/home/` section landing page
- `components/research/` dashboard riset
- `components/ui/` reusable presentational components
- `lib/types.ts` kontrak tipe data
- `lib/data.ts` source data terpusat

## Catatan

Ini adalah pondasi modular untuk scale-up. Konten inti dari HTML lama sudah dipetakan ke arsitektur komponen. Fitur lanjutan seperti chart interaktif, detail modal emiten, dan seluruh engine script 1:1 bisa dilanjutkan bertahap per modul.
