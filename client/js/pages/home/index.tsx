import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


import {useHomeQuery} from './query.helper';
import * as S from './styles';


SwiperCore.use([Autoplay, Navigation, Pagination]);


const Home = () => {
	const {loading: isLoading, data} = useHomeQuery();

	return (
		<S.Wrapper>
			<S.SliderWrap>
				<Swiper
					allowTouchMove={false}
					autoplay={{
						delay: 3500,
						disableOnInteraction: true,
					}}
					speed={1000}
					loop={true}
					pagination={true}
				>
					{data?.movies.edges.map(({node}) => {
						return (
							<SwiperSlide key={node.id}>
								<img src={`http://localhost:3000/media/${node.backdrop}`} className="backdrop" />
								<img src={`http://localhost:3000/media/${node.logo}`} className="logo" />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</S.SliderWrap>
		</S.Wrapper>
	);
};

export default Home;
