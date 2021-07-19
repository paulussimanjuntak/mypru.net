export const nasabahMenuData = [
  { label: "Cara Klaim", link: "claim", icon: "fal fa-book" },
  { label: "Testimoni Klaim", link: "testimoni", icon: "fal fa-hands-heart" },
  { label: "Cara Pembayaran", link: false, icon: "fal fa-file-invoice-dollar" },
  { label: "Informasi Perusahaan", link: "our-company", icon: "fal fa-building" },
  { label: "Konsultasi", link: "contact-us", icon: "fal fa-user-md-chat" },
]

export const productMenuData = [
  {
    label: "Proteksi Kesehatan",
    children: [
      { label: "PRUPrime Healthcare Plus", link: "pruprime-healthcare-plus" },
      { label: "PRUSolusi Sehat", link: "prusolusi-sehat" },
    ]
  },
  {
    label: "Proteksi Penghasilan",
    children: [
      { label: "PRUTotal Critical Protection", link: "prutotal-critical-protection" },
      { label: "PRUCritical Benefit 88", link: "prucritical-benefit-88" },
    ]
  },
  {
    label: "Persiapan Dana Waris",
    children: [
      { label: "PRUCinta", link: "prucinta" },
      { label: "PRUWarisan", link: "pruwarisan" },
      { label: "Paper Assets", link: "paperassets" },
    ]
  },
  {
    label: "Persiapan Dana Pendidikan Anak",
    children: [
      { label: "PRUCerah", link: "prucerah" },
    ]
  },
  {
    label: "Asuransi Karyawan",
    children: [
      { label: "PRUCorporate", link: "prucorporate" },
      { label: "PRUWorks", link: "pruwork" },
    ]
  }
]

export const mobileNavigation = [
  { label: "Home", link: "/" },
  { label: "Produk", link: "/products" },
  { label: "Peluang Karir", link: "/career" },
  { label: "Layanan Nasabah", link: "/customer" },
  { label: "Artikel", link: "/articles" },
]
