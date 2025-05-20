import { useContext } from "react";
import { ThemeContext } from "../../context/Theme-context";

export default function ButtonTheme() {
	const { theme, setTheme } = useContext(ThemeContext);
	const isDark = theme === "dark";

	return (
		<div className="absolute top-4 right-4 ">
			<button
				onClick={() => setTheme(isDark ? "white" : "dark")}
                type="button"
				className={` hover:cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
					isDark ? "bg-gray-700" : "bg-yellow-400"
				}` }
			>
				<div
					className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 hover:cursor-pointer ${
						isDark ? "translate-x-6" : "translate-x-0"
					}`}
				/>
			</button>
		</div>
	);
}
