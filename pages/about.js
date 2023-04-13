import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
        <h1>About this document</h1>
        <p>Single route text</p>
        <hr/>
        <Link href="/" className={styles.single}>&laquo; Back do index2</Link>
    </div>
  )
}
