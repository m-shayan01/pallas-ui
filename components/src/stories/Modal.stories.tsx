import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import {
  Modal,
  ModalAction,
  ModalCancel,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '~/ui/modal/modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Components/Modal',
  tags: ['autodocs'],
}

export default meta

export const Default = () => (
  <Stack align="flex-start">
    <Modal>
      <ModalTrigger>Open</ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Are you absolutely sure?</ModalTitle>
          <ModalDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalCancel>Cancel</ModalCancel>
          <ModalAction>Continue</ModalAction>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </Stack>
)
