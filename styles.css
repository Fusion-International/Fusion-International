@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

/* ============================ */
/*        BASE STYLES          */
/* ============================ */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  scroll-behavior: smooth;
  color: #eee;
  user-select: none;
}

body {
  background: #121212;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* ============================ */
/*        HEADER & NAV         */
/* ============================ */
header {
  background: #1f1f1f;
  padding: 30px 0;
  text-align: center;
  position: relative;
  box-shadow: 0 0 10px #ffffff33;
}

.glow {
  font-family: 'Montserrat', sans-serif;
  font-size: 3.5rem;
  color: #ffffff;
  text-shadow:
    0 0 5px #a0c8ffcc,
    0 0 10px #80aaffcc,
    0 0 20px #aacaffaa;
  font-weight: 700;
  text-align: center;
}

nav {
  margin-top: 15px;
  text-align: center;
}

nav a {
  color: #eee;
  margin: 0 15px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover,
nav a:focus {
  color: #80aaff;
  text-shadow: 0 0 8px #80aaff, 0 0 15px #a0c8ff;
}

/* ============================ */
/*       HIGHLIGHT BAR         */
/* ============================ */
.highlight-bar {
  background: #111;
  color: #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #444;
  animation: fadeInBar 1s ease-in-out;
  flex-wrap: wrap;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 999;
}

.highlight-bar span {
  margin: 0.3rem 0.8rem;
  white-space: nowrap;
}

@keyframes fadeInBar {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ============================ */
/*       HERO SECTION          */
/* ============================ */
.video-background {
  position: relative;
  height: 450px;
  margin-bottom: 40px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 25px #80aaffbb;
}

#bgVideo {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  z-index: -1;
  filter: brightness(0.4);
}

.overlay {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #80aaff;
  padding: 150px 20px 20px;
  text-shadow: 0 0 10px #80aaff, 0 0 20px #a0c8ff;
}

/* ============================ */
/*       SECTIONS STYLES       */
/* ============================ */
section {
  padding: 40px 20px;
  margin-bottom: 40px;
  background: #1f1f1f;
  border-radius: 10px;
  box-shadow: 0 0 15px #80aaffaa;
}

section h2 {
  color: #80aaff;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 0 0 6px #80aaff, 0 0 12px #a0c8ff;
}

/* ============================ */
/*       PRODUCT CARDS         */
/* ============================ */
.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
}

.product-card {
  background: #222;
  border-radius: 12px;
  width: 260px;
  padding: 20px;
  box-shadow: 0 0 15px #80aaffcc;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.product-card:hover,
.product-card:focus {
  box-shadow: 0 0 25px #80aaffcc;
  transform: translateY(-5px);
}

.product-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 0 15px #a0c8ffbb;
}

.product-card h3 {
  color: #80aaff;
  margin-bottom: 8px;
  text-shadow: 0 0 4px #80aaff, 0 0 8px #a0c8ff;
}

.product-card p {
  font-size: 0.9rem;
  color: #ccc;
  line-height: 1.4;
}

.product-card .btn {
  background: linear-gradient(45deg, #80aaff, #a0c8ff);
  color: #121212;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  box-shadow: 0 0 10px #a0c8ff99;
  margin-top: 10px;
}

.product-card .btn:hover {
  background: linear-gradient(45deg, #a0c8ff, #80aaff);
  color: #000;
}

/* ============================ */
/*           MODAL             */
/* ============================ */
#modal[hidden] {
  display: none;
}

#modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 18, 18, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: #1f1f1f;
  padding: 25px;
  border-radius: 14px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 0 30px #a0c8ffaa;
  color: #80aaff;
  position: relative;
  text-align: center;
}

.modal-content img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 0 20px #80aaffcc;
}

.modal-content h3 {
  margin-bottom: 12px;
  text-shadow: 0 0 6px #80aaff, 0 0 12px #a0c8ff;
}

.modal-content p {
  font-size: 1rem;
  color: #ddd;
  line-height: 1.5;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #a0c8ff;
  transition: color 0.3s ease;
}

.modal-close:hover,
.modal-close:focus {
  color: #80aaff;
}

/* CTA Section */
.cta-section {
  background: #0e0e0e;
  text-align: center;
  padding: 60px 20px;
  margin: 40px 0;
  border: 1px solid #444;
  box-shadow: 0 0 20px #1f1f1f;
  border-radius: 12px;
}

.cta-content h2 {
  font-size: 2rem;
  color: #00f2ff;
  margin-bottom: 10px;
}

.cta-content p {
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 20px;
}

.cta-content .btn {
  background: #00f2ff;
  color: #000;
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 0 10px #00f2ff;
}

.cta-content .btn:hover {
  background: #00bbcc;
  color: #fff;
}

/* ============================ */
/*        ORDER + FORMS        */
/* ============================ */
#order form input[type="text"],
#order form input[type="email"],
#order form textarea {
  color: #121212;
  background-color: #f5f5f5;
  border: 1.5px solid #80aaff;
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  user-select: text;
}

#order form textarea {
  resize: vertical;
  min-height: 100px;
}

#order form input[type="text"]:focus,
#order form input[type="email"]:focus,
#order form textarea:focus {
  outline: none;
  border-color: #25D366;
  box-shadow: 0 0 8px #25D366aa;
}

/* Newsletter */
#newsletter {
  background: #1f1f1f;
  padding: 35px 20px;
  border-radius: 12px;
  box-shadow: 0 0 20px #80aaffbb;
  max-width: 600px;
  margin: 0 auto 60px auto;
  text-align: center;
}

#newsletter h2 {
  color: #80aaff;
  margin-bottom: 20px;
  text-shadow: 0 0 6px #80aaff, 0 0 12px #a0c8ff;
}

#newsletter form {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

#newsletter input[type="email"] {
  color: #121212;
  background-color: #f5f5f5;
  border: 1.5px solid #80aaff;
  border-radius: 30px;
  padding: 12px 18px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  user-select: text;
  width: 250px;
  max-width: 90vw;
}

#newsletter input[type="email"]:focus {
  border-color: #80aaff;
  box-shadow: 0 0 8px #80aaffaa;
}

#newsletter .btn {
  background: linear-gradient(45deg, #80aaff, #a0c8ff);
  color: #121212;
  padding: 12px 20px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background 0.3s ease, color 0.3s ease;
  box-shadow: 0 0 10px #a0c8ff99;
}

#newsletter .btn:hover {
  background: linear-gradient(45deg, #a0c8ff, #80aaff);
  color: #000;
}
