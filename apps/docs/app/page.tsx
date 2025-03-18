import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <div>
        <h1>Pallas UI</h1>
        <p>
          A modern UI component library for React applications. Accessible, customizable, and open
          source.
        </p>
        <div>
          <Link href="/docs/introduction">Get Started</Link>
          <Link href="/docs/components/button">Components</Link>
          <Link href="https://github.com/your-org/pallas-ui" target="_blank" rel="noreferrer">
            GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}
