import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { appointmentSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = appointmentSchema.parse(body);

    const appointment = await prisma.appointment.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone,
        service: parsed.service,
        preferredDate: new Date(parsed.preferredDate),
        message: parsed.message || null,
      },
    });

    return NextResponse.json(
      { success: true, id: appointment.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Datos de formulario invalidos" },
        { status: 400 }
      );
    }

    console.error("Error creating appointment:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
