"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useTransition } from "react"
import { submitContactForm } from "../actions"

export default function ContactForm() {
  const [message, setMessage] = useState("")
  const [pending, startTransition] = useTransition()

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        const response = await submitContactForm(formData)
        setMessage(response.message)
      } catch (error) {
        console.error("Form Submission Error:", error)
        setMessage("Something went wrong. Please try again.")
      }
    })
  }

  return (
    <Card className="p-4 max-w-lg mx-auto shadow-md">
      <form 
        onSubmit={(e) => { 
          e.preventDefault(); 
          handleSubmit(new FormData(e.target as HTMLFormElement)) 
        }} 
        className="space-y-3"
      >
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
            Name
          </label>
          <Input id="name" name="name" required className="h-10 text-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
            Email
          </label>
          <Input id="email" name="email" type="email" required className="h-10 text-sm" />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
            Message
          </label>
          <Textarea id="message" name="message" required className="h-24 text-sm" />
        </div>
        <Button type="submit" className="w-full py-2.5 text-sm font-semibold" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && <p className="text-xs text-center mt-2 text-muted-foreground">{message}</p>}
      </form>
    </Card>
  )
}
