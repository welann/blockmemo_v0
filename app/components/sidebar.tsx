import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home } from 'lucide-react'

interface Document {
  id: string
  name: string
}

interface SidebarProps {
  documents: Document[]
  onSelectDoc: (name: string | null) => void
}

export function Sidebar({ documents, onSelectDoc }: SidebarProps) {
  return (
    <div className="w-64 bg-gray-800 p-4 flex flex-col h-screen">
      <Button
        variant="ghost"
        className="w-full justify-start text-left mb-4 text-cyan-400 hover:text-cyan-300"
        onClick={() => onSelectDoc(null)}
      >
        <Home className="mr-2 h-4 w-4" />
        Gallery
      </Button>
      <h2 className="text-xl font-bold mb-4 text-cyan-400">Documents</h2>
      <ScrollArea className="flex-grow">
        <nav className="pr-4">
          {documents.map((doc) => (
            <Button
              key={doc.id}
              variant="ghost"
              className="w-full justify-start text-left mb-2 hover:text-cyan-400"
              onClick={() => onSelectDoc(doc.name)}
            >
              {doc.name}
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

