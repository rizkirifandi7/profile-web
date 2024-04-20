/* eslint-disable react/prop-types */
const Button = ({ text, href }) => {
	return (
		<>
			<a
				href={href}
				className="bg-title dark:bg-white dark:text-black dark:font-semibold px-6 py-3 cursor-pointer rounded-md text-white dark:hover:bg-slate-200 hover:bg-titletwo w-fit"
			>
				{text}
			</a>
		</>
	);
};

export default Button;
