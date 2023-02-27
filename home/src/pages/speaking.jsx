import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world."
        />
      </Head>
      <SimpleLayout
        title="I love sharing ideas and helping people learn."
        intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing.  I was just getting into the swing of meetup and conference speaking in 2019, then the world stopped.  Can't wait to get back out there and speak at some more events!"
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="https://www.youtube.com/watch?v=VCDhqBlOvqU"
              title="Whirlwind Tour of the Scala FP Ecosystem"
              description="Let's go on a whirlwind tour of the FP library ecosystem as we implement a text
              messaging service that mirrors one currently in production at iOFFICE."
              event="Lambda Conf - 2019"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=mzTUWfrzZvQ"
              title="Whirlwind Tour of the Scala FP Ecosystem"
              description="We will start with the design of the application and abstract over the outside world to create our
              business logic in a purely functional, easily testable way."
              event="Scala IO - 2019"
              cta="Watch video"
            />
          </SpeakingSection>
          {
            /**
             * 
          <SpeakingSection title="Podcasts">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Bootstrapping an aerospace company to $17M ARR"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            />
          </SpeakingSection>
             */
          }
        </div>
      </SimpleLayout>
    </>
  )
}
