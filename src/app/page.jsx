import Link from "next/link"


export default function Home() {
  return (
    <h1>
      My home lading page
      <Link href={'/pages/Signin/'}>Página login</Link>
    </h1>
  )
}