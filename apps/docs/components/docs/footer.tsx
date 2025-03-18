export function Footer() {
  return (
    <footer>
      <div>
        <p>
          Built with ❤️ by the carbonteq team. The source code is available on{' '}
          <a
            href="https://github.com/PallasUI/pallas-ui"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <p>© {new Date().getFullYear()} Pallas UI. All rights reserved.</p>
      </div>
    </footer>
  )
}
