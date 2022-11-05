import { useTheme } from "./hooks/use-theme"

export const App = () => {
  const { theme, setTheme } = useTheme()

  const onLightThemeClick = () => {
    setTheme('light')
  }

  const onDarkThemeClick = () => {
    setTheme('dark')
  }

  return (
    <>
      <h1>useTheme</h1>
      <button onClick={onLightThemeClick}>Light</button>
      <button onClick={onDarkThemeClick}>Dark</button>
    </>
  );
}