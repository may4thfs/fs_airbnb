import styled from "styled-components"
export const RoomItemWrapper = styled.div`
	box-sizing: border-box;
	width: 25%;
	padding: 8px; // 补充：见笔记 - 列表 item 之间的间距

	/* 实际内容放在 inner 中 */
	.inner {
		width: 100%;
	}

	/* 每张图片比例不一定一致。所以在宽度一样的情况下，高度可能不同。解决思路：笔记 - 图片比例不同，但想统一大小 */
	.cover {
		position: relative;
		box-sizing: border-box;
		padding: 66.66% 8px 0;
		border-radius: 3px;
		overflow: hidden;

		img {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
		}
	}

	.desc {
		margin: 10px 0 5px;
		font-size: 12px;
		font-weight: 700;
		color: ${(props) => props.$verifyColor};
	}

	.name {
		font-size: 16px;
		font-weight: 700;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.price {
		margin: 8px 0;
	}

	.bottom {
		display: flex;
		align-items: center;
		font-size: 12px;
		font-weight: 600;
		color: ${(props) => props.theme.text.primaryColor};

		.count {
			margin: 0 2px 0 4px;
		}

		.MuiRating-decimal {
			margin-right: -2px;
		}
	}
`
