<<<<<<< HEAD
import '../styles/globals.css'
import Nav from '../components/Nav'
import Provider from '../components/Provider'
=======
import '@styles/globals.css'
>>>>>>> parent of 0ee7ca6 (feat: Написан HOC Provider и добавлен в качестве обертки для аутентификации в файл layout)

export const metadata = {
	title: 'Promptopia',
	description: 'Discover & Shar AI Prompts'
}

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<div className='main'>
					<div className='gradient' />
				</div>
				<main className='app'>{children}</main>
			</body>
		</html>
	)
}

export default RootLayout
