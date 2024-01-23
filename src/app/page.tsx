import NavBar from '../components/Navbar';
export default function Home() {
  return (
    <main className="">
      <div  >
      <NavBar/>
       <section id='about' className="flex text-5xl bg-black h-screen  text-violet-800 justify-center items-center">
        <h1>
          about
        </h1>
       </section>
       <section id='blog' className="flex text-5xl bg-indigo-800 h-screen text-black justify-center items-center">
        <h1>
          blog
        </h1>
        </section>
        <section id='contact' className="flex text-5xl bg-black h-screen text-violet-800 justify-center items-center">
          <h1>
            contacts
          </h1>
        </section>
        <section id='projects' className="flex text-5xl bg-violet-800 h-screen text-black justify-center items-center">
          <h1>
            projects
          </h1>
        </section>
      </div>
    </main>
  );
}
