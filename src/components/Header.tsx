import styles from './Header.module.css'

interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return (
    <div className={styles.header}>
      { text }
    </div>
  )
}