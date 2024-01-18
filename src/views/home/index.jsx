import { memo, useEffect } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux"

import { fetchHomeDataAction } from "@/store/modules/home"
import { HomeWrapper } from "./style"
import HomeBanner from "./c-cpns/home-banner"
import SectionHeader from "@/components/section-header"
import RoomItem from "@/components/room-item"

const Home = memo(() => {
	/** 从redux中获取数据 */
	const { goodPriceInfo } = useSelector(
		(state) => ({
			goodPriceInfo: state.home.goodPriceInfo
		}),
		shallowEqual
	)

	/** 派发异步的事件: 发送网络请求 */
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchHomeDataAction())
	}, [dispatch])

	return (
		<HomeWrapper>
			<HomeBanner />
			<div className="content">
				<div className="good-price">
					<SectionHeader title={goodPriceInfo.title} />
					<ul className="room-list">
						{goodPriceInfo.list?.slice(0, 8).map((item) => {
							return <RoomItem key={item.id} itemData={item} />
						})}
					</ul>
				</div>
			</div>
		</HomeWrapper>
	)
})

Home.displayName = "Home"

export default Home
