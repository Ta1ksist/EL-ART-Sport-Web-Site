'use client';

import { useState } from "react";
import ContactHero from "@/components/contactHero/contactHero";
import ContactForm from "@/components/contactForm/contactForm";


export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <title>Контакты — EL'ART</title>
      <ContactHero />
      <ContactForm />
    </>
  );
}


