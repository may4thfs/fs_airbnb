import PropTypes from "prop-types"
import { memo } from "react"
import { RoomItemWrapper } from "./style"

const RoomItem = memo((props) => {
	const { itemData } = props

	return <RoomItemWrapper>{itemData.name}</RoomItemWrapper>
})

RoomItem.displayName = "RoomItem"

RoomItem.propTypes = {
	itemData: PropTypes.object
}

export default RoomItem
