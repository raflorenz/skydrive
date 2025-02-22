import FileList from "@/components/file-list";
import FileUpload from "@/components/file-upload";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">GDrive Clone</h1>
      <FileUpload />
      <FileList />
    </main>
  );
}
