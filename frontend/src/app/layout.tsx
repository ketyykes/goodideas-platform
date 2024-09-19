import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "./_components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "GoodIdeas | 好想工作室",
	description:
		"這是一個結合工作、交流與悠閒的理想空間，提供舒適的辦公環境、快速網路、手工製作的桌椅，以及開放的討論區域。無論是與來自各領域的人士交流，或是享受午後的咖啡時光，我們都精心準備了豐富的設施，包括黑板、白板、小會議室與常見的辦公室機器。被窗戶環繞的明亮空間讓你隨時感受陽光灑落，並備有免費茶水和親民價格的咖啡、啤酒，為你打造輕鬆自在的工作氛圍。",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh-Hant">
			<body className={inter.className}>
				<Background />
				{children}</body>
		</html>
	);
}
