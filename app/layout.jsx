import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "SharedPrompt",
  description: "Discover & Share AI prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <Provider>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
