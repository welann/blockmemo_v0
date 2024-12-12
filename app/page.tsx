'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar } from './components/sidebar'
import { SearchBar } from './components/search-bar'
import { ConnectButton } from './components/connect-button'
import { DocumentGallery } from './components/document-gallery'
import { DocumentViewer } from './components/document-viewer'
import { UploadButton } from './components/upload-button'

export default function Home() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data for documents
  const documents = [
    { id: '1', name: 'Introduction to Sui', preview: 'Learn the basics of Sui blockchain...' },
    { id: '2', name: 'Smart Contracts 101', preview: 'Understand the fundamentals of smart contracts...' },
    { id: '3', name: 'Web3 Best Practices', preview: 'Discover the best practices for Web3 development...' },
    { id: '4', name: 'DeFi Explained', preview: 'Dive into the world of Decentralized Finance...' },
    { id: '5', name: 'NFT Revolution', preview: 'Explore the impact of Non-Fungible Tokens...' },
    { id: '6', name: 'Blockchain Security', preview: 'Learn how to secure your blockchain applications...' },
    { id: '7', name: 'Introduction to Sui', preview: 'Learn the basics of Sui blockchain...' },
    { id: '8', name: 'Smart Contracts 101', preview: 'Understand the fundamentals of smart contracts...' },
    { id: '9', name: 'Web3 Best Practices', preview: 'Discover the best practices for Web3 development...' },
    { id: '10', name: 'DeFi Explained', preview: 'Dive into the world of Decentralized Finance...' },
    { id: '51', name: 'NFT Revolution', preview: 'Explore the impact of Non-Fungible Tokens...' },
    { id: '62', name: 'Blockchain Security', preview: 'Learn how to secure your blockchain applications...' },
    { id: '13', name: 'Introduction to Sui', preview: 'Learn the basics of Sui blockchain...' },
    { id: '245', name: 'Smart Contracts 101', preview: 'Understand the fundamentals of smart contracts...' },
    { id: '36', name: 'Web3 Best Practices', preview: 'Discover the best practices for Web3 development...' },
    { id: '74', name: 'DeFi Explained', preview: 'Dive into the world of Decentralized Finance...' },
    { id: '85', name: 'NFT Revolution', preview: 'Explore the impact of Non-Fungible Tokens...' },
    { id: '69', name: 'Blockchain Security', preview: 'Learn how to secure your blockchain applications...' },
  ]

  const filteredDocs = documents.filter(doc => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar documents={filteredDocs} onSelectDoc={setSelectedDoc} />
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <SearchBar onSearch={setSearchQuery} />
          <div className="flex space-x-2">
            <UploadButton />
            <ConnectButton />
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-120px)] rounded-md border border-gray-700 p-4">
          {selectedDoc ? (
            <DocumentViewer documentName={selectedDoc} onBack={() => setSelectedDoc(null)} />
          ) : (
            <DocumentGallery documents={filteredDocs} onSelectDoc={setSelectedDoc} />
          )}
        </ScrollArea>
      </main>
    </div>
  )
}

