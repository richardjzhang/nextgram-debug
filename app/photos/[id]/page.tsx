import Link from "next/link";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <div className="card">{id}</div>
      <Link href="/">Home</Link>
      <Link href="/photos/1">One</Link>
      <Link href="/photos/2">Two</Link>
    </div>
  );
}
