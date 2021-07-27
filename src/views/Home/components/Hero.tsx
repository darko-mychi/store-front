import FadeIn from "react-fade-in";

const Hero = () => {
	return (
		<div className="hero__section">
			<div className="hero__section__inner">
				<FadeIn className="hero__text">
					<h1>Book Pharm</h1>
					<p>
						Get your favourite books from our wide collection of books and covers for
						children and adults alike
					</p>
				</FadeIn>
			</div>
		</div>
	);
};

export default Hero;
