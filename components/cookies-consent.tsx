"use client"

import { useEffect, useState } from "react"
import { useDataStore } from "@/lib/client-store"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookiesConsent() {
  const { cookiesAccepted, acceptCookies, rejectCookies } = useDataStore()
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated || cookiesAccepted) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-foreground">
            Používáme cookies pro zlepšení vašeho zážitku na webu. Cookies nám pomáhají analyzovat provoz a personaliz ovat obsah.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={rejectCookies}
            className="whitespace-nowrap"
          >
            Odmítnout
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
            className="whitespace-nowrap"
          >
            Přijmout
          </Button>
        </div>
      </div>
    </div>
  )
}
