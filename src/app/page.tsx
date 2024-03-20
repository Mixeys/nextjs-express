import course from './course.json'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<ul>
				{course.lessons.map((lesson) => {
					return (
						<li key={lesson.name}>
							<h2>{lesson.title}</h2>
							{lesson.points.map((point, index) => {
								return <p key={index}>{point}</p>
							})}
						</li>
					)
				})}
			</ul>
		</main>
	)
}
