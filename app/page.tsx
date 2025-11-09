import Image from 'next/image'
import styles from './page.module.scss'
import Button from '@/components/Button/Button'
import photo from 'public/main.jpg'
import location from 'public/introduction/location.svg'
import mail from 'public/introduction/mail.svg'
import network from 'public/introduction/network.svg'
import work from 'public/introduction/work.svg'
import download from 'public/introduction/download.svg'

export default function Home() {
	return (
		<div className={styles.container} style={{ color: 'white' }}>
			<section className={`${styles.introduction} mt-16`}>
				<h1 className='text-brand-2 bg-text-u'>Developer</h1>
				<div>
					<aside className={styles.aside}>
						<div className={styles.content}>
							<article className={styles.article}>
								<Image
									src={photo}
									alt='main'
									width={96}
									className={styles.mainphoto}
								/>
								<span>
									<h3 className='logo-m'>NABako</h3>
									<h6 className='code-m'>Front-end Developer</h6>
								</span>
							</article>
							<ul className={styles.infoList}>
								<li className='code-m gap-4'>
									<Image src={mail} alt='mail'></Image>
									<p>baglanjaiho@gmail.com</p>
								</li>
								<li className='code-m gap-4'>
									<Image src={location} alt='location'></Image>
									<p>Almaty/Kazakhstan</p>
								</li>
								<li className='code-m gap-4'>
									<Image src={work} alt='work'></Image>
									<p>Full-time / Freelancer</p>
								</li>
								<li className='code-m gap-4'>
									<Image src={network} alt='network'></Image>
									<p>atfitk.kz</p>
								</li>
								<li>
									<a>REACT</a>
									<a>NEXT</a>
									<a>NODEJS</a>
								</li>
							</ul>
							<Button text='Download CV' style='white' icon={download} />
						</div>
					</aside>
					<main className={styles.main}>
						<div className='info'>
							<span>
								<p className='code-m text-brand-2'>{`<h1>`}</p>
								<h1 className='ml-4 h1-u'>
									Hey <br /> {`I'm`}{' '}
									<span className='text-brand-1'>NABako</span> <br />
									<label>
										Front-end Developer
										<span className='code-m text-brand-2 ml-4'>{`</h1>`}</span>
									</label>
								</h1>
							</span>
							<span>
								<p className='code-m text-brand-2'>{`<p>`}</p>
								<h6 className='ml-4 py-4 para-m'>
									I help business grow by crafting amazing web experiences. If
									you’re <br></br> looking for a developer that likes to get
									stuff done,
								</h6>
								<p className='code-m text-brand-2'>{`</p>`}</p>
							</span>
							<div className='flex items-center  gap-4'>
								<h2 className='h2-m text-brand-1 ml-4	'>{`Let's Talk`}</h2>
								<div className='h-10 w-10 bg-grey rounded-full flex justify-center items-center'>
									<Image src={mail} alt='mail' width={22} height={18} />
								</div>
							</div>
						</div>
						<div className='infoBlock'>
							
						</div>
					</main>
				</div>
			</section>
		</div>
	)
}
