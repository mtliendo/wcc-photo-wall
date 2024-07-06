import { v2 as cloudinary } from 'cloudinary'
cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
})

export async function fetchImagesByTagAndFolder(folderName: string) {
	console.log('the folder name', folderName)
	try {
		const result = await cloudinary.search
			.expression(`folder:wcc-july-4-2024/${folderName}`)
			.execute()

		const data = result.resources.map((resource: any) => {
			return {
				public_id: resource.public_id,
				width: resource.width,
				height: resource.height,
				resource_type: resource.resource_type,
			}
		})
		return data
	} catch (error) {
		console.error('Error fetching images:', error)
	}
}
