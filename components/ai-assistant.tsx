'use client'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MessageCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  text: string
  isUser: boolean
}

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const newMessages: Message[] = [...messages, { text: input, isUser: true }]
    setMessages(newMessages)
    setInput('')

    try {
      const response = await fetch('/api/groq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      })

      if (!response.ok) {
        throw new Error(`Groq API request failed with status ${response.status}`)
      }

      const data = await response.json()
      const botMessage = data.choices[0]?.message?.content || 'Sorry, I couldn\'t process that.'
      
      setMessages(prev => [...prev, { text: botMessage, isUser: false }])

    } catch (error) {
      console.error("Groq API Error:", error)
      setMessages(prev => [...prev, { text: 'An error occurred. Please try again.', isUser: false }])
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight
      }
    }
  }, [messages])

  return (
    <>
      <div className={cn(
        "fixed bottom-4 right-4 z-50 transition-all duration-300",
        isOpen ? 'w-80 h-96' : 'w-16 h-16'
      )}>
        {isOpen ? (
          <div className="w-full h-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg shadow-xl flex flex-col">
            <header className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold text-lg">AI Assistant</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </header>
            <ScrollArea className="flex-1 p-4 overflow-y-auto" ref={scrollAreaRef}>
              <div className="space-y-4 min-h-0">
                {messages.map((msg, i) => (
                  <div key={i} className={cn(
                    "flex items-start gap-2",
                    msg.isUser ? 'justify-end' : 'justify-start'
                  )}>
                    <div className={cn(
                      "rounded-lg px-3 py-2 max-w-[75%] break-words whitespace-pre-wrap",
                      msg.isUser 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                    )}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t flex gap-2 flex-shrink-0">
              <Input 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask something..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="flex-shrink-0">Send</Button>
            </div>
          </div>
        ) : (
          <Button 
            onClick={() => setIsOpen(true)} 
            className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
        )}
      </div>
    </>
  )
}
