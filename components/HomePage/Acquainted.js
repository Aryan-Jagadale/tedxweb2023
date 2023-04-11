import React from 'react'
import cn from 'classnames'
import Style from '../../styles/acquainted.module.scss'

export default function Acquainted() {
  return (
    <>
      <div className={cn(Style.scrollContainer)}>
        <div className={cn(Style.sections)}>
          <div className={cn(Style.hedline1)}>Lets get acquainted</div>
          <div className={cn(Style.infromationBox)}>
            <div className={cn(Style.sectionTitle, 'heading')}>
              What is TED?
            </div>
            <br />
            <div className={cn(Style.AboutContent)}>
              In the spirit of ideas worth spreading, TEDx is a TED-created
              program of local, self-organized events that bring people together
              to share a TED-like experience. These events are community driven
              and local-community driven organized by passionate individuals who
              seek to uncover new ideas and share the latest research in their
              respective regions that spark conversations in their communities
              and ultimately elevate them to a global stage. Read more
            </div>
          </div>
          <div className={cn(Style.infromationBox)}>
            <div className={cn(Style.sectionTitle, 'heading')}>
              What is TEDx?
            </div>
            <br />
            <div className={cn(Style.AboutContent)}>
              TEDxVITPune was among the first TEDx events in Pune and has grown
              to be a premier platform for furthering TED's mission of 'Ideas
              Worth Spreading' within its local community. Over the past nine
              events, TEDxVITPune has brought together visionaries, thinkers,
              and doers of different disciplines from around the country to
              create a one-day event filled with ideas and discussions that
              contribute to meaningful change. Read more
            </div>
          </div>
          <div className={cn(Style.infromationBox)}>
            <div className={cn(Style.sectionTitle, 'heading')}>
              What is TEDxVITPune?
            </div>
            <br />
            <div className={cn(Style.AboutContent)}>
              TEDxVITPune was among the first TEDx events in Pune and has grown
              to be a premier platform for furthering TED's mission of 'Ideas
              Worth Spreading' within its local community. Over the past nine
              events, TEDxVITPune has brought together visionaries, thinkers,
              and doers of different disciplines from around the country to
              create a one-day event filled with ideas and discussions that
              contribute to meaningful change. Read more
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
