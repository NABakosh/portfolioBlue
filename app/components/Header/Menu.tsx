'use client'

import clsx from 'clsx'
import styles from './header.module.scss'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Menu() {
	const [active, setActive] = useState<boolean>(true)
	const pathname = usePathname()
	useEffect(() => {
		if (pathname === '/') {
			setActive(true)
		} else {
			setActive(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])
	return (
		<menu className={clsx(styles.menu, 'menu-m')}>
			<li className={clsx({ [styles.active]: active })}>Home</li>
			<li className={clsx({ [styles.active]: !active })}>Blogs</li>
		</menu>
	)
}
