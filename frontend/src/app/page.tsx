import Link from "next/link";
export default function Home() {
	return <article className="container">
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold text-white text-center">Hello World</h1>
			<Link href="/login" className="bg-white text-black px-4 py-2 rounded-md">Login</Link>
		</div>
	</article>
}
