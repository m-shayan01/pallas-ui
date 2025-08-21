'use client'

import { Button } from '@/components/ui/button'
import Chat from '@/components/ui/chat'
import { ArrowUp, Bot, MoveUp, Plus, Send, SendHorizonal, Upload, User } from 'lucide-react'
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
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [suggestions] = useState([
    { text: 'How can I help you today?', variant: 'pill' as const },
    { text: 'Tell me about your services', variant: 'card' as const },
    { text: 'Schedule a meeting', variant: 'outline' as const },
    { text: 'Show pricing information', variant: 'solid' as const },
    { text: 'Get technical support', variant: 'ghost' as const },
    { text: 'Quick question', variant: 'minimal' as const },
  ])

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

    // Hide suggestions after first message
    if (showSuggestions) {
      setShowSuggestions(false)
    }

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

  const handleSuggestionClick = (suggestion: string) => {
    addMessage(suggestion)
  }

  return (
    <>
      <Chat.Root>
        {messages.map((message) => (
          <Chat.Message key={message.id} variant={message.variant}>
            <Chat.Avatar
              fallback={message.variant === 'user' ? <User size={20} /> : <Bot size={20} />}
            />
            <Chat.Bubble>{message.content}</Chat.Bubble>
            {/* <Chat.Metadata>{message.timestamp.toLocaleTimeString()}</Chat.Metadata> */}
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

        {showSuggestions && (
          <>
            <Chat.Suggestions suggestionVariant="outlined" suggestionShape="pill">
              {suggestions.map((suggestion, index) => (
                <Chat.Suggestion key={index} onClick={() => handleSuggestionClick(suggestion.text)}>
                  {suggestion.text}
                </Chat.Suggestion>
              ))}
            </Chat.Suggestions>

            <Chat.Suggestions suggestionVariant="filled" suggestionShape="card">
              {suggestions.map((suggestion, index) => (
                <Chat.Suggestion key={index} onClick={() => handleSuggestionClick(suggestion.text)}>
                  {suggestion.text}            
                </Chat.Suggestion>
              ))}
            </Chat.Suggestions>

             <Chat.Suggestions suggestionVariant="primary" suggestionShape="card">
              {suggestions.map((suggestion, index) => (
                <Chat.Suggestion key={index} onClick={() => handleSuggestionClick(suggestion.text)}>
                  {suggestion.text}            
                </Chat.Suggestion>
              ))}
            </Chat.Suggestions>
          </>
        )}

        <Chat.Input layout="vertical">
          <Chat.TextArea
            onSend={addMessage}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message... (Try typing multiple lines)"
          />
          <Chat.InputActions>
            <Button size="icon" variant="text" shape="circle" onClick={handleUpload}>
              <Plus size={16} />
            </Button>
            <Button size="icon" shape="circle" onClick={handleSend} disabled={!newMessage.trim()}>
              <SendHorizonal size={16} />
            </Button>
          </Chat.InputActions>
        </Chat.Input>
      </Chat.Root>
    </>
  )
}
