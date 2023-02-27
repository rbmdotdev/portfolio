import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - RBM.DEV</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Languages & Frameworks">
            <Tool title="Scala, ZIO & Akka">
              A powerful and expressive language, high-performance and composable concurrency and a fault-tolerant actor-based runtime respectively.  
              Together they let me tackle high traffic and complex workflows.  Whats not to like about this stack?
            </Tool>
            <Tool title="Typescript, NextJS & NestJS">
              Strongly typed web development with fast, extensible, react based front-end framework and a modular maintainable back-end framework.  
              These tools allow me to easily create robust and performant web-applications that can scale to meet changing business requirements.
            </Tool>
            <Tool title="React Native">
              The rapid mobile development toolkit. Leverage familiar tools to create engaging user interfaces with access to native device features.
            </Tool>
            <Tool title="Python, Tensorflow, Pytorch & Jupyter">
              The powerful, flexible, interactive and collaborative deep learning stack.
            </Tool>
            <Tool title="Kubernetes, Terraform, Pulumi, Docker">
              Just a comprehensive and powerful set of tools that I love for managing Infrastrucutre.  
              Allows me to easily create, automate and scale reliable infrastructure for modern cloud-native applications.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              Lightweight, fast and extensible code editor that supports Vim keybindings.  That's all I need.
            </Tool>
            <Tool title="Alacritty">
              It might seem silly to care about your terminal emulator but when you use it as much as I do ensuring its blazingly fast
              means I dont have as much dead time waiting for processes to finish.  You would be shocked how much of your total processing time is 
              rendering the output.  Alacritty solves this by being GPU accelerated.
            </Tool>
            <Tool title="Nix">
              Purely functional, declarative, isolated and cross platform package manager.  
              Removes dependency problems across projects and environments.
            </Tool>
          </ToolsSection>
          {
            /**
             * 
              <ToolsSection title="Productivity">
                <Tool title="Alfred">
                  It’s not the newest kid on the block but it’s still the fastest.
                  The Sublime Text of the application launcher world.
                </Tool>
                <Tool title="Reflect">
                  Using a daily notes system instead of trying to keep things
                  organized by topics has been super powerful for me. And with
                  Reflect, it’s still easy for me to keep all of that stuff
                  discoverable by topic even though all of my writing happens in the
                  daily note.
                </Tool>
                <Tool title="SavvyCal">
                  Great tool for scheduling meetings while protecting my calendar
                  and making sure I still have lots of time for deep work during the
                  week.
                </Tool>
                <Tool title="Focus">
                  Simple tool for blocking distracting websites when I need to just
                  do the work and get some momentum going.
                </Tool>
              </ToolsSection>
             */
          }
        </div>
      </SimpleLayout>
    </>
  )
}
