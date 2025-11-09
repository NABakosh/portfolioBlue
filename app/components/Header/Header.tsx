import { clsx } from 'clsx'
import styles from './header.module.scss'
import Image from 'next/image'
import inst from 'public/icons/inst.svg'
import discord from 'public/icons/discord.svg'
import github from 'public/icons/github.svg'
import search from 'public/icons/search.svg'
import Menu from './Menu'
export default function Header() {
	return (
		<header className='flex flex-col w-full'>
			<div className={styles.container}>
				<div>
					<p className='logo-m' style={{ color: 'white' }}>
						<a className={clsx(styles.logo)}>{`<C/>`}</a>
						NABako
					</p>
				</div>
				<nav className={clsx(styles.nav, 'media-m')}>
					<Menu />
					<li>
						<input maxLength={15} placeholder='' className='input' />{' '}
					</li>
					<li>
						<Image src={inst} alt='Instagram' /> <p>Instagram</p>
					</li>
					<li>
						<Image src={github} alt='Discord' /> <p>Discord</p>
					</li>
					<li>
						<Image src={discord} alt='github' /> <p>GitHub</p>
					</li>
				</nav>
			</div>
			<div className='w-full bg-bg-1 flex justify-center items-center'>
				<div className='w-[85%] border-b-[1px] border-grey'></div>
			</div>
		</header>
	)
}
