import { Inter } from 'next/font/google'
import { CldImage } from 'next-cloudinary'
import { CldVideoPlayer } from 'next-cloudinary'

import 'next-cloudinary/dist/cld-video-player.css'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Watermelon({ imgData }: { imgData: any }) {
	return (
		<>
			<Navbar />

			<main className="flex flex-wrap gap-4 justify-center mt-8">
				{imgData.map((img: any) => {
					return (
						<CldImage
							key={img.public_id}
							src={img.public_id}
							width={300}
							height={300}
							alt={img.public_id}
							className="border"
						/>
					)
				})}
			</main>
		</>
	)
}

export async function getStaticProps() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/cloudinary`
	)
	const { data } = await res.json()
	return {
		props: { imgData: data },
	}
}
