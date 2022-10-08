// Bổ sung vite.config.js vào khi tạo một project mới để hoạt động chính xác
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    publicDir: "assets",
    build: {
        outDir: "../dist",
        publicDir: "assets",
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src/index.html"),
                about: resolve(__dirname, "src/about.html"),
                products: resolve(__dirname, "src/products.html"),
                gioithieu: resolve(__dirname, "src/gioithieu.html"),
                loiichkhachhang: resolve(__dirname, "src/loiichkhachhang.html"),
                dichvu: resolve(__dirname, "src/dichvu.html")
            },
        },
    },
});
// Cài đặt dependenies: npm install
// Tạo file package.json: npm init -y
// Cài tự động: npm create vite@latest
// npm install package_name
// npm run dev