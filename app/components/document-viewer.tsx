import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

interface DocumentViewerProps {
  documentName: string
  onBack: () => void
}

export function DocumentViewer({ documentName, onBack }: DocumentViewerProps) {
  return (
    <div className="prose prose-invert">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Gallery
      </Button>
      <h1 className="text-3xl font-bold mb-4">{documentName}</h1>
      <p>This is where the Markdown content for {documentName} would be rendered.</p>
    </div>
  )
}

