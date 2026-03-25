import { z } from "zod";

export const appointmentSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z.string().email("Ingresa un correo electronico valido"),
  phone: z
    .string()
    .min(7, "Ingresa un numero de telefono valido")
    .max(20, "El telefono no puede exceder 20 caracteres"),
  service: z.string().min(1, "Selecciona un servicio"),
  preferredDate: z.string().min(1, "Selecciona una fecha preferida"),
  message: z.string().max(500, "El mensaje no puede exceder 500 caracteres").optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
