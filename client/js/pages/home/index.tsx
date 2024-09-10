import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';


import {useHomeQuery} from './query.helper';
import * as S from './styles';


const delay = 3500;
const speed = 1000;

const Home = () => {
	const {data} = useHomeQuery();

	return (
		<S.SliderWrapper delay={delay} speed={speed}>
			<Swiper
				allowTouchMove={false}
				autoplay={{
					delay,
					disableOnInteraction: true,
				}}
				speed={speed}
				loop={true}
				pagination={true}
				modules={[Autoplay, Navigation, Pagination]}
			>
				{data?.movies.edges.map(({node}) => {
					return (
						<SwiperSlide key={node.id}>
							<img src={`${process.env.API_URL}${node.backdropUrl}`} className="backdrop" />
							<img src={`${process.env.API_URL}${node.logoUrl}`} className="logo" />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</S.SliderWrapper>
	);
};

export default Home;
