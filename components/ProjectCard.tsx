import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="bg-white shadow-md rounded-lg w-72">
      <Image
        className="rounded-t-lg"
        width={370}
        height={82}
        src={"/sierra_santa_rosa.jpeg"}
        alt="Sierra de Santa Rosa"
      />
      <span className="flex items-center justify-between px-4 py-2">
        <p className="text-xl font-semibold">Title</p>
        <p className="text-xs">
          Cumplimiento Ambiental: <span className="font-bold">X</span>
        </p>
      </span>
    </div>
  );
}
