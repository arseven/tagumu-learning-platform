import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/ClassCard.module.css'

export default function ClassCard({ classData }) {
  const [imageError, setImageError] = useState(false)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star">★</span>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star">☆</span>
      )
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star-empty">☆</span>
      )
    }

    return stars
  }

  const getLevelBadge = (level) => {
    const badges = {
      beginner: { text: 'Pemula', class: 'badge-green' },
      intermediate: { text: 'Menengah', class: 'badge-yellow' },
      advanced: { text: 'Mahir', class: 'badge-red' }
    }
    return badges[level] || badges.beginner
  }

  const levelBadge = getLevelBadge(classData.level)

  return (
    <div className={styles.classCard}>
      <Link href={`/class/${classData.id}`}>
        <div className={styles.imageContainer}>
          {!imageError && classData.thumbnail_url ? (
            <Image
              src={classData.thumbnail_url}
              alt={classData.title}
              fill
              className={styles.image}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>📚</span>
              <p>Gambar Kelas</p>
            </div>
          )}
          
          {classData.is_free && (
            <div className={styles.freeBadge}>
              GRATIS
            </div>
          )}
          
          <div className={styles.levelBadge}>
            <span className={`badge ${levelBadge.class}`}>
              {levelBadge.text}
            </span>
          </div>
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.header}>
          <Link href={`/class/${classData.id}`}>
            <h3 className={styles.title}>{classData.title}</h3>
          </Link>
          
          {classData.category && (
            <p className={styles.category}>{classData.category.name}</p>
          )}
        </div>

        <p className={styles.description}>
          {classData.short_description || classData.description?.substring(0, 100) + '...'}
        </p>

        <div className={styles.instructor}>
          <div className={styles.instructorInfo}>
            {classData.instructor_avatar && !imageError ? (
              <Image
                src={classData.instructor_avatar}
                alt={classData.instructor_name}
                width={32}
                height={32}
                className={styles.instructorAvatar}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className={styles.instructorAvatarPlaceholder}>
                👨‍🏫
              </div>
            )}
            <span className={styles.instructorName}>
              {classData.instructor_name || 'Instruktur'}
            </span>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.rating}>
            <div className="rating">
              {renderStars(classData.rating || 0)}
            </div>
            <span className={styles.ratingText}>
              {classData.rating?.toFixed(1) || '0.0'} ({classData.total_reviews || 0})
            </span>
          </div>
          
          <div className={styles.duration}>
            <span>⏱️ {Math.floor((classData.duration_minutes || 0) / 60)}j {(classData.duration_minutes || 0) % 60}m</span>
          </div>
          
          <div className={styles.videoCount}>
            <span>🎥 {classData.total_videos || 0} video</span>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.pricing}>
            {classData.is_free ? (
              <span className={styles.freePrice}>GRATIS</span>
            ) : (
              <>
                <span className="price">
                  {formatPrice(classData.price)}
                </span>
                {classData.original_price && classData.original_price > classData.price && (
                  <span className="price-original">
                    {formatPrice(classData.original_price)}
                  </span>
                )}
              </>
            )}
          </div>
          
          <Link href={`/class/${classData.id}`} className="btn btn-primary">
            {classData.is_free ? 'Mulai Belajar' : 'Lihat Detail'}
          </Link>
        </div>
      </div>
    </div>
  )
}
