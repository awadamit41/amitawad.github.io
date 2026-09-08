import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section section--contact">
      <div className="section-shell contact-block">
        <span className="eyebrow">404 / NOT FOUND</span>
        <h1>THIS PATH DOESN&apos;T EXIST.</h1>
        <p>The page you are looking for may have moved.</p>
        <Link className="button" href="/">RETURN HOME ↗</Link>
      </div>
    </main>
  );
}
