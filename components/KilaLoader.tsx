import Image from "next/image";

export default function KilaLoader() {
  return (
    <div className="flex justify-center animate-pulse p-4">
      <Image
        src={"/kila_circle.png"}
        width={92}
        height={92}
        alt={"Kila Loader"}
      />
    </div>
  );
}
