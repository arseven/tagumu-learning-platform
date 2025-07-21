import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Tentang Tagumu</h3>
            <p className={styles.description}>
              Tagumu adalah platform pembelajaran online yang menyediakan kelas-kelas berkualitas 
              dalam bidang seni, kerajinan, dan kreativitas. Kami berkomitmen untuk membantu 
              setiap individu mengembangkan bakat dan keterampilan mereka melalui pembelajaran 
              yang mudah diakses dan menyenangkan.
            </p>
          </div>

          {/* Founder Info */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Founder</h3>
            <div className={styles.founderInfo}>
              <h4 className={styles.founderName}>Sari Dewi Kusuma</h4>
              <p className={styles.founderTitle}>CEO & Founder Tagumu</p>
              <p className={styles.founderDescription}>
                Seorang seniman dan pendidik dengan pengalaman lebih dari 10 tahun dalam 
                bidang seni dan kerajinan. Berdedikasi untuk membagikan pengetahuan dan 
                menginspirasi generasi muda Indonesia.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Kontak Kami</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <h4>Alamat</h4>
                <p>
                  Jl. Kerajinan Indah No. 123<br />
                  Bandung, Jawa Barat 40123<br />
                  Indonesia
                </p>
              </div>
              
              <div className={styles.contactItem}>
                <h4>WhatsApp</h4>
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  +62 812-3456-7890
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <h4>Instagram</h4>
                <a 
                  href="https://instagram.com/tagumu.official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  @tagumu.official
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <h4>Email</h4>
                <a 
                  href="mailto:info@tagumu.com"
                  className={styles.contactLink}
                >
                  info@tagumu.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Menu Cepat</h3>
            <div className={styles.quickLinks}>
              <Link href="/classList" className={styles.quickLink}>
                Semua Kelas
              </Link>
              <Link href="/classList?category=gambar" className={styles.quickLink}>
                Kelas Gambar
              </Link>
              <Link href="/classList?category=merangkai-bunga" className={styles.quickLink}>
                Merangkai Bunga
              </Link>
              <Link href="/classList?category=seni" className={styles.quickLink}>
                Seni Umum
              </Link>
              <Link href="/classList?category=kerajinan" className={styles.quickLink}>
                Kerajinan
              </Link>
              <Link href="/classList?category=fotografi" className={styles.quickLink}>
                Fotografi
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © 2024 Tagumu. Semua hak cipta dilindungi.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className={styles.bottomLink}>
                Syarat & Ketentuan
              </Link>
              <Link href="/help" className={styles.bottomLink}>
                Bantuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
