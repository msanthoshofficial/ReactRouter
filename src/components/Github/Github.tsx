//import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
type dataT = {
	name: string;
	avatar_url: string;
	company: string;
	public_repos: number;
};
function Github() {
	const data: dataT = useLoaderData() as dataT;

	/* const [data, setData] = useState<dataT | null>(null);
	useEffect(() => {
		fetch("https://api.github.com/users/msanthoshofficial")
			.then((res) => res.json())
			.then((val) => {
				setData(val);
			});
	}, []); */

	return (
		<>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<div className="card card-side bg-base-100 shadow-xl">
						<figure>
							<img src={data?.avatar_url} alt="profile pciture" />
						</figure>
						<div className="card-body">
							<h2 className="text-3xl  card-title">
								{data?.name}
							</h2>
							<p className="text-2xl">
								Currently working at {data?.company}
							</p>
							<p className="text-2xl stat-value">
								Total Repositories {data?.public_repos}
							</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">
									Connect
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Github;

export const getData = async () => {
	const response = await fetch(
		"https://api.github.com/users/msanthoshofficial"
	);
	return response.json();
};
