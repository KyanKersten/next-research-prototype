import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Naam is verplicht."),
  email: z.email("Vul een geldig e-mailadres in."),
  message: z.string().trim().min(1, "Bericht is verplicht."),
});

async function createContactMessage(data: z.infer<typeof contactSchema>) {
  await Promise.resolve(data);
  return crypto.randomUUID();
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return Response.json(
      {
        message: "Ongeldige invoer.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const id = await createContactMessage(parsed.data);
  return Response.json({ id }, { status: 200 });
}
