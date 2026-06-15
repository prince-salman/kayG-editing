import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    nav_portfolio: "Portfolio",
    nav_order: "Order Now",
    hero_title: "Visuals that speak louder.",
    hero_subtitle: "Premium video editing services tailored to elevate your brand. Precision, rhythm, and clarity in every single frame.",
    hero_btn_explore: "Explore Work",
    hero_btn_start: "Start a Project",
    port_title: "Selected Works",
    port_subtitle: "A glimpse into our recent video editing projects. You can watch them directly below.",
    filter_all: "All",
    filter_commercial: "Commercial",
    filter_cinematic: "Cinematic",
    filter_entertainment: "Entertainment",
    contact_title: "Let's talk.",
    contact_desc: "Every project is unique. Reach out to discuss your vision, requirements, and to get a customized quote.",
    contact_wa_btn: "Connect via WhatsApp",
    footer_desc: "Professional video editing services. Precision, quality, and creativity in every frame.",
    footer_links: "Quick Links",
    wa_template: "Hello KayG_Editing, I'm interested in your video editing services for a [YouTube/TikTok/Wedding/etc] project. Could you provide an estimated price?"
  },
  id: {
    nav_portfolio: "Portofolio",
    nav_order: "Pesan Sekarang",
    hero_title: "Visual yang berbicara lebih lantang.",
    hero_subtitle: "Layanan edit video premium yang dirancang untuk mengangkat level brand Anda. Presisi, ritme, dan kejernihan di setiap frame.",
    hero_btn_explore: "Lihat Karya",
    hero_btn_start: "Mulai Proyek",
    port_title: "Karya Pilihan",
    port_subtitle: "Sekilas tentang proyek pengeditan video terbaru kami. Anda dapat menontonnya langsung di bawah ini.",
    filter_all: "Semua",
    filter_commercial: "Komersial",
    filter_cinematic: "Sinematik",
    filter_entertainment: "Hiburan",
    contact_title: "Mari berdiskusi.",
    contact_desc: "Setiap proyek itu unik. Hubungi kami untuk mendiskusikan visi, kebutuhan, dan dapatkan penawaran harga khusus.",
    contact_wa_btn: "Hubungi via WhatsApp",
    footer_desc: "Layanan edit video profesional. Presisi, kualitas, dan kreativitas di setiap frame.",
    footer_links: "Tautan Cepat",
    wa_template: "Halo KayG_Editing, saya tertarik menggunakan jasa edit video untuk keperluan [YouTube/Tiktok/Wedding/Dll]. Boleh info estimasi harganya?"
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('id'); // Default to Indonesian

  const t = (key) => translations[lang][key] || key;

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
