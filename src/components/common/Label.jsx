/* eslint-disable react/prop-types */
const Label = ({ text }) => {
	return (
		<label
			htmlFor=""
			className="absolute font-medium top-[-0.75rem] left-5 text-sm p-1 bg-body dark:dark:text-title-white dark:bg-surface-100 z-10"
		>
			{text}
		</label>
	);
};

export default Label;
