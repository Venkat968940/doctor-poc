import { AbilityContext } from "./hooks/abilityContext"
import { defineAbilityFor } from "./hooks/defineAbility"
import { useMenu } from "./hooks/userContext"
import { Router } from "./routes/Routes"
import { ThemeSetUp } from "./themes/Themes"

function App() {
  const { role } = useMenu()
  const ability = defineAbilityFor(role)

  console.log(ability, role)

return(
<AbilityContext.Provider value={ability}>
<ThemeSetUp>
<Router />
</ThemeSetUp>
</AbilityContext.Provider>
)
}

export default App
