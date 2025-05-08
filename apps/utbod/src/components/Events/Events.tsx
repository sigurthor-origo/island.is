import { Box, Text } from '@island.is/island-ui/core'
import * as styles from './Events.css'

const events = [
  { time: 'Kl. 09:00', title: 'Fundur í allsherjar- og menntamálanefnd' },
  { time: 'Kl. 09:00', title: 'Fundur í umhverfis- og samgöngunefnd' },
  { time: 'Kl. 09:00', title: 'Fundur í atvinnuveganefnd' },
  { time: 'Kl. 09:00', title: 'Fundur í efnahags- og viðskiptanefnd' },
  { time: 'Kl. 09:00', title: 'Heimsókn frá grunnskóla' },
  { time: 'Kl. 10:30', title: 'Heimsókn frá grunnskóla' },
  { time: 'Kl. 13:30', title: 'Fundur í allsherjar- og menntamálanefnd' },
]

export const Events = () => {
  return (
    <Box
      paddingY={[2, 2, 5]}
      paddingX={[2, 2, 5]}
      marginY={3}
      border="standard"
      borderRadius="large"
    >
      <Text variant="eyebrow" marginBottom={2}>
        Þriðjudagur 6. maí 2025
      </Text>
      <Text variant="h1" marginBottom={3}>
        Fundir og heimsóknir
      </Text>
      <Box display="flex" flexDirection="column" rowGap={1}>
        {events.map((event, i) => (
          <Box
            key={i}
            display="flex"
            flexDirection={['column', 'row']}
            columnGap={4}
            alignItems="baseline"
          >
            <span className={styles.time}>{event.time}</span>
            <a href="#" className={styles.link}>
              {event.title}
            </a>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
