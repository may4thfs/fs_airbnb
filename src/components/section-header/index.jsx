import PropTypes from "prop-types"
import { memo } from "react"
import { SectionHeaderWrapper } from "./style"

const SectionHeader = memo((props) => {
	const { title, subtitle } = props

	return (
		<SectionHeaderWrapper>
			<h2 className="title">{title}</h2>
			{subtitle && <div className="subtitle">{subtitle}</div>}
		</SectionHeaderWrapper>
	)
})

SectionHeader.displayName = "SectionHeader"

// props 类型检查
SectionHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
}

export default SectionHeader
