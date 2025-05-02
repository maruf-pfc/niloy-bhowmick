import type { Metadata } from "next"
import { ContactContent } from "./ContactContent"

export const metadata: Metadata = {
  title: "Contact | itsNiloy",
  description: "Get in touch with Niloy Bhowmick for video editing projects and collaborations",
  keywords: "contact, video editing services, hire video editor, collaboration, Niloy Bhowmick",
  openGraph: {
    title: "Contact | itsNiloy",
    description: "Get in touch with Niloy Bhowmick for video editing projects and collaborations",
    url: "https://itsniloy.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="flex-1 p-6 md:p-10">
      <div className="container mx-auto">
        <ContactContent />
      </div>
    </main>
  )
}
