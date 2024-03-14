/*
 * @Author: zwp
 * @Date: 2024-03-14 13:51:07
 * @LastEditors: zwp && 2234024575@qq.com
 * @LastEditTime: 2024-03-14 13:54:36
 * @FilePath: \demo\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${2234023575@qq.com}, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      // 入口文件
      entry: 'electron/index.ts'
    })
  ]
})
