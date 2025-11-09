import styles from './footer.module.scss'
import Image from 'next/image'
import instagram from 'public/footer/Instagram.svg'
import github from 'public/footer/Github.svg'
import discord from 'public/footer/Discord.svg'
export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p className='text-white para-u'>© 2025 Nabako. All rights reserved.</p>
			<ul className='flex gap-8'>
				<a className='para-u'>Privacy Policy</a>
				<a className='para-u'>Terms & Conditions</a>
			</ul>
			<ul className='flex gap-8 '>
				<Image src={instagram} alt='instagram' />
				<Image src={github} alt='github' />
				<Image src={discord} alt='discord' />
			</ul>
			<ul>
				<a className='para-u'>
					Design By <span className='text-brand-1 underline'>JohannLean</span>
				</a>
			</ul>
		</footer>
	)
}
