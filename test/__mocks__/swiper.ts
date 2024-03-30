jest.mock('swiper/react', () => ({
	Swiper: ({ children }: any) => children,
	SwiperSlide: ({ children }: any) => children,
}));

jest.mock('swiper/modules', () => ({
	Navigation: jest.fn(),
	Pagination: jest.fn(),
}));
