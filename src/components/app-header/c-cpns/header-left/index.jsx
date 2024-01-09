import { memo } from "react"

import { LeftWrapper } from "./style"
import IconLogo from "@/assets/svg/icon_logo"

const HeaderLeft = memo(() => {
	return (
		<LeftWrapper>
			<div className="logo">
				<IconLogo />
			</div>
		</LeftWrapper>
	)
})

HeaderLeft.displayName = "HeaderLeft"

export default HeaderLeft
