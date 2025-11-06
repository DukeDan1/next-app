import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mt-5">
      <h1>Hello World</h1>
      <Link href="/users" className="btn btn-primary">Go to Users Page</Link>
    </main>
  )
}
