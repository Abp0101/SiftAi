import { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch, loading, history }) {
  const [value, setValue] = useState('')

  const submit = (topic) => {
    const t = topic || value
    if (!t.trim() || loading) return
    setValue(t)
    onSearch(t.trim())
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.headline}>What do you want to sift through?</p>
      <p className={styles.sub}>Enter any product, app, service, or topic to see what people really think.</p>

      <div className={styles.row}>
        <input
          className={styles.input}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && submit()}
          placeholder='e.g. "Notion", "electric cars", "meal kit services"'
          disabled={loading}
        />
        <button
          className={styles.btn}
          onClick={() => submit()}
          disabled={loading || !value.trim()}
        >
          {loading ? 'Sifting…' : 'Sift →'}
        </button>
      </div>

      {history.length > 0 && (
        <div className={styles.history}>
          <span className={styles.historyLabel}>Recent:</span>
          {history.map((h, i) => (
            <button
              key={i}
              className={styles.pill}
              onClick={() => submit(h.topic)}
            >
              {h.topic}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
