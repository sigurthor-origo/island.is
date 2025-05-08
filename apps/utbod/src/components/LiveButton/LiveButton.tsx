import { Box, Icon, Text, Link } from '@island.is/island-ui/core'

const LiveButton = () => {
  return (
    <Link href="/upptokur">
      <Box
        display="flex"
        alignItems="center"
        justifyContent={'center'}
        padding={3}
        background="purple100"
        borderRadius="standard"
      >
        <Box marginRight={3} display="flex" alignItems="center">
          <Icon icon="playCircle" color="blue400" size="large" />
        </Box>
        <Text variant="h5">Bein útsending Alþingis</Text>
      </Box>
    </Link>
  )
}
export default LiveButton
