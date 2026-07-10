import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // สำคัญมาก: ต้องใส่ชื่อ repository ของคุณที่นี่ (ครอบด้วย slash)
  base: '/elis_one/', 
})
