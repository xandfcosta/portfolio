import { Dispatch, SetStateAction } from 'react'

interface RadioProjectProps {
  languages: string[]
  setLanguage: Dispatch<SetStateAction<string>>
}

export default function RadioProject({
  languages,
  setLanguage,
}: RadioProjectProps) {
  function handleOnChange(language: string) {
    setLanguage(language)
    console.log(language)
  }

  return (
    <>
      {languages.map((lang) => {
        return (
          <input
            key={`${lang}-input`}
            type="radio"
            id={lang}
            name={lang}
            className="invisible w-0 h-0 checked:bg-red-500"
            onChange={() => handleOnChange(lang)}
            defaultChecked={lang === 'All'}
          />
        )
      })}
    </>
  )
}
