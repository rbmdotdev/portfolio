import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoDemu from '@/images/logos/demu.svg'
import logoBodegacat from '@/images/logos/bodegacatlogo.png'
import logoCAD from '@/images/logos/cad-logo.jpeg'
import logoNewton from '@/images/logos/newton-logo.jpeg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import {
  GitHubIcon,
} from '@/components/SocialIcons'

const projects = [
    //{
      //name: 'The App',
      //logo: {image: logoPlanetaria},
      //start: '2023',
      //description:
        //'"The Ultimate Demo Mobile App" combines the power of React Native, deep learning image recognition, and text prediction models to provide an interactive and intelligent application that showcases some of the tools & techniques I love.',
      //link: { href: process.env.NODE_ENV === 'production' ? `${process.env.NEXT_PUBLIC_SITE_URL}/the-app`: `http://localhost:3000/the-app`, label: 'The Demo App' },
    //},
    {
      name: 'Explorations in AI',
      logo: {icon: GitHubIcon},
      start: '2023',
      description:
        'My exploration into the latest trends in machine learning including PyTorch implemented from scratch, hand-trained object recognition models in PyTorch and TensorFlow, and a boutique large language model architecture inspired by ChatGPT. ',
      link:{href: "https://github.com/rbmdotdev/explorations-in-ai", label: 'github.com' },
    },
    {
      name: 'Bodegacat',
      logo: {image: logoBodegacat},
      start: '2021',
      link: { href: 'https://bodegacat.app', label: 'bodegacat.app' },
      description:
        'Your adorable, always vigilant friend that helps you keep your store running smoothly. Pick, Pack and Fulfill your Shopify orders faster.',
    },
    {
      name: 'Newton',
      logo: {image: logoNewton},
      start: '2018',
      link: { href: 'https://newtonprotocol.org', label: 'newtonprotocol.org' },
      description:
        'Creating technology to empower the masses to run & monetize software infrastructure.',
    },
    {
      name: 'Demu',
      logo: {image: logoDemu},
      start: '2021',
      link: { href: 'https://demu.pro', label: 'demu.pro' },
      description:
        'A decentralized music rights protocol to automate the direct payment of music royalties every time a song is played.',
    },
    {
      name: 'Cardano After Dark',
      logo: {image: logoCAD},
      start: '2022',
      link: { href: 'https://docs.cardanoafterdark.com/', label: 'cardanoafterdark.com' },
      description:
        'A commnunity implementing a pure poker dApp on the Cardano Blockchain.',
    },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Spencer Sharp</title>
        <meta
          name="description"
          content="Things I’ve enjoyed working on."
        />
      </Head>
      <SimpleLayout
        title="Things I've enjoyed working on:"
        intro=""
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                {
                  project.logo.icon ? (
                    <project.logo.icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                  ) : (
                    <Image
                      src={project.logo.image}
                      alt=""
                      className="h-8 w-8 rounded-full"
                      unoptimized
                    />
                  )
                }
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
