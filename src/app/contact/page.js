"use client"
import { useState } from "react"
import styles from "./page.module.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    console.log("Form submitted:", formData)
    alert("Message envoyé ! Je vous répondrai bientôt.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className={styles.contactPage}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Contactez-moi</h1>

          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2 className={styles.subtitle}>Parlons de votre projet</h2>
              <p className={styles.description}>
                Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. Je serais ravi de discuter
                avec vous et de voir comment je peux vous aider.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <h3>Email</h3>
                  <p>contact@monportfolio.com</p>
                </div>
                <div className={styles.contactItem}>
                  <h3>Téléphone</h3>
                  <p>+33 1 23 45 67 89</p>
                </div>
                <div className={styles.contactItem}>
                  <h3>Localisation</h3>
                  <p>Paris, France</p>
                </div>
              </div>
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nom complet</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}