/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				customthree: "0.5fr 3fr",
				custom: "0.5fr",
				onefr: "1fr max-content 1fr",
				twomax: "repeat(2, max-content)",
				twocontent: "116px repeat(2, 1fr)",
				maxcontent: "max-content",
				initial: 'initial',
			},
			gridColumn: {
				onethree: "1/3",
			},
			colors: {
				title: "hsl(0, 0%, 20%)",
				titletwo: "hsl(0, 0%, 30%)",
				"title-dark": "hsl(0, 0%, 0%)",
				text: "hsl(0, 0%, 46%)",
				body: "hsl(0, 0%, 98%)",
				container: "#fff",
			},
			maxWidth: {
				container: "968px",
			},
			container: {
				center: true,
				padding: "1rem",
			},
			fontSize: {
				big: "3.5rem",
				h1: "2.25rem",
				h2: "1.5rem",
				h3: "1.25rem",
				normal: "1rem",
				small: "0.900rem",
				smaller: "0.813rem",
				tiny: "0.625rem",
			},
			backgroundImage: {
				profile: "url('/fotoprofile.png')",
			},
			boxShadow: {
				profile: "inset 0 0 0 9px rgba(255, 255, 255, 0.3)",
				"custom-light": "0px 1px 6px 0px rgba(214, 223, 235, 0.5)",
				"custom-dark": "0px 1px 4px rgba(141, 150, 170, 0.4)",
			},
			animation: {
				profile: "profile__animate 8s ease-in-out infinite 1s",
			},
			keyframes: {
				profile__animate: {
					"0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
					"50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
					"100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
				},
			},
		},
	},
	plugins: [],
};

