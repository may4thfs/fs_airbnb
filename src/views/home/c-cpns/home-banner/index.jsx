import { memo } from "react"
import { BannerWrapper } from "./style"

const HomeBanner = memo(() => {
	return (
		<BannerWrapper>
			<img src="../../../../assets/img/cover_01.jpeg" alt="" />
		</BannerWrapper>
	)
})

HomeBanner.displayName = "HomeBanner"

export default HomeBanner
