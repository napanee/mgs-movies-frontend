import styled, {css} from 'styled-components';


export const Backdrop = styled.div`
	img {
		display: block;
		width: 100vw;
	}
`;

export const SliderWrapper = styled.div<{delay: number; speed: number}>`
	position: relative;

	.swiper {
		overflow: hidden;
		margin: auto;
		width: 100vw;
		height: 100vh;
	}

	.swiper-wrapper {
		${({theme}) => css`
			z-index: ${theme.swiper.index};
		`};
		transition-timing-function: ease;
		box-sizing: content-box;
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		display: block;
		flex-shrink: 0;
		overflow: hidden;
		position: relative;
		width: 100%;
		height: 100%;

		.backdrop {
			${({delay, speed}) => css`
				transition:
					translate ${speed}ms ease,
					filter ${speed*0.75}ms linear,
					scale ${delay+speed}ms linear ${speed}ms;
			`}
			width: 100%;
		}

		.logo {
			position: absolute;
			bottom: 5rem;
			left: 2rem;
			width: 50%;
		}

		&-active {
			.backdrop {
				translate: 0;
				scale: 1.1;
			}
		}

		&-prev {
			.backdrop {
				transition-delay: 100ms;
				translate: 50%;
				filter: blur(10px);
			}
		}

		&-next {
			.backdrop {
				transition: none;
				translate: -50%;
				filter: blur(20px);
			}
		}
	}

	.swiper-pagination {
		${({theme}) => css`
			z-index: ${theme.swiper.pagination.index};
		`}
		display: flex;
		translate: -50%;
		gap: 4px;
		position: absolute;
		bottom: 10px;
		left: 50%;
		text-align: center;
	}

	.swiper-pagination-bullet {
		${({speed, theme}) => css`
			transition: width ${speed}ms linear;
			background-color: ${theme.swiper.pagination.color.inactive};
		`}
		display: block;
		position: relative;
		width: 8px;
		height: 8px;
		border-radius: 4px;

		&::before {
			${({speed, theme}) => css`
				transition:
					opacity ${speed}ms linear,
					width 0s linear ${speed}ms;
				background-color: ${theme.swiper.color};
			`}
			content: "";
			display: block;
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
			width: 0%;
			height: 100%;
			border-radius: 4px;
		}
	}

	.swiper-pagination-bullet-active {
		${({speed}) => css`
			transition: width ${speed}ms linear;
		`}
		width: 25px;
		border-radius: 12px;

		&::before {
			${({delay, speed}) => css`
				transition: width ${delay}ms linear ${speed}ms;
			`}
			opacity: 1;
			width: 100%;
		}
	}
`;
