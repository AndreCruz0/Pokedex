import { AppRoutes } from './routes/routes';
import { AppProvider } from './context/providers/AppProvider';

function App() {
	return (
		<AppProvider>
			<AppRoutes />
		</AppProvider>
	);
}

export default App;
