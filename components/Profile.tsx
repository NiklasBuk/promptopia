import { FC } from 'react'
import PromptCard from '@components/PromptCard'

type Prompt = {
	prompt: string
	tag: string
}

type Profile = {
	name: string
	desc: string
	data: []
	handleEdit: (prompt: Prompt) => void
	handleDelete: (prompt: Prompt) => void
}

const Profile: FC<Profile> = ({
	name,
	desc,
	data,
	handleEdit,
	handleDelete
}) => {
	return (
		<section className='w-full'>
			<h1 className='head_text text-left'>
				<span className='blue_gradient'>{name} Profile</span>
			</h1>
			<p className='desc text-left'>{desc}</p>
			<div className='mt-16 prompt_layout'>
				{data.map(prompt => (
					<PromptCard
						key={prompt._id}
						post={prompt}
						handleEdit={() => handleEdit && handleEdit(prompt)}
						handleDelete={() => handleDelete && handleDelete(prompt)}
					/>
				))}
			</div>
		</section>
	)
}

export default Profile
