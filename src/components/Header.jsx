import styles from './Header.module.css'

export default function Header({ model, onModelChange }) {
  const models = ['llama3.2', 'llama3.1', 'mistral', 'deepseek-r1', 'gemma2']

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>S</div>
          <div>
            <h1 className={styles.name}>Sift <span>AI</span></h1>
            <p className={styles.tagline}>Feedback intelligence, instantly</p>
          </div>
        </div>

        <div className={styles.modelPicker}>
          <label className={styles.modelLabel}>Model</label>
          <select
            value={model}
            onChange={e => onModelChange(e.target.value)}
            className={styles.modelSelect}
          >
            {models.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>
    </header>
  )
}
