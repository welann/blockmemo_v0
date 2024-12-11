'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Upload } from 'lucide-react'

export function UploadButton() {
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      handleUpload(file)
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files?.[0]
    if (file) {
      handleUpload(file)
    }
  }

  const handleUpload = async (file: File) => {
    setIsUploading(true)
    // Here you would typically upload the file to your backend or blockchain
    console.log('Uploading file:', file.name)
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsUploading(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-cyan-600 hover:bg-cyan-700 text-white">
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>
          <DialogDescription>
            Upload a Markdown (.md) or text (.txt) file to add to your document collection.
          </DialogDescription>
        </DialogHeader>
        <div
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-800 border-gray-600 hover:border-cyan-500"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <Input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            id="file-upload"
            accept=".md,.txt"
          />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <Upload className="w-8 h-8 mb-4 text-gray-400" />
            <p className="mb-2 text-sm text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400">Markdown or TXT files only</p>
          </label>
        </div>
        {isUploading && <p className="mt-4 text-center text-cyan-400">Uploading...</p>}
      </DialogContent>
    </Dialog>
  )
}

