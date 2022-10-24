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
                gioithieu: resolve(__dirname, "src/gioithieu.html"),
                loiichkhachhang: resolve(__dirname, "src/loiichkhachhang.html"),
                dichvu: resolve(__dirname, "src/dichvu.html"),
                agile: resolve(__dirname, "src/agile.html"),
                kpi: resolve(__dirname, "src/bsc-kpi-okr.html"),
                chatluongdichvu: resolve(__dirname, "src/chatluongdichvu.html"),
                chienluocnhansu: resolve(__dirname, "src/chienluocnhansu.html"),
                giamdocvaquanly: resolve(__dirname, "src/giamdocvaquanly.html"),
                khachhangbimat: resolve(__dirname, "src/khachhangbimat.html"),
                khaosathanhvikhachhang: resolve(__dirname, "src/khaosathanhvikhachhang.html"),
                khaosatsuhailong: resolve(__dirname, "src/khaosatsuhailong.html"),
                kynangmem: resolve(__dirname, "src/kynangmem.html"),
                luongvacochedaingo: resolve(__dirname, "src/luongvacochedaingo.html"),
                nghiepvuchuyenmon: resolve(__dirname, "src/nghiepvuchuyenmon.html"),
                quantrithaydoi: resolve(__dirname, "src/quantrithaydoi.html"),
                quantrivatrainghiemkhachhang: resolve(__dirname, "src/quantrivatrainghiemkhachhang.html"),
                scrumkanban: resolve(__dirname, "src/scrumkanban.html"),
                tuyendung: resolve(__dirname, "src/tuyendung.html"),
                hethong: resolve(__dirname, "src/tracnghiem.html"),
                result: resolve(__dirname, "src/result.html"),
                profile: resolve(__dirname, "src/profile.html"),
                dangnhap: resolve(__dirname, "src/dangnhap.html"),
                dangky: resolve(__dirname, "src/dangky.html")
            },
        },
    },
});
// Cài đặt dependenies: npm install
// Tạo file package.json: npm init -y
// Cài tự động: npm create vite@latest
// npm install package_name
// npm run dev