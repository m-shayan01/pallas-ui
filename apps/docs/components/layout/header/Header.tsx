import AnimatedBrandName from '@/components/home/animated-brandname'
import Link from 'next/link'
import { SearchDialog } from '../../docs/search'
import { header } from './header.recipe'
export function Header() {
  const styles = header()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.innerContainer}>
          <div className={styles.layout}>
            <Link href="/" className={styles.logo}>
              <AnimatedBrandName />
            </Link>

            <div className={styles.searchContainer}>
              <SearchDialog />
            </div>

            <nav className={styles.nav}>
              <Link href="/docs/introduction" className={styles.link}>
                Documentation
              </Link>
              <Link href="/docs/components/accordion" className={styles.link}>
                Components
              </Link>
              <Link
                href="https://github.com/PallasUI/pallas-ui"
                target="_blank"
                rel="noreferrer"
                className={styles.githubLink}
                aria-label="GitHub"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-label="GitHub Icon"
                  role="img"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}
