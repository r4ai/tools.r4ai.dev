"use client"

import { BeforeMount, OnMount } from "@monaco-editor/react"
import { defu } from "defu"
import * as monaco from "monaco-editor"
import { useTheme } from "next-themes"
import { useMemo, useRef, useState } from "react"

type EditorHookOptions = {
  defaultLanguage?: string
}

const defaultOptions: Required<EditorHookOptions> = {
  defaultLanguage: "plaintext",
}

export const useEditor = (_options: EditorHookOptions = defaultOptions) => {
  const options = defu(_options, defaultOptions)

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)

  const handleEditorBeforeMount: BeforeMount = (monaco) => {
    setAvailableLanguages(monaco.languages.getLanguages().map((l) => l.id))
  }

  const handleEditorOnMount: OnMount = (editor) => {
    editorRef.current = editor
  }

  const { resolvedTheme } = useTheme()

  const [availableLanguages, setAvailableLanguages] = useState<string[]>([
    options.defaultLanguage,
  ])
  const [language, setLanguage] = useState(options.defaultLanguage)

  const editorTheme = useMemo(
    () => (resolvedTheme === "dark" ? "vs-dark" : "vs-light"),
    [resolvedTheme],
  )

  return {
    editorRef,
    handleEditorBeforeMount,
    handleEditorDidMount: handleEditorOnMount,
    editorTheme,
    availableLanguages,
    language,
    setLanguage,
  }
}
