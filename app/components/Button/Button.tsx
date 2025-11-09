import styles from './button.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import iconWhite from 'public/icons/button-white.svg'
export default function Button({
	text,
	style,
	icon,
}: {
	text: string
	style: 'white' | 'solid' | 'stroke'
	icon: string
}) {
	return (
		<button className={clsx(styles.button, styles[style])}>
			<p className='button-u'>{text}</p>
			{style === 'stroke' ? (
				<Image src={iconWhite} alt='' />
			) : (
				<Image src={icon} alt='' />
			)}
		</button>
	)
}
