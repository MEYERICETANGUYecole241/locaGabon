export default function RecherchePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recherche de logement</h1>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Ville ou quartier" className="w-full p-2 border rounded bg-white" />
        <select className="w-full p-2 border rounded bg-white">
          <option value="">studio</option>
          <option value="appartement">Appartement</option>
          <option value="maison">Maison</option>
          <option value="maison">Chambre</option>
        </select>
        <div className="flex space-x-4 ">
          <input type="number" placeholder="Prix min" className="w-1/2 p-2 border rounded bg-white" />
          <input type="number" placeholder="Prix max" className="w-1/2 p-2 border rounded bg-white" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Rechercher
        </button>
      </form>
    </main>
  );
}
