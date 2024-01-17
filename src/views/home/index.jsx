import { memo } from "react"
import { HomeWrapper } from "./style"
import HomeBanner from "./c-cpns/home-banner"

const Home = memo(() => {
	return (
		<HomeWrapper>
			<HomeBanner />
			<div className="content">content</div>
		</HomeWrapper>
	)
})

Home.displayName = "Home"

export default Home
