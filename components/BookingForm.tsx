"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import { appointmentSchema, type AppointmentFormData } from "@/lib/validators";

const services = [
  "Limpieza Dental",
  "Blanqueamiento",
  "Ortodoncia",
  "Implantes",
  "Endodoncia",
  "Odontologia Estetica",
];

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Error al enviar la reserva");
      }

      setIsSubmitted(true);
      reset();
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Error al enviar la reserva"
      );
    }
  };

  if (isSubmitted) {
    return (
      <section id="reservar" className="bg-primary-500 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl bg-white p-8 text-center shadow-xl sm:p-12"
          >
            <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-500" />
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              Cita reservada exitosamente
            </h3>
            <p className="mb-6 text-gray-600">
              Hemos recibido tu solicitud. Nuestro equipo se pondra en contacto
              contigo para confirmar la fecha y hora de tu cita.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="rounded-lg bg-primary-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Reservar otra cita
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservar" className="bg-primary-500 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <CalendarCheck className="mb-4 h-12 w-12 text-primary-200" />
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Reserva tu cita ahora
            </h2>
            <p className="mb-8 text-lg text-primary-100">
              Completa el formulario y nuestro equipo se pondra en contacto
              contigo para confirmar tu cita. Tu sonrisa perfecta esta a un
              paso.
            </p>
            <div className="space-y-4 text-primary-100">
              <p className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                  1
                </span>
                Completa tus datos personales
              </p>
              <p className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                  2
                </span>
                Selecciona el servicio que necesitas
              </p>
              <p className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                  3
                </span>
                Elige tu fecha preferida y confirma
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl bg-white p-6 shadow-xl sm:p-8"
            >
              {serverError && (
                <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                  {serverError}
                </div>
              )}

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Nombre completo *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Correo electronico *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Telefono *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="service"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Servicio *
                  </label>
                  <select
                    id="service"
                    {...register("service")}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.service.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Fecha preferida *
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    {...register("preferredDate")}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.preferredDate.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Mensaje (opcional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  {...register("message")}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Cuentanos mas sobre lo que necesitas..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-primary-500 px-6 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  "Confirmar reserva"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
