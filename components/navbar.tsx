import Link from 'next/link'
import React from 'react'

function Navbar() {
	return (
		<div className="navbar bg-primary text-primary-content">
			<div className="flex-1">
				<Link href="/" className="btn btn-ghost text-xl">
					WCC Photo Wall
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1 gap-4">
					<li>{/* <Link href="/">Parade</Link> */}</li>
					<li>
						<Link href="/watermelon">Watermelon Eating Contest</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
