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
  const [showWidgets, setShowWidgets] = useState(true)
  const [selectedCuisine, setSelectedCuisine] = useState<string>('')
  const [selectedDietary, setSelectedDietary] = useState<string[]>([])
  const [suggestions] = useState([
    { text: 'How can I help you today?', variant: 'pill' as const },
    { text: 'Tell me about your services', variant: 'card' as const },
    { text: 'Find food recommendations', variant: 'outline' as const },
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
    // Show widgets for food-related queries
    if (
      suggestion.toLowerCase().includes('food') ||
      suggestion.toLowerCase().includes('restaurant')
    ) {
      setShowWidgets(true)
    }
  }

  const handleCuisineSelect = (cuisine: string) => {
    setSelectedCuisine(cuisine)
    console.log('Selected cuisine:', cuisine)
  }

  const handleDietarySelect = (dietary: string) => {
    setSelectedDietary((prev) => {
      if (prev.includes(dietary)) {
        return prev.filter((item) => item !== dietary)
      }
      return [...prev, dietary]
    })
    console.log('Selected dietary restrictions:', selectedDietary)
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

        {showWidgets && (
          <Chat.Message variant="assistant">
            <Chat.Avatar>
              <Bot size={20} />
            </Chat.Avatar>
            <Chat.Bubble>
              Great!
              {/* Cuisine Selection Widget */}
              <Chat.Widget
                widgetVariant="elevated"
              >
                <Chat.WidgetHeader>🍽️ Choose Your Preferred Cuisine</Chat.WidgetHeader>

                <Chat.WidgetContent>
                  <Chat.Options
                    optionLayout="grid"
                    optionVariant="default"
                    multiple={true}
                    onOptionSelect={handleCuisineSelect}
                  >
                    <Chat.Option value="italian">🍝 Italian</Chat.Option>
                    <Chat.Option value="chinese">🥢 Chinese</Chat.Option>
                    <Chat.Option value="mexican">🌮 Mexican</Chat.Option>
                    <Chat.Option value="indian">🍛 Indian</Chat.Option>
                    <Chat.Option value="japanese">🍣 Japanese</Chat.Option>
                    <Chat.Option value="american">🍔 American</Chat.Option>
                  </Chat.Options>
                </Chat.WidgetContent>

                <Chat.WidgetActions>
                  <Button variant="primary" size="sm">
                    Confirm Selection
                  </Button>
                </Chat.WidgetActions>
              </Chat.Widget>
              {/* Dietary Restrictions Widget */}
              <Chat.Widget
                widgetVariant="primary"
              >
                <Chat.WidgetHeader>
                  🥗 Any Dietary Restrictions? (Select all that apply)
                </Chat.WidgetHeader>

                <Chat.WidgetContent>
                  <Chat.Options
                    optionLayout="list"
                    optionVariant="default"
                    showCheck={true}
                    multiple={true}
                    onOptionSelect={handleDietarySelect}
                  >
                    <Chat.OptionGroup>
                      <Chat.OptionGroupLabel>Diet Types</Chat.OptionGroupLabel>
                      <Chat.Option value="vegetarian">🌱 Vegetarian</Chat.Option>
                      <Chat.Option value="vegan">🌿 Vegan</Chat.Option>
                      <Chat.Option value="keto">🥑 Keto-Friendly</Chat.Option>
                    </Chat.OptionGroup>

                    <Chat.OptionGroup>
                      <Chat.OptionGroupLabel>Allergies & Intolerances</Chat.OptionGroupLabel>
                      <Chat.Option value="gluten-free">🌾 Gluten-Free</Chat.Option>
                      <Chat.Option value="dairy-free">🥛 Dairy-Free</Chat.Option>
                      <Chat.Option value="nut-free">� Nut-Free</Chat.Option>
                    </Chat.OptionGroup>

                    <Chat.OptionGroup>
                      <Chat.OptionGroupLabel>Religious Requirements</Chat.OptionGroupLabel>
                      <Chat.Option value="halal">☪️ Halal</Chat.Option>
                      <Chat.Option value="kosher">✡️ Kosher</Chat.Option>
                    </Chat.OptionGroup>
                  </Chat.Options>
                </Chat.WidgetContent>

                <Chat.WidgetActions>
                  <Button variant="outlined" size="sm">
                    Skip
                  </Button>
                  <Button variant="primary" size="sm">
                    Continue
                  </Button>
                </Chat.WidgetActions>
              </Chat.Widget>
              {/* Price Range Widget */}
              <Chat.Widget widgetVariant="outlined">
                <Chat.WidgetHeader>💰 Price Range</Chat.WidgetHeader>

                <Chat.WidgetContent>
                  <Chat.Options
                    optionLayout="inline"
                    optionVariant="primary"
                  >
                    <Chat.Option value="budget">$ Budget</Chat.Option>
                    <Chat.Option value="moderate">$$ Moderate</Chat.Option>
                    <Chat.Option value="upscale">$$$ Upscale</Chat.Option>
                    <Chat.Option value="fine-dining">$$$$ Fine Dining</Chat.Option>
                  </Chat.Options>
                </Chat.WidgetContent>
              </Chat.Widget>
              {selectedCuisine && (
                <div
                  style={{
                    marginTop: '1rem',
                    padding: '0.5rem',
                    background: '#f0f9ff',
                    borderRadius: '0.5rem',
                  }}
                >
                  <strong>Selected:</strong> {selectedCuisine} cuisine
                  {selectedDietary.length > 0 && (
                    <div>
                      <strong>Dietary:</strong> {selectedDietary.join(', ')}
                    </div>
                  )}
                </div>
              )}
            </Chat.Bubble>
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

        <Chat.Input layout="horizontal">
          <Chat.InputActions>
            <Button size="icon" variant="text" shape="circle" onClick={handleUpload}>
              <Plus size={16} />
            </Button>
          </Chat.InputActions>
          <Chat.TextArea
            onSend={addMessage}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message... (Try typing multiple lines)"
          />
          <Chat.InputActions>
            <Button size="icon" shape="circle" onClick={handleSend} disabled={!newMessage.trim()}>
              <SendHorizonal size={16} />
            </Button>
          </Chat.InputActions>
        </Chat.Input>
      </Chat.Root>
    </>
  )
}
