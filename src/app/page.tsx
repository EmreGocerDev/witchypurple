// app/page.tsx

"use client"; // Bu satır önemli! Animasyon kütüphanesi client-side çalışır.

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // slim paketini yüklüyoruz

// Font Awesome ikonları için
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  const [init, setInit] = useState(false);

  // tsParticles motorunu sadece bir kez başlatıyoruz
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Yıldız sistemi temalı animasyon ayarları
  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000010", // Derin uzay mavisi/siyahı
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // Fare ile yıldızları yakalama hissi
          },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // Yıldızlar beyaz
        },
        // Takımyıldızı çizgileri
        links: {
          color: "#ffffff",
          distance: 150, // Çizgilerin oluşacağı maksimum mesafe
          enable: true,
          opacity: 0.2, // Çizgiler daha soluk olsun
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true, // Yıldızlar rastgele yönlere gitsin
          speed: 0.2, // Çok yavaş hareket etsinler
          straight: false,
        },
        // Yıldız sayısı
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 150, // Ekranda daha fazla yıldız olsun
        },
        // Yıldızların opaklığı (parlaklığı)
        opacity: {
          value: { min: 0.3, max: 1 }, // Bazıları soluk, bazıları parlak
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3,
          },
        },
        // Yıldızların şekli ve boyutu
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 2.5 }, // Farklı boyutlarda yıldızlar
        },
        // Işıltı efekti (Twinkle)
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // Eğer animasyon motoru hazır değilse null döndür (veya bir yüklenme ekranı)
  if (!init) {
    return null;
  }

  return (
    <>
      <Particles
        id="tsparticles"
        options={particlesOptions}
      />
      <main>
        <div className="card">
          <div className="profile">
            {/* KENDİ PROFİL FOTOĞRAFINIZIN LİNKİNİ BURAYA YAPIŞTIRIN */}
            <img 
  src="https://files.kick.com/images/user/43248003/profile_image/conversion/8f54205b-bef1-4285-b2c2-6a8a38ab1739-fullsize.webp" 
  alt="witchypurple Profil Fotoğrafı" 
  className="profile-pic"
/>
            <h1 className="profile-name">witchypurple</h1>
            <p className="profile-title">Beni heryerden takip edebilirsiniz! </p>
          </div>
          <div className="links">
            {/* KENDİ LİNKLERİNİZİ BURAYA YAPIŞTIRIN */}
            <a href="#" target="https://kick.com/witchypurple" className="link kick">
              <i className="fa-brands fa-kick"></i> Kick Canlı Yayın
            </a>
            <a href="https://www.youtube.com/@witchypurple" target="_blank" className="link youtube">
              <i className="fab fa-youtube"></i> YouTube
            </a>
            <a href="https://www.instagram.com/avenusdea/" target="_blank" className="link instagram">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" target="_blank" className="link discord">
              <i className="fab fa-discord"></i> Discord Sunucusu
            </a>
            <a href="https://donate.bynogame.com/witchypurple" target="_blank" className="link bynogame">
              <i className="fas fa-gamepad"></i> ByNoGame
            </a>
          </div>
        </div>
      </main>
    </>
  );
}