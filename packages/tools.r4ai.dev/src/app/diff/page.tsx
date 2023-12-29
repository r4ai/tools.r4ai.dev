"use client"

import { DiffEditor } from "@monaco-editor/react"
import { Autocomplete, AutocompleteItem } from "@nextui-org/react"
import { languages } from "monaco-editor"
import { useTheme } from "next-themes"
import { FC, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

type pageProps = {
  className?: string
}

const Diff: FC<pageProps> = (props) => {
  const { resolvedTheme } = useTheme()

  const [language, setLanguage] = useState("plaintext")

  useEffect(() => {
    console.log(language)
  }, [language])

  return (
    <div className={twMerge("h-full flex flex-col gap-6", props.className)}>
      <div className="mx-auto">
        <h1 className="text-3xl font-black">Diff it!</h1>
      </div>
      <div className="mx-auto">
        <Autocomplete
          label="Select a language"
          className="max-w-xs"
          variant="bordered"
          selectedKey={language}
          onSelectionChange={(key) => setLanguage(key as string)}
        >
          {languages.getLanguages().map((lang) => (
            <AutocompleteItem key={lang.id} value={lang.id}>
              {lang.id}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </div>
      <DiffEditor
        className="flex-1"
        theme={resolvedTheme === "dark" ? "vs-dark" : "vs-light"}
        language={language}
        options={{
          formatOnType: true,
          formatOnPaste: true,
          minimap: {
            enabled: false,
          },
          enableSplitViewResizing: true,
          originalEditable: true,
        }}
      />
    </div>
  )
}
export default Diff
