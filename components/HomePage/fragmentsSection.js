import fragmentStyle from '../../styles/home/fragment.module.scss'

export default function FragmentsSection() {
  return (
    <div className={fragmentStyle.fragmentSection}>
      <div>
        <h2 className={'heading'} id={fragmentStyle.fragmentHeading}>
          FRAG<br />MENTS
        </h2>
      </div>
      <div className={fragmentStyle.fragmentContainer}>
        All the strum and drag in our heads draws down to introspecting-
        engulfed by turmoil. From raging uproars to cheerful celebrations,
        spiralling times to exciting unknowns, we've been thriving amidst the
        chaos. We often wonder, will we ever seek answers? Will the chaos make
        sense? Now is the time we inch closer to our reality by being grateful
        for the minute moments, and not losing a sense of empathy, triumphing in
        our trials- through the balance that comes from within.

        <button>Button</button>
      </div>
    </div>
  )
}
