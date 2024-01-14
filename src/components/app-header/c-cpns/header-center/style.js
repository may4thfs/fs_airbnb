import styled from "styled-components"
export const CenterWrapper = styled.div`
	.search-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 300px;
		height: 48px;
		box-sizing: border-box;
		padding: 0 8px;
		border: 1px solid #ddd;
		border-radius: 24px;
		cursor: pointer;
		${(props) => props.theme.mixin.boxShadow};

		.text {
			padding: 0 16px;
			color: #222;
			font-weight: 600;
		}

		/* 设置 svg 图标布局 */
		.icon {
			/* 让 svg 居中 */
			display: flex;
			align-items: center;
			justify-content: center;
			width: 32px;
			height: 32px;
			/* 圆形 */
			border-radius: 50%;
			/* svg 图标设置为白色 */
			color: #fff;
			/* 背景是红色 */
			background-color: ${(props) => props.theme.color.primaryColor};
		}
	}
`
