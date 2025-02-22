import Link from "next/link";

interface File {
  id: string;
  name: string;
  type: string;
  size: number;
  createdAt: string;
}

const files: File[] = [
  {
    id: "1",
    name: "Document.pdf",
    type: "pdf",
    size: 1024000,
    createdAt: "2023-04-01",
  },
  {
    id: "2",
    name: "Image.jpg",
    type: "image",
    size: 2048000,
    createdAt: "2023-04-02",
  },
];

export default function FileList() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Your Files</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {files.map((file) => (
              <tr key={file.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    href={`/view/${file.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {file.name}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{file.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {file.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
