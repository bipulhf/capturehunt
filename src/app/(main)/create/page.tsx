import { Footer } from "@/components/footer";
import PhotographerForm from "@/components/photographer-form";

export default function CreatePage() {
  return (
    <main className='min-h-screen text-white py-1'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-8'>
          Add Your Photography Profile
        </h1>
        <PhotographerForm />
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
