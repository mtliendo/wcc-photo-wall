// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
})

async function fetchImagesByTagAndFolder(folderName: string) {
	console.log('the folder name', folderName)
	try {
		const result = await cloudinary.search
			.expression(`folder:${folderName}`)
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

type Data = {
	data: string[]
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { folderName } = req.query

	const data = await fetchImagesByTagAndFolder(`wcc-july-4-2024/${folderName}`)

	res.status(200).json({ data })
}
