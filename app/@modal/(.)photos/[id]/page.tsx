"use client";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <>{photoId}</>;
}
