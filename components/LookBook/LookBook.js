import {
  map,
  preloadImages,
  getTranslationDistance,
  getDistance,
} from '@/components/LookBook/utils'
import { gsap } from 'gsap'
import { useEffect } from 'react'

class Item {
  DOM = {
    el: null,
    image: null,
  }

  constructor(DOM_el) {
    this.DOM.el = DOM_el
    this.DOM.image = this.DOM.el.querySelector('.grid__item-img')
  }
}

class SpreadGrid {
  DOM = {
    el: null,
    items: null,
  }
  expanded = -1
  previousExpanded = -1

  constructor(DOM_el) {
    this.DOM.el = DOM_el
    this.DOM.items = [...this.DOM.el.querySelectorAll('.grid__item')]
    this.items = []
    this.DOM.items.forEach((item) => this.items.push(new Item(item)))
    this.options = {}
    this.options.duration = Number(this.DOM.el.dataset.duration) || 0.8
    this.options.ease = this.DOM.el.dataset.ease || 'power4'
    this.options.scale = Number(this.DOM.el.dataset.scale) || 2
    this.options.skew = Number(this.DOM.el.dataset.skew) || 0
    this.options.maxRotation = Number(this.DOM.el.dataset.maxRotation) || 0
    this.options.spread = Number(this.DOM.el.dataset.spread) || 80
    this.options.maxDistance = Number(this.DOM.el.dataset.maxDistance) || 500

    this.initEvents()
  }

  initEvents() {
    for (const item of this.items) {
      item.DOM.el.addEventListener('click', () => this.expand(item))
    }
  }

  expand(item) {
    if (this.tl) {
      this.tl.kill()
    }
    const itemIdx = this.items.indexOf(item)
    this.previousExpanded =
      this.expanded !== -1 && this.expanded !== itemIdx ? this.expanded : -1
    this.expanded = this.expanded === itemIdx ? -1 : itemIdx
    this.tl = gsap
      .timeline({
        defaults: {
          duration: this.options.duration,
          ease: this.options.ease,
        },
      })
      .addLabel('start', 0)
      .addLabel('end', this.options.duration)
      .set(
        item.DOM.el,
        {
          zIndex: this.expanded === -1 ? 1 : 999,
        },
        this.expanded === -1 ? 'end' : 'start'
      )

    if (this.options.skew) {
      this.tl
        .to(
          item.DOM.el,
          {
            duration: this.options.duration * 0.4,
            ease: 'sine.in',
            scale: 1 + (this.options.scale - 1) / 2,
            skewX:
              this.expanded === -1 ? -1 * this.options.skew : this.options.skew,
            skewY:
              this.expanded === -1 ? -1 * this.options.skew : this.options.skew,
            x: 0,
            y: 0,
            rotation: 0,
          },
          'start'
        )
        .to(
          item.DOM.el,
          {
            duration: this.options.duration * 0.6,
            ease: 'power4',
            scale: this.expanded === -1 ? 1 : this.options.scale,
            skewX: 0,
            skewY: 0,
          },
          `start+=${this.options.duration * 0.4}`
        )
    } else {
      this.tl.to(
        item.DOM.el,
        {
          scale: this.expanded === -1 ? 1 : this.options.scale,
          x: 0,
          y: 0,
          rotation: 0,
        },
        'start'
      )
    }

    if (this.previousExpanded !== -1) {
      const prevItem = this.items[this.previousExpanded]
      const delay = 0
      this.tl
        .set(
          prevItem.DOM.el,
          {
            zIndex: 1,
            delay: delay,
          },
          'start'
        )
        .to(
          prevItem.DOM.el,
          {
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0,
            delay: delay,
          },
          'start'
        )
    }

    const filteredArray = this.items.filter((otherItem) => otherItem != item)

    for (let otherItem of filteredArray) {
      const { x, y } =
        this.expanded === -1
          ? { x: 0, y: 0 }
          : getTranslationDistance(
              otherItem.DOM.el,
              item.DOM.el,
              this.options.spread,
              this.options.maxDistance
            )
      const delay = 0
      const zIndex = Math.round(
        map(getDistance(otherItem.DOM.el, item.DOM.el), 0, 100000, 998, 1)
      )

      const rotationInterval = this.options.maxRotation
        ? Math.max(
            Math.round(
              map(
                getDistance(otherItem.DOM.el, item.DOM.el),
                0,
                500,
                this.options.maxRotation,
                0
              )
            ),
            0
          )
        : 0

      this.tl
        .set(
          otherItem.DOM.el,
          {
            zIndex: this.expanded === -1 ? 1 : zIndex,
            delay: delay,
          },
          this.expanded === -1 ? 'end' : 'start'
        )
        .to(
          otherItem.DOM.el,
          {
            x: x,
            y: y,
            rotation:
              this.expanded === -1
                ? 0
                : gsap.utils.random(rotationInterval * -1, rotationInterval),
            delay: delay,
          },
          'start'
        )
    }
  }
}

export default function LookBook({ years, title, color }) {
  useEffect(() => {
    ;[...document.querySelectorAll('.grid')].forEach(
      (grid) => new SpreadGrid(grid)
    )
  }, [])

  return (
    <div
      className="grid gap-6 grid-cols-4 w-11/12 py-16 mx-auto pointer-events-none md:grid-cols-8"
      data-duration="1"
      data-ease="elastic.out(0.1)"
      data-scale="1.5"
      data-max-rotation="40"
      data-spread="150"
      data-max-distance="2000"
    >
      <div
        className={`pb-12 relative h-full pointer-events-auto will-change-transform col-span-4 md:col-span-8 text-5xl heading flex items-center justify-center text-${color}`}
      >
        {title}
      </div>
      {
        
      }

      {years.map((year) => (
        <>
          <div className="mt-16 md:mt-0"></div>
          <div className="grid__item relative m-0 pointer-events-auto will-change-transform col-span-2 mt-16 md:mt-0">
            <div
              className="grid__item-img w-full aspect-[206/139] bg-cover cursor-pointer"
              style={{ backgroundImage: `url(lookbook/${year}/1.png)` }}
            ></div>
          </div>
          <div className="md:hidden mt-16 md:mt-0">
            <h2 className="heading text-transparent bg-clip-text bg-gradient-to-b from-white/80 from-40% to-white/20 to-70% text-9xl absolute z-20 -rotate-90 w-screen left-0 h-[450px] flex justify-center items-center my-10 font-outline">
              {year}
            </h2>
          </div>
          {[2, 3].map((i) => (
            <div className="grid__item relative m-0 pointer-events-auto will-change-transform col-span-2">
              <div
                className="grid__item-img w-full aspect-[206/139] bg-cover cursor-pointer"
                style={{ backgroundImage: `url(lookbook/${year}/${i}.png)` }}
              ></div>
            </div>
          ))}
          <div className="hidden md:block">
            <h2 className="heading text-transparent bg-clip-text bg-white/30  text-9xl absolute h-72 lg:h-80 pt-12 xl:h-96 flex justify-center items-center w-full left-0 leading-none text-center z-20 font-outline">
              {year}
            </h2>
          </div>
          {[4, 5, 6, 7].map((i) => (
            <div className="grid__item relative m-0 md:mb-16 pointer-events-auto will-change-transform col-span-2">
              <div
                className="grid__item-img w-full aspect-[206/139] bg-cover cursor-pointer"
                style={{ backgroundImage: `url(lookbook/${year}/${i}.png)` }}
              ></div>
            </div>
          ))}
        </>
      ))}
    </div>
  )
}
