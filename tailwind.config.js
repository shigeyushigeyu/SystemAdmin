// tailwind.config.mjs 
/** @type {import('tailwindcss').Config} */
export default {
  // ★ Tailwindがどのファイルからクラスを探すかを定義する content設定が最重要 ★
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', 
    // publicディレクトリ内のHTMLも含める場合は './public/**/*.html', を追加
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};