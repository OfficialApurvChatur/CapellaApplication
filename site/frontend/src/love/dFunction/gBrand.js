import capella from "@/love/hAsset/business/9.png";

const brand = () => {
	var brandObject

		brandObject = {
			logo: capella,
			name: "Capella Enterprise",
			app: "https://beehive-frontend.netlify.app/",
			admin: "https://beehive-admin.netlify.app/"
		}
						
	return brandObject
}

export default brand