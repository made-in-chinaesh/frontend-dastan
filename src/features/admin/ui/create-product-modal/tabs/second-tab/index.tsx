import { ChangeEvent, FC } from 'react'

export interface IImage {
	id: number
	image: File
}

interface SecondTabProps {
	images: IImage[]
	setImages: any
}

export const SecondTab: FC<SecondTabProps> = ({ images, setImages }) => {
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setImages(e.target.files)
	}

	return (
		<>
			<input type='file' multiple onChange={onChange} />
		</>
	)
}
