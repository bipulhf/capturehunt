"use client";

import { useParams } from "next/navigation";
import { NameAnimation } from "./name-animation";

export default function PhotographerPage() {
  const params = useParams();
  return <NameAnimation id={params.id as string} />;
}
