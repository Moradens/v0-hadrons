"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { CheckCircle2, Send, AlertCircle } from "lucide-react"

const serviceOptions = [
  { value: "rekonstrukce", label: "Kompletní rekonstrukce" },
  { value: "elektro", label: "Elektromontáže" },
  { value: "sadrokartony", label: "Sádrokartony" },
  { value: "zdeni", label: "Zednické práce" },
  { value: "jine", label: "Jiné" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, company: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Chyba při odesílání poptávky")
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (err) {
      console.error("[v0] Form error:", err)
      setError("Chyba při odesílání poptávky. Zkuste později.")
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Děkujeme za poptávku!</h3>
          <p className="text-muted-foreground">
            Ozveme se vám do 24 hodin s nezávaznou nabídkou.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border">
      <CardContent className="p-6 lg:p-8">
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="name">Jméno a příjmení *</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder="Jan Novák"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Telefon *</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+420 123 456 789"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="email">E-mail *</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jan.novak@email.cz"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="company">O jakou službu máte zájem?</FieldLabel>
              <Select value={formData.company} onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Vyberte službu" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="message">Popis projektu *</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Popište prosím váš projekt - co potřebujete, kde se nachází objekt, přibližný rozsah prací..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Spinner className="mr-2" />
                  Odesílám...
                </>
              ) : (
                <>
                  Odeslat poptávku
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Odesláním formuláře souhlasíte se zpracováním osobních údajů.
            </p>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
