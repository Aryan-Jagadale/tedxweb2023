import style from '../../styles/about.module.scss'
import cn from 'classnames'

function DesktopAbout() {
  return (
    <main className=" flex flex-col max-w-6xl mx-auto py-16 px-6 xl:px-0">
      {/* <DesktopAboutBTN /> */}
      <h1 className='text-center text-white text-6xl font-bold mb-6'>About Us</h1>
      <div className="flex flex-col w-full py-12">
        <div className="text-white text-4xl md:text-6xl flex items-center">
          <h2 className="heading">What is</h2>
          <img src="/ted-logo.png" className="w-28 md:w-48 px-4" />
          <h2 className="heading">?</h2>
        </div>
        <div className={cn(style.discription, "text-lg md:text-xl md:w-2/3 text-white mt-4 text-justify")} style={{width: "90%"}}>
          TED is a non-profit organization devoted to Ideas Worth Spreading. It
          started as a four-day conference in California 39 years ago, believing
          passionately in the power of ideas to change attitudes and lives and
          welcoming people from every discipline and culture who seek a deeper
          understanding of the world. Today, the two annual TED Conferences
          invite the world's leading thinkers and doers to speak for 18 minutes
          or less, and the total number of events conducted till now is more
          than 6000. All this has led to a global community focused on change
          through the power of ideas, thus forming a trinity of ideas from-
          Technology, Entertainment, and Design, and has recently taken up a
          broader scope ranging from science and business to global issues.
        </div>
        {/* <div className='text-lg md:text-xl md:w-2/3 text-white mt-4 text-justify'>
          Today, the two annual TED Conferences invite the world's leading thinkers and doers to speak
          for 18 minutes or less and the total number of events conducted till
          now is more than 6000. Many of these talks are then made available,
          free, at TED.com in more than 100 languages.
        </div>
        <div className='text-lg md:text-xl md:w-2/3 text-white mt-4 text-justify'>
          All this has led to a
          global community focused on change through the power of ideas, thus
          forming a trinity of ideas from- Technology, Entertainment, and
          Design, and has recently taken up a broader scope ranging from
          science and business to global issues in more than 100 languages.
        </div> */}
      </div>
      <div className="flex flex-col w-full py-12">
        <div className="text-white text-4xl md:text-6xl flex items-center justify-end">
          <h2 className="heading">What is</h2>
          <img src="/tedx-logo.png" className="w-[7.5rem] md:w-48 px-4" />
          <h2 className="heading">?</h2>
        </div>
        <div className={cn(style.discription, "text-lg md:text-xl md:w-2/3 text-white mt-4 text-justify")} style={{width: "90%"}}>
          In the spirit of ideas worth spreading, TEDx is a TED-created program
          of local, self-organized events that bring people together to share a
          TED-like experience. These events are community driven and are
          organized by passionate individuals who seek to uncover new ideas and
          share the latest research in their field of expertise that spark
          conversations in their communities and ultimately elevate them to a
          global stage. TEDx events aim to integrate ideas from every nook and
          corner of the world, thus, extending the boundaries of views and
          ideas. Our event is named TEDxVITPune, where x = independently
          organized TED event. The TED Conference provides general guidance for
          the TEDx program, but individual TEDx events, including ours, are
          self-organized.
        </div>
        {/* <div className='text-lg md:text-xl md:w-2/3 ml-auto text-white mt-4 text-justify'>
          TEDx events aim to integrate ideas from every nook and corner of the world, thus, extending the boundaries of views and ideas.
        </div>
        <div className='text-lg md:text-xl md:w-2/3 ml-auto text-white mt-4 text-justify'>
          Our event is named TEDxVITPune, where x= independently organised TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organised.
        </div> */}
      </div>
      <div className="flex flex-col w-full py-12">
        <div className="text-white text-4xl md:text-6xl flex flex-col sm:flex-row sm:items-center">
          <h2 className="heading">What is</h2>
          <div className="flex items-center">
            <img src="/icons/logo-white.png" className="w-64 md:w-96" />
            <h2 className="heading">?</h2>
          </div>
        </div>
        <div className={cn(style.discription, "text-lg md:text-xl md:w-2/3 text-white mt-4 text-justify")} style={{width: "90%"}}>
          TEDxVITPune was among the first TEDx events in Pune and has grown to
          be a premier platform for furthering TED's mission of 'Ideas Worth
          Spreading' within its local community. Over the past nine events,
          TEDxVITPune has brought together visionaries, thinkers, and doers of
          different disciplines from around the country to create a one-day
          event filled with ideas and discussions that contribute to meaningful
          change. The event has hosted the likes of Amira Gill, Avinash
          Ramanathan, Mahesh Kale, Debanshu Roy, Jishnu Chatterjee, Mark
          Hannant, Ajit Kembhavi, Avinash Dharmadhikari, Niranjan Pedanekar,
          Chintan Ruparel, Kunal Jagwani, and Swanandi Tikekar. Cumulatively,
          the event has garnered an extensive following around the country and
          has been recognized as an exemplary TEDx event in India.
        </div>
        {/* <div className='text-lg md:text-xl md:w-2/3 text-white mt-4 text-justify'>
          TEDx events aim to integrate ideas from every nook and corner of the world, thus, extending the boundaries of views and ideas.
        </div>
        <div className='text-lg md:text-xl md:w-2/3 text-white mt-4 text-justify'>
          Our event is named TEDxVITPune, where x= independently organised TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organised.
        </div> */}
      </div>
    </main>
  )
}

export default DesktopAbout
