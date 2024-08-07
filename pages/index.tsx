import { Inter } from 'next/font/google'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import { CldVideoPlayer } from 'next-cloudinary'

import 'next-cloudinary/dist/cld-video-player.css'
import Navbar from '@/components/navbar'
import { fetchImagesByTagAndFolder } from '@/utils/fetchImagesByTagAndFolder'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ imgData }: { imgData: any }) {
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
	const res = await fetchImagesByTagAndFolder('parade')

	return {
		props: { imgData: res },
	}
}
