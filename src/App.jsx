import { useState } from 'react'
import { queryOllama, getAvailableModels } from './lib/ollama'
import SearchBar from './components/SearchBar'
import ResultsDashboard from './components/ResultsDashboard'
import EmptyState from './components/EmptyState'
import Header from './components/Header'
import styles from './App.module.css'

export default function App() {
  const [results, setResults]   = useState(null)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)
  const [model, setModel]       = useState('llama3.2')
  const [history, setHistory]   = useState([])

  const handleSearch = async (topic) => {
    setLoading(true)
    setError(null)
    setResults(null)

    try {
      const data = await queryOllama(topic, model)
      setResults(data)
      setHistory(prev => [{ topic, data }, ...prev.slice(0, 4)])
    } catch (err) {
      setError(
        err.message.includes('Ollama error')
          ? 'Could not connect to Ollama. Make sure it is running with: ollama serve'
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.app}>
      <Header model={model} onModelChange={setModel} />

      <main className={styles.main}>
        <SearchBar
          onSearch={handleSearch}
          loading={loading}
          history={history}
        />

        {error && (
          <div className={styles.error}>
            <span>⚠️</span> {error}
          </div>
        )}

        {loading && (
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <p>Sifting through feedback on the web…</p>
          </div>
        )}

        {results && !loading && (
          <ResultsDashboard results={results} />
        )}

        {!results && !loading && !error && (
          <EmptyState onSearch={handleSearch} />
        )}
      </main>
    </div>
  )
}
