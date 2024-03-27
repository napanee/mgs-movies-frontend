import styled, {css} from 'styled-components';


export const Wrapper = styled.div`
	color: ${({theme}) => theme.palette.common.black};
`;

export const List = styled.ul`
`;

export const ListItem = styled.li`
	position: relative;

	h2 {
		position: absolute;
		bottom: 10%;
		left: 10%;
	}
`;

export const Backdrop = styled.div`
	img {
		width: 100vw;
	}
`;

export const SliderWrap = styled.div`
	--swiper-theme-color: rgba(255, 255, 255, 1);
	--swiper-pagination-color: var(--swiper-theme-color);
	--swiper-pagination-left: auto;
	--swiper-pagination-right: 8px;
	--swiper-pagination-bottom: 8px;
	--swiper-pagination-top: auto;
	--swiper-pagination-fraction-color: inherit;
	--swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);
	--swiper-pagination-progressbar-size: 4px;
	--swiper-pagination-bullet-size: 8px;
	--swiper-pagination-bullet-width: 8px;
	--swiper-pagination-bullet-height: 8px;
	--swiper-pagination-bullet-border-radius: 4px;
	--swiper-pagination-bullet-inactive-color: rgba(255, 255, 255, 0.4);
	--swiper-pagination-bullet-horizontal-gap: 4px;
	--swiper-pagination-bullet-vertical-gap: 6px;

	--swiper-pagination-bullet-width-transition-duration: 1000ms;
	--swiper-pagination-bullet-fill-transition-duration: 3500ms;
	--swiper-pagination-bullet-transition-delay: 1000ms;

	position: relative;

	.swiper {
		width: 100vw;
		height: 100vh;
		margin: auto;
		overflow: hidden;
	}

	.swiper-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		box-sizing: content-box;
		transition-timing-function: ease;
	}

	.swiper-slide {
		flex-shrink: 0;
		width: 100%;
		height: 100%;
		position: relative;
		display: block;
		overflow: hidden;

		.backdrop {
			transition:
				translate 1000ms ease,
				filter 750ms linear,
				scale 4000ms linear 1000ms;
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
		display: flex;
		gap: 5px;
		position: absolute;
		bottom: 10px;
		left: 50%;
		text-align: center;
		transition: 300ms opacity;
		transform: translateX(-50%);
		z-index: 10;
	}

	.swiper-pagination-bullet {
		transition: width var(--swiper-pagination-bullet-width-transition-duration) linear;
		width: 8px;
		height: 8px;
		display: block;
		border-radius: 4px;
		background: var(--swiper-pagination-bullet-inactive-color, #FFF);
		position: relative;

		&::before {
			content: "";
			display: block;
			transition:
				opacity var(--swiper-pagination-bullet-width-transition-duration) linear,
				width 0s linear var(--swiper-pagination-bullet-width-transition-duration);
			position: absolute;
			top: 0;
			left: 0;
			width: 0%;
			height: 100%;
			background-color: white;
			border-radius: 4px;
			opacity: 0;
		}
	}

	.swiper-pagination-bullet-active {
		transition: width var(--swiper-pagination-bullet-width-transition-duration) linear;
		width: 25px;
		border-radius: 12px;

		&::before {
			transition:
				width
				var(--swiper-pagination-bullet-fill-transition-duration)
				linear
				var(--swiper-pagination-bullet-width-transition-duration);
			opacity: 1;
			width: 100%;
		}
	}
`;

