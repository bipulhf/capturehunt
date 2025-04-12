import { InfoAnimation } from "./info-animation";

export default async function InfoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <InfoAnimation id={id} />;
}
