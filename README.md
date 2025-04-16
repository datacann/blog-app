# 📝 Firebase Blog App

Bu proje, React ve Firebase kullanılarak geliştirilmiş basit bir blog uygulamasıdır.  
Kullanıcılar kayıt olabilir, giriş yapabilir ve giriş yaptıktan sonra blog yazıları ekleyebilir.

## 🚀 Özellikler

- ✅ Kullanıcı kayıt olma (Signup)
- ✅ Giriş yapma (Login)
- ✅ Firebase Authentication entegrasyonu
- ✅ Blog listeleme ve blog ekleme (sadece login sonrası)
- ✅ React Router ile sayfa geçişleri
- ✅ Tailwind CSS ile responsive ve modern arayüz

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|----------|----------|
| React | UI geliştirmek için |
| Firebase | Authentication ve kullanıcı yönetimi için |
| React Router DOM | Sayfa yönlendirmeleri için |
| Tailwind CSS | Kullanıcı arayüzü stilleri için |

## 📦 Kurulum

```bash
git clone https://github.com/kullanici-adi/blog-app.git
cd blog-app
npm install
npm run dev

📂 Klasör Yapısı
src/
│
├── components/
│   └── Navbar.js
│
├── context/
│   └── AuthContext.js
│
├── pages/
│   ├── Login.js
│   ├── Signup.js
│   ├── Home.js
│   └── AddBlog.js
│
├── routes/
│   └── PrivateRoute.js
│
├── App.js
