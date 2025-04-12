import { photographers } from "@/data/photographets";
import { NameAnimation } from "./name-animation";

export default async function PhotographerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photographer = photographers.find((p) => p.id === id);

  return <NameAnimation photographer={photographer!} />;
}
