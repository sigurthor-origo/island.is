/* eslint-disable no-restricted-imports */
import { format } from 'date-fns'
import { is } from 'date-fns/locale'
import { ActionCard, Box, Text, Link } from '@island.is/island-ui/core'

import * as styles from './Announcements.css'

export const Announcements = () => {
  return (
    <Box>
      <Text variant="h1" marginBottom={3}>
        Tilkynningar
      </Text>
      <Box marginBottom={3}>
        <ActionCard
          tag={{ label: 'Mannréttindastofnun' }}
          heading="Mannréttingdastofnun Íslands tekin til starfa"
          headingVariant="h3"
          renderHeading={(heading) => (
            <Link href="#" color="blue400">
              {heading}
            </Link>
          )}
          text="Mannréttindastofnun Íslands tók til starfa 1. maí sl. og starfar hún á vegum Alþingis samkvæmt lögum nr. 88/2024. Vefsíða embættisins er www.mannrettindi.is en hún er enn í vinnslu."
          date={format(new Date(), 'dd.MM.yyyy', { locale: is })}
        />
      </Box>
      <Box marginBottom={3}>
        <ActionCard
          tag={{ label: 'Alþingi', variant: 'purple' }}
          heading="Varamenn taka sæti"
          headingVariant="h3"
          renderHeading={(heading) => (
            <Link href="#" color="blue400">
              {heading}
            </Link>
          )}
          text="Árni Rúnar Þorvaldsson tekur sæti á Alþingi mánudaginn 5. maí sem varaþingmaður fyrir Ölmu D. Möller. Sigurþóra Steinunn Bergsdóttir tekur sæti sama dag sem varaþingmaður fyrir Rögnu Sigurðardóttur. Þá tekur Sindri S. Kristjánsson sæti sem varaþingmaður fyrir Loga Einarsson, Jónína Brynjólfsdóttir tekur sæti sem varaþingmaður fyrir Þórarin Inga Pétursson og Ingveldur Anna Sigurðardóttir tekur sæti sem varaþingmaður fyrir Guðrúnu Hafsteinsdóttur."
          date={format(new Date(), 'dd.MM.yyyy', { locale: is })}
        />
      </Box>
      <Box marginBottom={3}>
        <ActionCard
          tag={{ label: 'Alþingi', variant: 'purple' }}
          heading="Óundirbúnar fyrirspurnir fimmtudaginn 8. maí"
          headingVariant="h3"
          renderHeading={(heading) => (
            <Link href="#" color="blue400">
              {heading}
            </Link>
          )}
          text="Óundirbúnar fyrirspurnir til ráðherra verða fimmtudaginn 8. maí um kl. 10:30."
          date={format(new Date(), 'dd.MM.yyyy', { locale: is })}
        />
      </Box>
    </Box>
  )
}
