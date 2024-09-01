/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  base : "/vite-deploy/"
}