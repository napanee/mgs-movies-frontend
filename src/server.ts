import app from './app';


const port = process.env.PORT || 8080;

export const server = app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`App starts on port ${port}`);
});
