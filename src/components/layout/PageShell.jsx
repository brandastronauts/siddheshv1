// PageShell is kept for backward compatibility with any remaining imports.
// In Next.js, Header/Footer live in layout.tsx and metadata is handled per-page.
// This component is now a transparent passthrough wrapper.

const PageShell = ({ children }) => {
  return <>{children}</>
}

export default PageShell
