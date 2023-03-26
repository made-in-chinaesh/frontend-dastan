import { useEffect } from 'react'

export const useHideScroll = (isActive: boolean) => {
	const body = document.querySelector('body') as HTMLBodyElement

	useEffect(() => {
		if (isActive) {
			body.style.overflow = 'hidden'
		} else {
			body.style.overflow = 'auto'
		}
	}, [isActive])
}
