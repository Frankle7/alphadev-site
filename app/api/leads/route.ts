// app/api/leads/route.ts
import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase/admin"; // import do admin

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, telefone, rg, empresa, mensagem, lgpd } = body;

    if (!name || !email ) {
      return NextResponse.json(
        { error: "Campos obrigatórios" },
        { status: 400 }
      );
    }

    // Salvar lead no Firestore usando Admin
    const docRef = await adminDb.collection("leads").add({
      name,
      email,
      telefone,
      rg,
      empresa,
      mensagem,
      lgpd,
      createdAt: new Date(),
    });

    console.log("✅ Lead salvo com ID:", docRef.id);

    return NextResponse.json(
      {
        status: "success",
        message: "Lead salvo com sucesso 🚀",
        data: { id: docRef.id, name, email, telefone, rg, lgpd },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
