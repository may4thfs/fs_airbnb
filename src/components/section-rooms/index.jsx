import PropTypes from "prop-types"
import { memo } from "react"

import RoomItem from "../room-item"
import { RoomsWrapper } from "./style"

const SectionRooms = memo((props) => {
	const { roomList = [] } = props

	return (
		<RoomsWrapper>
			{roomList.slice(0, 8)?.map((item) => {
				return <RoomItem itemData={item} key={item.id} />
			})}
		</RoomsWrapper>
	)
})

SectionRooms.displayName = "SectionRooms"

SectionRooms.propTypes = {
	roomList: PropTypes.array
}

export default SectionRooms
