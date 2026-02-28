"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Brain, Send, Sparkles, User } from "lucide-react"

type Message = {
  id: number
  role: "user" | "ai"
  content: string
  timestamp: string
}

const suggestedQuestions = [
  "Who is my daughter?",
  "What is my schedule today?",
  "Tell me about my family",
  "What medicine should I take?",
  "Where do I live?",
  "What did I do yesterday?",
]

const aiResponses: Record<string, string> = {
  "who is my daughter?":
    "Your daughter is Priya Sharma. She lives in Mumbai and works as a software engineer. She visits you every weekend and loves cooking your favorite rajma chawal for you. She called you yesterday evening to check on you.",
  "what is my schedule today?":
    "Good question, Rajesh ji! Here's your schedule for today:\n\n- 12:30 PM: Lunch\n- 2:00 PM: Afternoon Medicine (Vitamin E)\n- 4:00 PM: Evening tea and snack\n- 6:00 PM: Evening Medicine (Memantine)\n- 7:30 PM: Dinner\n- 9:00 PM: Sleep time\n\nYou've already completed your morning routine, medicine, and breakfast. You're doing great!",
  "tell me about my family":
    "You have a wonderful family, Rajesh ji! Your son Amit Sharma is your primary caregiver - he lives with you at your home in Dehradun. Your daughter Priya lives in Mumbai. Your wife Sunita ji is also at home and takes care of the household. You also have two grandchildren - Aarav (8) and Ananya (5) - they love playing with you!",
  "what medicine should i take?":
    "Right now, your next medicine is at 2:00 PM - Vitamin E 400 IU. After that, you'll take Memantine 5mg at 6:00 PM with your evening tea. Remember, Amit will remind you when it's time. All your morning medicines have already been taken.",
  "where do i live?":
    "You live at 14, Rajpur Road, Dehradun, Uttarakhand. It's a beautiful home near the hills. You've been living here for over 30 years. Your son Amit and wife Sunita live with you. The Gandhi Park where you go for morning walks is just a 5-minute walk from your home.",
  "what did i do yesterday?":
    "Yesterday was a good day, Rajesh ji! You went for your morning walk at Gandhi Park, had your favorite aloo parantha for breakfast, and then spent some time in the garden. In the afternoon, your friend Mr. Kapoor visited and you both played chess. Priya called you in the evening and you spoke for about 20 minutes.",
}

function getAIResponse(input: string): string {
  const lower = input.toLowerCase().trim()
  for (const [key, value] of Object.entries(aiResponses)) {
    if (lower.includes(key.split(" ").slice(1, 3).join(" ")) || lower === key) {
      return value
    }
  }
  return `I understand you're asking about "${input}". That's a great question, Rajesh ji! Let me help you with that. While I'm looking into the specific details, remember that your family loves you very much and you're safe at home in Dehradun. Your guardian Amit can provide more details about this. Would you like to ask me something else?`
}

function getCurrentTime() {
  return new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
}

export default function AICompanionPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "ai",
      content:
        "Namaste Rajesh ji! I'm your SmritiCare companion. I'm here to help you remember things, answer your questions, and keep you company. How can I help you today?",
      timestamp: getCurrentTime(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  function handleSend(text?: string) {
    const msgText = text || input.trim()
    if (!msgText) return

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: msgText,
      timestamp: getCurrentTime(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        role: "ai",
        content: getAIResponse(msgText),
        timestamp: getCurrentTime(),
      }
      setMessages((prev) => [...prev, aiMsg])
      setIsTyping(false)
    }, 1200)

    inputRef.current?.focus()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1
          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          AI Memory Companion
        </h1>
        <p className="mt-1 text-muted-foreground">
          A compassionate AI assistant to help Rajesh recall memories and answer daily questions.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Chat window */}
        <Card className="lg:col-span-3 flex flex-col" style={{ height: "calc(100vh - 260px)", minHeight: "500px" }}>
          <CardHeader className="shrink-0 border-b">
            <CardTitle className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary">
                <Brain className="size-4 text-primary-foreground" />
              </div>
              SmritiCare AI
              <Badge variant="secondary" className="ml-auto text-xs">
                <Sparkles className="mr-1 size-3" />
                AI Powered
              </Badge>
            </CardTitle>
          </CardHeader>

          <ScrollArea className="flex-1 px-4" ref={scrollRef}>
            <div className="space-y-4 py-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 animate-fade-in ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex size-8 shrink-0 items-center justify-center rounded-full ${
                    msg.role === "ai" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                  }`}>
                    {msg.role === "ai" ? (
                      <Brain className="size-4" />
                    ) : (
                      <User className="size-4" />
                    )}
                  </div>
                  <div className={`max-w-[80%] space-y-1 ${msg.role === "user" ? "items-end" : ""}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "ai"
                          ? "bg-accent text-accent-foreground rounded-tl-sm"
                          : "bg-primary text-primary-foreground rounded-tr-sm"
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.content}</p>
                    </div>
                    <p className={`text-[10px] text-muted-foreground px-2 ${msg.role === "user" ? "text-right" : ""}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 animate-fade-in">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Brain className="size-4" />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-accent px-4 py-3">
                    <div className="size-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="size-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="size-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <CardContent className="shrink-0 border-t pt-4">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="h-11"
              />
              <Button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                size="lg"
                className="h-11 px-6"
              >
                <Send className="size-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Suggested questions */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Suggested Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {suggestedQuestions.map((q) => (
                <Button
                  key={q}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-left text-xs h-auto py-2.5 px-3 whitespace-normal"
                  onClick={() => handleSend(q)}
                  disabled={isTyping}
                >
                  {q}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-4">
              <div className="flex items-start gap-3">
                <Sparkles className="size-4 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The AI companion is designed to provide comforting, accurate responses based on the patient&apos;s profile and memories stored by guardians.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
