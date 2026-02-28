import styles from './EmptyState.module.css'

const examples = [
  'Notion', 'electric cars', 'ChatGPT', 'meal kit services',
  'standing desks', 'Spotify', 'remote work tools'
]

export default function EmptyState({ onSearch }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>⬡</div>
      <h2 className={styles.title}>Enter a topic above to get started</h2>
      <p className={styles.sub}>
        Sift AI scours feedback across the internet — reviews, forums, social posts —
        and surfaces what people like, dislike, and wish existed.
      </p>
      <div className={styles.examples}>
        <span className={styles.examplesLabel}>Try one of these:</span>
        <div className={styles.pills}>
          {examples.map(ex => (
            <button key={ex} className={styles.pill} onClick={() => onSearch(ex)}>
              {ex}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
