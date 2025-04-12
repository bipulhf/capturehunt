import { photographers } from "@/data/photographets";
import { InfoAnimation } from "./info-animation";

export default async function InfoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photographer = photographers.find((p) => p.id === id);

  return <InfoAnimation photographer={photographer!} />;
}
