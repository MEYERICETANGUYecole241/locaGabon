import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">Créer un compte</h1>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Nom complet</Label>
            <Input id="name" placeholder="Ex : Jean Mbadinga" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="votremail@exemple.com" />
          </div>
          <div>
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
            S’inscrire
          </Button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Déjà un compte ? <a href="/login" className="text-blue-600 hover:underline">Se connecter</a>
        </p>
      </div>
    </main>
  );
}
