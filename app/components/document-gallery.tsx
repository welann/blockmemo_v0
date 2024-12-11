import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface Document {
  id: string
  name: string
  preview: string
}

interface DocumentGalleryProps {
  documents: Document[]
  onSelectDoc: (name: string) => void
}

export function DocumentGallery({ documents, onSelectDoc }: DocumentGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {documents.map((doc) => (
        <Card 
          key={doc.id} 
          className="bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors"
          onClick={() => onSelectDoc(doc.name)}
        >
          <CardHeader>
            <CardTitle className="text-cyan-400">{doc.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{doc.preview}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

