'use client'

import { Button } from '@/components/ui/button'
import Chat from '@/components/ui/chat'
import { Bot, Send, Upload, User, Plus, ArrowUp, MoveUp, SendHorizonal } from 'lucide-react'
import { useState } from 'react'

interface Message {
  id: string
  content: string
  variant: 'user' | 'assistant'
  timestamp: Date
  streaming?: boolean
}

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How can I help you today?',
      variant: 'assistant',
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
    },
    {
      id: '2',
      content: 'I need help with setting up a new project.',
      variant: 'user',
      timestamp: new Date(Date.now() - 240000), // 4 minutes ago
    },
    {
      id: '3',
      content:
        "I'd be happy to help you set up a new project! What type of project are you looking to create?",
      variant: 'assistant',
      timestamp: new Date(Date.now() - 180000), // 3 minutes ago
    },
  ])

  const [newMessage, setNewMessage] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)

  const addMessage = (message?: string) => {
    const messageText = message || newMessage
    if (!messageText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      variant: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage('')
    setIsStreaming(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Thanks for your message! This is a simulated response from the assistant.',
        variant: 'assistant',
        timestamp: new Date(),
        streaming: false,
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsStreaming(false)
    }, 1500)
  }

  const handleUpload = () => {
    // Simulate file upload
    console.log('Upload clicked - file picker would open here')
  }

  const handleSend = () => {
    addMessage()
  }

  return (
    <>
      <Chat.Root>
        {messages.map((message) => (
          <Chat.Message key={message.id} variant={message.variant} error={true}>
            <Chat.Avatar
              fallback={message.variant === 'user' ? <User size={20} /> : <Bot size={20} />}
            />
            <Chat.Bubble>{message.content}</Chat.Bubble>
            {/* <Chat.Time timestamp={message.timestamp} /> */}
          </Chat.Message>
        ))}

        {isStreaming && (
          <Chat.Message variant="assistant" streaming>
            <Chat.Avatar>
              <Bot size={20} />
            </Chat.Avatar>
            <Chat.Bubble>Typing...</Chat.Bubble>
          </Chat.Message>
        )}

        <Chat.Input>
          <Chat.TextArea
            onSend={addMessage}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <Chat.InputActions>
            <Button size="icon" variant="text" shape="circle" onClick={handleUpload} aria-label="Upload file">
              <Plus size={16} />
            </Button>
            <Button
              size="icon"
              shape="circle"
              onClick={handleSend}
              disabled={!newMessage.trim()}
              aria-label="Send message"
            >
              <SendHorizonal size={16} />
            </Button>
          </Chat.InputActions>
        </Chat.Input>
      </Chat.Root>
    </>
  )
}
