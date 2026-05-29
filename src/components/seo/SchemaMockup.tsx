export default function SchemaMockup() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: 10,
        boxShadow:
          "0 4px 20px rgba(9, 47, 100, 0.06), 0 12px 40px rgba(9, 47, 100, 0.04)",
        overflow: "hidden",
      }}
    >
      {/* Top label bar */}
      <div
        style={{
          background: "#F8FAFC",
          borderBottom: "1px solid #E2E8F0",
          padding: "10px 16px",
          fontFamily: "monospace",
          fontSize: 12,
          color: "#71717A",
        }}
      >
        LocalBusiness Schema · tampa location
      </div>

      {/* Code area */}
      <div
        style={{
          background: "#F8FAFC",
          padding: 20,
          fontFamily: "monospace",
          fontSize: 12,
          lineHeight: 1.65,
          overflowX: "auto",
        }}
      >
        <pre style={{ margin: 0 }}>
          <Brace>{"{"}</Brace>{"\n"}
          <Key>{`  "@context"`}</Key><Brace>: </Brace><Str>{`"https://schema.org"`}</Str><Brace>,</Brace>{"\n"}
          <Key>{`  "@type"`}</Key><Brace>: </Brace><Str>{`"RoofingContractor"`}</Str><Brace>,</Brace>{"\n"}
          <Key>{`  "name"`}</Key><Brace>: </Brace><Str>{`"Bumble Roofing -- Tampa"`}</Str><Brace>,</Brace>{"\n"}
          <Key>{`  "url"`}</Key><Brace>: </Brace><Str>{`"bumbleroofing.com/locations/tampa"`}</Str><Brace>,</Brace>{"\n"}
          <Key>{`  "telephone"`}</Key><Brace>: </Brace><Str>{`"(813) 555-0123"`}</Str><Brace>,</Brace>{"\n"}
          <Key>{`  "address"`}</Key><Brace>{`: {`}</Brace>{"\n"}
          <Key>{`    "@type"`}</Key><Brace>: </Brace><Str>{`"PostalAddress"`}</Str><Brace>,</Brace>{"\n"}
          <Key>{`    "streetAddress"`}</Key><Brace>: </Brace><Str>{`"1234 Bayshore Blvd"`}</Str><Brace>,</Brace>{"\n"}
          <Key>{`    "addressLocality"`}</Key><Brace>: </Brace><Str>{`"Tampa"`}</Str><Brace>,</Brace>{"\n"}
          <Key>{`    "addressRegion"`}</Key><Brace>: </Brace><Str>{`"FL"`}</Str><Brace>,</Brace>{"\n"}
          <Key>{`    "postalCode"`}</Key><Brace>: </Brace><Str>{`"33606"`}</Str>{"\n"}
          <Brace>{"  }"}</Brace><Brace>,</Brace>{"\n"}
          <Key>{`  "geo"`}</Key><Brace>{`: {`}</Brace>{"\n"}
          <Key>{`    "@type"`}</Key><Brace>: </Brace><Str>{`"GeoCoordinates"`}</Str><Brace>,</Brace>{"\n"}
          <Key>{`    "latitude"`}</Key><Brace>: </Brace><Num>27.9506</Num><Brace>,</Brace>{"\n"}
          <Key>{`    "longitude"`}</Key><Brace>: </Brace><Num>-82.4572</Num>{"\n"}
          <Brace>{"  }"}</Brace><Brace>,</Brace>{"\n"}
          <Key>{`  "areaServed"`}</Key><Brace>: [</Brace><Str>{`"Tampa"`}</Str><Brace>, </Brace><Str>{`"Brandon"`}</Str><Brace>, </Brace><Str>{`"Wesley Chapel"`}</Str><Brace>],</Brace>{"\n"}
          <Key>{`  "aggregateRating"`}</Key><Brace>{`: {`}</Brace>{"\n"}
          <Key>{`    "@type"`}</Key><Brace>: </Brace><Str>{`"AggregateRating"`}</Str><Brace>,</Brace>{"\n"}
          <Key>{`    "ratingValue"`}</Key><Brace>: </Brace><Str>{`"4.8"`}</Str><Brace>,</Brace>{"\n"}
          <Key>{`    "reviewCount"`}</Key><Brace>: </Brace><Str>{`"342"`}</Str>{"\n"}
          <Brace>{"  }"}</Brace>{"\n"}
          <Brace>{"}"}</Brace>
        </pre>
      </div>
    </div>
  );
}

function Brace({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#374151" }}>{children}</span>;
}

function Key({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#1A5799" }}>{children}</span>;
}

function Str({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#047857" }}>{children}</span>;
}

function Num({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#B45309" }}>{children}</span>;
}
