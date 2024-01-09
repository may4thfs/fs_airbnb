import styled from "styled-components"

export const LeftWrapper = styled.div`
	flex: 1;

	display: flex;
	align-items: center;
	/* 这里使用了一个函来动态地获取颜色值。这个函数会在每次组件渲染时被调用，props 参数会被自动传递，然后函数返回的值会被插入到样式中。 */
	color: ${(props) => props.theme.color.primaryColor};

	.logo {
		cursor: pointer;
		margin-left: 24px;
	}
`
