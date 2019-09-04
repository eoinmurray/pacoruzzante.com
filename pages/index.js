import { Link, Paragraph, Pane, Heading, Image } from 'evergreen-ui'

export default () => (
  <Pane
    marginX="auto"
    marginTop={50}
    width={600}
  >
    <Heading
      size={800}
      marginBottom={24}
    >
      Paco Ruzzante
    </Heading>
    <Paragraph>
      Economic historian at the {' '}
      <Link
        href="https://www.hist.cam.ac.uk/directory/paco-ruzzante"
      >
        University of Cambridge
      </Link>, Economist and Writer.
    </Paragraph>

    <Paragraph marginTop={8}>
      pr388@cam.ac.uk
    </Paragraph>

    <Pane
      marginX="left"
      width="70%"
      marginTop={16}
    >
      <Image
        src="/static/paco.jpg"
        width="100%"
      />
    </Pane>
  </Pane>
)
