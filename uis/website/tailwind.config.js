tailwind.config = {
	theme: {
		extend: {
			colors: {
				primary: "#102838",
				secondary: "#007B76",
				"secondary-hover": "#006963",
				mint: "#6EE7D2",
				accent: "#D4F27A",
				background: "#FFFFFF",
				surface: "#F4F8FA",
				"surface-accent": "#E9F8F5",
				heading: "#102838",
				text: "#344A5A",
				"text-muted": "#556978",
				"input-border": "#708B99",
				border: "#D8E3E8",
				"border-hover": "#A2C9CB",
				success: "#176B48",
				warning: "#986000",
				error: "#B42318",
				info: "#215F9A"
			},
			fontFamily: {
				sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
			},
			fontSize: {
				display: ["40px", { lineHeight: "1.15" }],
				section: ["32px", { lineHeight: "1.25" }],
				card: ["22px", { lineHeight: "1.35" }]
			},
			borderRadius: {
				card: "8px"
			}
		}
	}
};