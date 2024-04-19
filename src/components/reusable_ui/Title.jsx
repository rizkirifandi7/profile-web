/* eslint-disable react/prop-types */
const Title = ({ maintitle, subtitle }) => {
	return (
		<div className="flex justify-center items-center flex-col mb-14 ">
			<h1 className="text-title dark:text-title-white text-h1 font-semibold">{maintitle}</h1>
			<p className="text-normal text-text dark:text-text">{subtitle}</p>
		</div>
	);
};

export default Title;
