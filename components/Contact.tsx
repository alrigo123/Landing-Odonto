"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Globe, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Direccion",
    lines: ["Av. Principal 1234", "Col. Centro, Ciudad"],
  },
  {
    icon: Clock,
    title: "Horario",
    lines: ["Lun - Vie: 8:00 AM - 7:00 PM", "Sabado: 9:00 AM - 2:00 PM"],
  },
  {
    icon: Phone,
    title: "Telefono",
    lines: ["(123) 456-7890", "(123) 456-7891"],
  },
  {
    icon: Mail,
    title: "Correo",
    lines: ["info@odontclinic.com", "citas@odontclinic.com"],
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
            Contacto
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Ubicacion y contacto
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Visitanos en nuestro consultorio o contactanos por cualquiera de
            nuestros canales.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-2 font-semibold text-gray-900">
                    {info.title}
                  </h4>
                  {info.lines.map((line) => (
                    <p key={line} className="text-sm text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-gray-600 shadow-sm border border-gray-100 transition-colors hover:bg-primary-50 hover:text-primary-500"
                aria-label="Facebook"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-gray-600 shadow-sm border border-gray-100 transition-colors hover:bg-primary-50 hover:text-primary-500"
                aria-label="Instagram"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-sm"
          >
            <iframe
              title="Ubicacion OdontClinic"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661610775407!2d-99.16869542543013!3d19.427023241893207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
