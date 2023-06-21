import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='purple_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      SharedPrompt is an open-source AI prompting tool for people to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;