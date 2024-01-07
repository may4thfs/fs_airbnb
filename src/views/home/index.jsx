import { memo, useEffect, useState } from "react"
import aRequest from "@/services"

const Home = memo(() => {
	// 定义状态
	const [highScore, setHighScore] = useState({})

	// 网络请求
	useEffect(() => {
		aRequest.get({ url: "/home/highscore" }).then((res) => {
			setHighScore(res)
			console.log(res)
		})
	}, [])

	return (
		<div>
			<h2>{highScore.title}</h2>
			<h4>{highScore.subtitle}</h4>
			<ul>
				{highScore.list?.map((item) => {
					return <li key={item.id}>{item.name}</li>
				})}
			</ul>
		</div>
	)
})

Home.displayName = "Home"

export default Home
