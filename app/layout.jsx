import './globals.css'
import { Providers } from "./providers"

export default function RootLayout({ children }) {
  return (  
      <html lang="en">
        <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="Discover the Rarity of Your Ideal European Boyfriend with Our European Boyfriend Rarity Calculator. Find Out How Unique Your Relationship Preferences Are in Europe."
        />
       <meta
  name="keywords"
  content="European boyfriend, Boyfriend rarity, Relationship statistics, Dating in Europe, European men, Ideal partner, Relationship preferences, Marriage statistics, Attractiveness scale, Dating statistics, Partner selection, Relationship data, European dating, Love statistics, Age range preferences"
/>
        <title>European Boyfriend Rarity Calculator</title>
        
        <meta
          property="og:title"
          content="European Boyfriend Rarity Calculator"
        />
        <meta
          property="og:description"
          content="Discover the Rarity of Your Ideal European Boyfriend with Our European Boyfriend Rarity Calculator. Find Out How Unique Your Relationship Preferences Are in Europe."
        />
        <meta
          property="og:image"
          content="/logo.png"

        />
        <meta
          property="og:url"
          content="URL of your page"
        />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="European Boyfriend Rarity Calculator"
        />
        <meta
          name="twitter:description"
          content="Discover the Rarity of Your Ideal European Boyfriend with Our European Boyfriend Rarity Calculator. Find Out How Unique Your Relationship Preferences Are in Europe."
        />
        <meta
          name="twitter:image"
          content="/logo.png"

        />
        </head>
        <body>
          <Providers>
            {children}
            </Providers>
          </body>    
      </html>
  )
}
