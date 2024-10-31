import Image from "next/image";
import good_idea_title from "../../../public/images/good_idea_title.png";
import logo from "../../../public/images/logo.svg";
import slack_button from "../../../public/images/slack_button.png";
import google_button from "../../../public/images/google_button.png";
export default function Home() {
	return <article className="container px-5 mt-20">
		<Image src={logo} alt="logo" className="mx-auto"/>
		<Image src={good_idea_title} alt="main background" className="mx-auto"/>
		<div className="justify-evenly flex items-center mt-40">
			<button className="cursor-pointer block">
				<Image src={slack_button} alt="slack button" className="hover:opacity-80 transition-opacity"/>
			</button>
			<button className="cursor-pointer block">
				<Image src={google_button} alt="google button" className="hover:opacity-80 transition-opacity"/>
			</button>
		</div>
	</article>
}
