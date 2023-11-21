import spiderman from "../../assets/spiderman.jpg";

function Home() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row">
				<img
					src={spiderman}
					className="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					<h1 className="text-5xl font-bold">Box Office News!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti
						eaque aut repudiandae et a id nisi. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Ipsam labore quis
						sit in, minus, veritatis tenetur corporis repellendus
						blanditiis eveniet voluptas optio qui nam at mollitia,m
						architecto voluptates necessitatibus, sed temporibus
						ipsam saepe eos iste! Beatae amet dignissimos
						perspiciatis ad, ea saepe nesciunt sapiente dolores nemo
						quia, voluptates assumenda iste pariatur.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
