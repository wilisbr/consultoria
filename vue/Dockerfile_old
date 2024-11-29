# Use Nginx como base para servir os arquivos
FROM nginx:alpine

# Copie o build do Vue para o diretório padrão do Nginx
COPY dist/ /usr/share/nginx/html

# Copie a configuração personalizada do Nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80
EXPOSE 80

# Comando padrão para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
