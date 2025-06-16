import Image from "next/image";

type Props = {
  image: string;
  titre: string;
  description: string;
};

export default function ProductCard({ image, titre, description }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
      <Image 
        src="/gabonhome-.jpg"
        alt="titre"
        width={300}
        height={200}
        className="rounded-lg mb-2 mx-auto"
      />
      <h1 className="text-center font-semibold mb-2">Maison à Akanda</h1>
      <p className="text-gray-600 text-justify"> 3 chambres, salon, cuisine, 3 douches dont une pour
   visiteurs et un dressing. Dans la barrière, compteur personnel, eau en permanence.
</p>
    </div>
  );
}

