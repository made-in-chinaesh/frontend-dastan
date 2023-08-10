import { FC, PropsWithChildren } from 'react'
import {
	Button,
	Modal as ChakraModal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'

import styles from './styles.module.scss'

interface ModalProps {
	title: string
	size?: Size
	onClose: () => void
	isOpen: boolean
	onClick: () => void
	actionButtonName: string
	isLoading?: boolean
}

export enum Size {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	full = 'full',
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
	children,
	title,
	size = Size.md,
	onClose,
	isOpen,
	onClick,
	actionButtonName,
	isLoading,
}) => {
	return (
		<ChakraModal
			onClose={onClose}
			isOpen={isOpen}
			motionPreset='slideInBottom'
			size={size}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{title}</ModalHeader>
				<ModalBody className={styles.modalBody}>{children}</ModalBody>
				<ModalFooter>
					<Button
						colorScheme='red'
						variant='outline'
						onClick={onClose}
					>
						Закрыть
					</Button>
					<Button
						variant='outline'
						onClick={onClick}
						ml={2}
						isLoading={isLoading}
					>
						{actionButtonName}
					</Button>
				</ModalFooter>
			</ModalContent>
		</ChakraModal>
	)
}
