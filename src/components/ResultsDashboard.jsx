import styles from './ResultsDashboard.module.css'

const freqColor = (f) =>
  f === 'High' ? '#ef4444' : f === 'Medium' ? '#f59e0b' : '#10b981'

function Card({ icon, label, color, items, type }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader} style={{ borderLeftColor: color }}>
        <span className={styles.cardIcon}>{icon}</span>
        <h3 className={styles.cardTitle}>{label}</h3>
      </div>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.itemTop}>
              <span className={styles.itemTitle}>{item.title}</span>
              {item.frequency && (
                <span
                  className={styles.badge}
                  style={{ color: freqColor(item.frequency), background: freqColor(item.frequency) + '18' }}
                >
                  {item.frequency}
                </span>
              )}
              {item.opportunity_score && (
                <span className={styles.badge} style={{ color: '#6366f1', background: '#eef0fe' }}>
                  {item.opportunity_score}/10
                </span>
              )}
            </div>
            <p className={styles.itemDetail}>{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ResultsDashboard({ results }) {
  const sentimentLabel =
    results.sentiment_score > 4 ? 'Positive' :
    results.sentiment_score < -4 ? 'Negative' : 'Mixed'

  const sentimentColor =
    results.sentiment_score > 4 ? '#10b981' :
    results.sentiment_score < -4 ? '#ef4444' : '#f59e0b'

  return (
    <div className={styles.wrapper}>

      {/* Summary bar */}
      <div className={styles.summary}>
        <div className={styles.summaryLeft}>
          <div className={styles.topicLabel}>Results for</div>
          <div className={styles.topicName}>"{results.topic}"</div>
          <p className={styles.summaryText}>{results.summary}</p>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statVal} style={{ color: sentimentColor }}>
              {sentimentLabel}
            </span>
            <span className={styles.statLabel}>Sentiment</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statVal}>{results.total_sources?.toLocaleString()}</span>
            <span className={styles.statLabel}>Sources</span>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className={styles.grid}>
        <Card
          icon="👍"
          label="What people like"
          color="#10b981"
          items={results.likes}
        />
        <Card
          icon="👎"
          label="What people dislike"
          color="#ef4444"
          items={results.dislikes}
        />
        <Card
          icon="💡"
          label="What's missing"
          color="#6366f1"
          items={results.missing}
        />
        <Card
          icon="📈"
          label="Emerging trends"
          color="#f59e0b"
          items={results.trends}
        />
      </div>

      {/* Export */}
      <button
        className={styles.exportBtn}
        onClick={() => {
          const json = JSON.stringify(results, null, 2)
          const blob = new Blob([json], { type: 'application/json' })
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = `siftai-${results.topic.replace(/\s+/g, '-')}.json`
          a.click()
        }}
      >
        ↓ Export JSON
      </button>
    </div>
  )
}
