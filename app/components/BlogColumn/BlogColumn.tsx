import Image from 'next/image'
import styles from './blogcolumn.module.scss'
export default function BlogColumn() {
	return (
		<div className={`${styles.container} text-white`}>
			<Image
				src='/blog/blog-column.png'
				alt='Blog Column'
				width={240}
				height={240}
			/>
			<aside className={styles.content}>
				<h2 className='h2-u text-brand-1'>
					What does it take to become a web developer?
				</h2>
				<p className='para-u'>
					Web development, also known as website development, encompasses a
					variety of tasks and processes involved in creating websites for the
					internet…
				</p>
				<div className='flex gap-1  cursor-pointer'>
					<a className='pb-1 text-brand-1 para-u border-b-[1px] border-white w-fit'>
						Read More
					</a>
					<a className='text-brand-1 para-u'>{'>>'}</a>
				</div>
				<ul className={`${styles.info} label-u-l`}>
					<li className='px-2 py-1 bg-grey rounded-2xl'>Web Developer</li>
					<li>
						<a className='label-u-m'>Text</a> Sinan
					</li>
					<li>
						<a className='label-u-m'>Date</a> 10.Oct 2023
					</li>
					<li>
						<a className='label-u-m'>Read</a> 1 Min
					</li>
				</ul>
			</aside>
		</div>
	)
}
