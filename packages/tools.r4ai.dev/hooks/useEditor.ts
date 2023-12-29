"use client"

import { OnMount } from "@monaco-editor/react"
import { editor } from "monaco-editor"
import { useTheme } from "next-themes"
import { useMemo, useRef, useState } from "react"

type EditorHookOptions = {
  defaultLanguage?: string
}

const defaultOptions: Required<EditorHookOptions> = {
  defaultLanguage: "plaintext",
}

export const useEditor = (options: EditorHookOptions = defaultOptions) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor
  }

  const { resolvedTheme } = useTheme()

  const [language, setLanguage] = useState(options.defaultLanguage)

  const editorTheme = useMemo(
    () => (resolvedTheme === "dark" ? "vs-dark" : "vs-light"),
    [resolvedTheme],
  )

  return {
    editorRef,
    handleEditorDidMount,
    editorTheme,
    language,
    setLanguage,
  }
}
