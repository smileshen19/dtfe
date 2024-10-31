# 使用官方 Nginx 作為基礎映像
FROM nginx:alpine

# 設定工作目錄
WORKDIR /usr/share/nginx/html

# 複製 dist/apps/demo/browser 目錄內容到 Nginx 的 HTML 目錄
COPY dist/apps/demo/browser .

# 複製自定義 Nginx 配置（可選）
# 如果你有自定義的 nginx.conf 文件，請取消下面的註釋並確保 nginx.conf 文件在同一目錄下
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 Nginx 的默認端口
EXPOSE 80

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]